const { Gitlab } = require('@gitbeaker/node');

const api = new Gitlab({
    host: 'https://git.promedius.dev',
    token: 'VX32ZQCRyxL16D4H1f66',
  });
  
/*
HOW TO USE
`curl -X POST localhost:8080 --data '{"title":"test #", "description":"works well"}'`
`curl -X POST 54.180.201.194:8080 --data '{"title":"test #", "description":"works well"}'`
*/
