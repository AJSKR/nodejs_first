## nodejs_first
Log first step experience to Node.js

### 개요
node.js를 처음 입문하는 한걸음 한걸음을 적어두는 레포지터리.  
...  
잘은 모르지만 대략 보자면,
예전부터 최근까지도 세상 모든 웹브라우저 (즉, 웹클라이언트) 상에서 동작하는 
유일한 표준 랭귀지 (프로그래밍 언어)는 자바스크립트였음. (자바와는 완전 다름)  
반면에, 웹서버쪽에서는 그와 판이하게 다른 각기의 랭귀지가 돌아갔었기에...  
웹서버 상 개발과 웹브라우저 상 개발 둘 사이에 괴리감이 컸음.  
node.js는 웹서버에서 자바스크립트(ecma 기준) 언어를 돌릴 수 있게 해주기에 의미가 큼.  

### 설치 (NVM)
본 내용은 2020년도말 AWS에서 무료 프리티어 인스턴스를 만들어서 bash에서 진행한 것 위주로 기록함.  

- 구글 검색 "nvm install" -> https://github.com/nvm-sh/nvm 에 도착. 아래 내용을 습득함.
- node.js의 메인 실행파일인 node를 사용할 때에, 특정 버젼만 설치하면 의존성 등 난관을 겪으므로, 여러 버젼을 설치하거나 선택 실행할 수 있도록 하는 NVM(버젼매니져)을 설치한 뒤 그를 통해 노드를 설치하고 버젼을 지정하여 사용하게 됨.
- NVM설치: bash에서 설치를 위한 첫 행 입력 `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
    - 참고로 wget의 경우 `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash` 라고 안내되어 있음.
- 유저홈에 .bashrc 마지막에 환경 관련 설정이 추가됨. 웹 안내에서 보면 아래와 같음.
    - `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`
- 위 행 앞에 `source` 명령어를 붙여 실행하면 nvm 로드가 가능하겠으나, 그냥 `exit`하여 나간 후 다시 재접속하면 nvm 사용 가능해짐.
- `nvm` 명령어만 쳐보면 사용법이 길게 출력됨. 주로 쓰게 될 명령어는 install, use, run|exec, ls 정도.
- `nvm ls`를 쳐보면 아무것도 설치되어 있지 않음을 알 수 있음.
- `nvm ls-remote`라고 쳐보면 node.js 서버측에서 제공하는 설치 가능본 버젼 리스트가 나옴. LTS 버젼 중 사용 원하는 버젼 스트링을 따놓음.
- 설치(install) 명령어에 버젼명을 쳐서 (예: `nvm install v14.15.1`) 설치함. 성공 메시지인지 확인 필요.
- `nvm ls`를 다시 쳐보면 설치가 된 것을 확인 가능.
    - 참고 출력: `->     v14.15.1⏎default -> v14.15.1⏎iojs -> N/A (default)⏎unstable -> N/A (default)⏎node -> stable (-> v14.15.1) (default)⏎stable -> 14.15 (-> v14.15.1) (default)⏎lts/* -> lts/fermium (-> v14.15.1)⏎lts/argon -> v4.9.1 (-> N/A)⏎lts/boron -> v6.17.1 (-> N/A)⏎lts/carbon -> v8.17.0 (-> N/A)⏎lts/dubnium -> v10.23.0 (-> N/A)⏎lts/erbium -> v12.20.0 (-> N/A)⏎lts/fermium -> v14.15.1
- 어느 버젼을 사용할지 선택하는 use 명령어 실행: `nvm use ㅍ14.15.1`
- 이제 node 명령어가 사용 가능해짐. `node -v` 라고 치면 버젼이 표시될 것임.
- Node 사용 시작.

### ToDo
몰랑. 샘플 이미지 시침질? 봇?
