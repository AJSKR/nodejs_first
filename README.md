# nodejs_first
Log first step experience to Node.js

## 개요
node.js를 처음 입문하는 한걸음 한걸음을 적어두는 레포지터리.  
...  
잘은 모르지만 대략 보자면,
예전부터 최근까지도 세상 모든 웹브라우저 (즉, 웹클라이언트) 상에서 동작하는 
유일한 표준 랭귀지 (프로그래밍 언어)는 자바스크립트였음. (자바와는 완전 다름)  
반면에, 웹서버쪽에서는 그와 판이하게 다른 각기의 랭귀지가 돌아갔었기에...  
웹서버 상 개발과 웹브라우저 상 개발 둘 사이에 괴리감이 컸음.  
node.js는 웹서버에서 자바스크립트(ecma 기준) 언어를 돌릴 수 있게 해주기에 
통일성 있는 웹앱 개발이 가능하다는 의미가 큼.  

## Node.js 설치 (NVM)
본 내용은 2020년도말 AWS에서 무료 프리티어 인스턴스를 만들어서 bash에서 진행한 것 위주로 기록함.  
(참고로, 인스턴스를 만드는 과정에서 별도로 추가 지정할 1가지: 네트워크 보안 인바운드규칙 8080포트 사용자지정TCP 0.0.0.0/0 추가.)

### NVM 개념 및 사용
node.js의 메인 실행파일인 node를 사용할 때에, 특정 버젼만 설치하면 의존성 등 난관을 겪으므로,  
여러 버젼을 설치하거나 선택 실행할 수 있도록 하는 NVM(버젼매니져)을 설치한 뒤 그를 통해 노드를 설치하고 버젼을 지정하여 사용하게 됨.  

마련된 AWS 인스턴스에서 웹서버 등 역할을 하며 웹앱을 돌리려면, 다른 (아파치 및 언어 등) 설치 필요없이 node.js만 설치해도 무방함.  
바로 노드를 설치해도 되겠으나, 위 설명대로 NVM을 설치하고 NVM을 통하여 node의 버젼을 선택적으로 관리/선택해가며 사용함.
- **설치**: 구글 검색 "nvm install" -> https://github.com/nvm-sh/nvm 에 도착. 아래 내용을 습득함.
  - NVM설치: bash에서 설치를 위한 첫 행을 입력함.
    - 컬이 가능하면 `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
    - 참고로 wget의 경우 `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
  - 유저홈에 .bashrc 마지막에 환경 관련 설정이 추가됨. 웹 안내에서 보면 아래와 같음.
    - `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`
