const { Gitlab } = require('@gitbeaker/node');

const api = new Gitlab({
  host: 'https://git.promedius.dev',
  token: 'VX32ZQCRyxL16D4H1f66',
});

require('http').createServer((req,res)=>{
  let body = [];
  req.on('data', chunk => {
    body.push(chunk);
  }).on('end', async ()=> {
    let content;
    try {
      content = JSON.parse(Buffer.concat(body).toString());
    } catch(e) {
      console.error(e);
    }
    console.log(req.method, req.url, content);
    const { title, description } = content;
    if (title && description) {
      await api.Issues.create(130, {
        title, description
      });
    }
    res.end("ok");
  });
}).listen(8080);

/*
HOW TO USE
`curl -X POST localhost:8080 --data '{"title":"test #", "description":"works well"}'`
`curl -X POST 54.180.201.194:8080 --data '{"title":"test #", "description":"works well"}'`
*/
