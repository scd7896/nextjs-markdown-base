# Next js - markdown

## 개요
markdown을 이용한 블로그, 포트폴리오 사이트를 만들기 위한 보일러 플레이트 입니다.  
next js기반으로 사용하고 있습니다.

### 설치 방법
```npx create-next-markdown-blog-app my-app```
### 지원기능
- public/posts에 md 파일을 작성하면 ```/posts/{md 파일 명}``` 으로 사이트를 만들어 줍니다.
- public/posts에 md 파일에 헤더를 작성하면 그것을 바탕으로 list를 알 수 있는 json 파일을 생성해줍니다.

### 사용 방법
- 깃헙페이지에 자동 배포를 사용하고 싶지 않으신 분은 .github/workflows를 삭제하셔도 좋습니다.
- 깃헙페이지를 사용하고자 하시는 분들은 github secrets를 설정해주셔야 합니다.
  - https://github.com/settings/tokens 에서 repo_hook, repo, user 권한을 모두 준 토큰을 하나 만듭니다.
  - 만든 토큰을 repo -> settings -> Secrets 에 REPO_TOKEN 이라는 이름으로 하나 만듭니다.
  - repo -> settings -> environments -> github-pages 로 들어가서 Deployment branchs를 gh-pages와 main으로 설정합니다.
  - 프로젝트로 돌아와서 next.config.js의 basePath.production을 자신의 repo 이름으로 넣고 main으로 푸쉬 하면 자동으로 github actions이 작동되어 빌드 후 배포하게 됩니다. 
- 게시물 작성 방법
  - posts 폴더에 md 파일을 추가해서 작성하면 됩니다. markdown 뿐만 아니라 html, js도 작성이 가능합니다.
  - posts는 ```/posts/${mdname}.html```로 배포됩니다.
- 템플릿 수정 방법
  - 프로젝트의 ```/pages/posts/[id].tsx```를 수정하면 됩니다. 
  - 정적 빌드 배포로 내보내는 것이 원칙이기 때문에, 빌드시에 스타일만 적용 할 수 있다면 어떤 스타일링을 하셔도 문제 없습니다.