- **NVM 실행 및 node설치**: 위 bashrc를 `source` 명령어로 실행하면 nvm 로드가 가능하겠으나, 그냥 `exit`하여 나간 후 다시 재접속하면 nvm 사용 가능해짐.
  - `nvm` 명령어만 쳐보면 사용법이 길게 출력됨. 주로 쓰게 될 명령어는 install, use, run|exec, ls 정도.
  - `nvm ls`를 쳐보면 아무것도 설치되어 있지 않음을 알 수 있음. (`N/A⏎iojs -> N/A (default)⏎node -> stable (-> N/A) (default)⏎unstable -> N/A (default)`
  - `nvm ls-remote`라고 쳐보면 node.js 서버측에서 제공하는 설치 가능본 버젼 리스트가 나옴. LTS 버젼 중 사용 원하는 버젼 스트링을 따놓음.
  - `nvm install v14.15.1` 실행, 즉 설치(install) 명령어에 버젼명을 지정하여 설치. 성공 메시지인지 확인 필요.
  - `nvm ls`를 다시 쳐보면 설치가 된 것을 확인 가능.
    - 참고 출력: `->     v14.15.1⏎default -> v14.15.1⏎iojs -> N/A (default)⏎unstable -> N/A (default)⏎node -> stable (-> v14.15.1) (default)⏎stable -> 14.15 (-> v14.15.1) (default)⏎lts/* -> lts/fermium (-> v14.15.1)⏎lts/argon -> v4.9.1 (-> N/A)⏎lts/boron -> v6.17.1 (-> N/A)⏎lts/carbon -> v8.17.0 (-> N/A)⏎lts/dubnium -> v10.23.0 (-> N/A)⏎lts/erbium -> v12.20.0 (-> N/A)⏎lts/fermium -> v14.15.1
- **Node 버젼 선택**: 어느 버젼을 사용할지 선택하는 use 명령어 실행: `nvm use v14.15.1`
  - 이제 node 명령어가 사용 가능해짐. `node -v` 라고 치면 버젼이 표시될 것임.
  - Node 사용 시작. 이제 이 인스턴스 (인터넷 상에 있는 서버역할) 상에서 웹앱을 짤 수 있음.

## 작업 디렉토리 및 Git 설정
깃의 경우 이 파일을 여기에 쓰고 있듯이, GitHub에 개인메일 아이디로 만든 AJSKR에서 사용하기로.  
첫 프로젝트명 nodejs_first. 즉, github.com/AJSKR/nodejs_first  
- **개발용 디렉토리**: AWS 인스턴스 상에서 직접 소스 파일을 두고 수정하며 즉시 확인하며 개발하기로.
  - 내가 접속용으로 쓰는 (터미널 역할의) 컴퓨터에는 굳이 소스를 두거나 편집하지 않아도 됨. 모든 작업은 리모트로.
  - AWS 인스턴스에 SSH 접속. 기본 아이디는 우분투 영어로. 접속 직후 홈폴더에 있게 되는 것이 상식이나, 확실히 하기 위해: `cd` 혹은 `cd ~`를 입력.
  - 홈 폴더 (홈디렉토리) 아래에 개발 프로젝트를 하기 위한 경로로 src 라는 이름의 폴더(디렉토리) 생성: `mkdir src`
  - src 폴더 아래에 한가지 씩의 프로젝트 폴더를 만들어야 할 것이나, git clone을 하게 되면 자동으로 생길 것이므로 스킵.
- **GIT CLONE**: 위 설명한 GitHub에 이미 readme 등이 작성되어 있으므로, clone을 하여 시작하기로 함. (만약 반대로, AWS에서 먼저 npm, git 등을 이닛하고 github에 넣으려고 한다면 readme 때문에 머지를 하는 등 복잡함.)
  - `git` 명령어를 쳐서 git이 사용 가능한지 확인. 없으면 설치: `sudo apt-get update` 치고 `sudo apt install git` (또는 git-all)
  - src 경로에서 클론 명령어 입력: `git clone https://github.com/AJSKR/nodejs_first.git`
  - clone이 정상적으로 마쳐지면 nodejs_first 폴더가 생기고 README.md와 . git 이 생겨 있음.
  - 클론을 했으므로 당연히 .git이 생성되어 있고, 별도의 git init 필요 없음. 덤으로 본 문서인 readme까지 동기화 됨.
  - 아직 노드 개발을 위한 node 쪽 init은 되지 않은 상태임.
- **node 개발 시작**: 지금까지의 과정은 시스템 전체에 노드를 설치하고, 어떤 언어든지 형상관리가 가능한 git 설정을 마친 것.
  - 노드 개발을 시작하기 위해 nodejs_first 폴더에 들어가서 (`cd nodejs_first`) 초기화 명령어 `npm init -y` 실행.
  - 초기화 되어 package.json 생성됨: name, version, description, main, scripts, keywords, author, license, repository, bugs, homepage
    - 참고로 clone 안하고 npm init 시: name, version, description, main, scripts, keywords, author, license
  - 이제 node 개발을 시작하면 됨, 노드용 패키지들을 추가 설치하게 되는 등의 상황 대비를 위해 .gitignore 설정이 필요함. 추후 설명됨.

## 개발용 에디터 설정
2020년이니 VS Code + Remote 플러그인을 사용하기로 함. AWS 인스턴스 상에 있는 소스를 직접 다루며 개발 가능함.
- 구글 검색 등, Microsoft 본진 웹사이트에 가서 VS Code 다운로드. 설치. (AWS쪽이 아니라, 내가 사용하는 컴퓨터에 설치말임.)
- VS Code (이하 code로 짧게 칭함) 실행. 새로운 환경의 첫실행 때마다 나오는 웰컴독은 바로 닫아버려도 무방함.
- 좌측 아이콘 메뉴 중 네모4개 Extensions 들어가서 remote 검색 > 여거 패키지 중 통합패키지인 "Remote Developement" 설치.
- 좌 하단 녹색 버튼 ">.<" 누르면 많은 메뉴 중 "Remote-SSH Connect to host" 로 아이디@접속주소 입력하고 다음 창에서 비번 등 입력.
  - 참고로, Add new host에서 접속 커맨드 입력하여 반복접속 대상을 설정하여 VS Code 사용 컴퓨터 상 유저홈(~) .ssh 폴더에 config 파일에 저장 가능.
    - 내용예시: Host AWS_AJ_PE / HostName 아이피주소 / IdentityFile ~\.ssh\pem파일이름 / User ubuntu
    - 참고로, 자동생성시 위 세번째 항목에서의 경로명에 구분자 입력처리가 제대로 안되니, 다시 편집하여 구분자를 넣어줘야 함.
- Remote 접속 선택하면 새창이 뜸. AWS 인스턴스에 접속해 봄. 접속 성공시 서버 종류를 물어 옴. Linux로 지정.
  - 참고로, VS code 에디터는 접속 성공시 대상 서버 상에 .vscode 폴더를 만들어서 code용 환경 및 사용자 설정을 저장하게 됨.
- welcome 뜨면 좌측 메뉴중 문서두개 아이콘인 Explorer에서 Open Folder 버튼을 누르고 유저홈 아래 src 아래에 프로젝트 폴더 선택 open.
- Ctrl+\`(틸드 아래 백틱) 누르면 AWS측 콘솔(터미널, 쉘)이 뜨니 명령어를 쳐보는 등 테스트. 코딩 편집 준비 완료.

## 첫 프로그램 - issuePutBot
- VS code 좌측뷰에 마우스 올리면 상단에 버튼이 생김. 새파일 만들기 누르고 파일 이름 지정: issuePushBot.js
- GitLab 접근을 잘 짜 놓은걸 검색해서 찾음. GitBeaker. @gitbeaker/node
- 첫 줄에 `const { Gitlab } = require('@gitbeaker/node');` 입력하고 저장. 커밋.
- 사내 설치형 GitLab 쪽에서 bot 생성 및 토큰 발행. (자세한 설명 생략.)
- 행추가 `const api = new Gitlab({ host: 'https://깃랩주소따오기', token: '토큰키따오기',});` 입력하고 저장. 커밋.
- 콘솔에서 node 치고 들어가서 첫 행을 그대로 쳐보면 동작하지 않을 것임. 디펜던시 로드가 안되었기 때문. 일단 둠.
- 지금쯤 remote 저장 시도 -> github 연계 열기 (추후 상술)
- 콘솔에서 `npm add @gitbeaker/node` 실행.
    - package.json 안에 `"dependencies": {"@gitbeaker/node": "^25.3.0"}` 같은 식으로 알아서 추가 됨.
- node_modules 폴더가 생기고 수많은 파일들이 들어왔으므로, .gitignore 파일을 만들어 node_modules를 제외해야 commit이 평온해짐.
    - .gitignore, package.json, package-lock.json 세 파일은 필요하므로 스테이징에 포함
- 콘솔에서 node 치고 들어가서 첫 행을 그대로 쳐보면 동작함. Gitlab객체 접근 됨. 둘째 행도 실행될 것임. 저장. 커밋. 푸쉬.
- 실작동을 위한 코딩. `require('http').createServer((req,res)=>{ 내용 구현 코드들 }).listen(8080);` 등등 입력. 저장. 커밋.
- 

## ToDo
몰랑. 샘플 이미지 시침질? 봇?
