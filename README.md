
# pet Store (반려동물 용품 쇼핑몰)

**쇼핑몰 제작 프로젝트**

기간 / 투입인원 : 2021.10.04 ~  (계속 update 중) / 1명(개인프로젝트)

환경 : Chrome 브라우저

주제 : 쇼핑몰

개발툴 : visual studio code, photoshop

사용 기술 : Html5, CSS3, Javascript, JQuery

## 프로젝트 상세내용
주제
```
 * 쇼핑몰 제작 프로젝트
 ```
목표
```
 1. 개인 쇼핑몰 사이트 제작
  -메인페이지, 상품페이지, 상품상세페이지, 로그인/회원가입 페이지, 공지, 컨택페이지 등 제작
  
 2. 반응형 사이트로 제작
  -미디어쿼리를 작성하여 테블릿버전, 모바일버전 제작
  
 3. 전체적인 구성과 디자인
  - HTML과 CSS를 사용하여 디자인과 반응형 레이아웃 작성
  - 포토샵으로 이미지와 로고 수정 및 제작
  ```
## 실행 화면 및 구현 기능

>알아보기 쉽게 빨간 선으로 구분했습니다.

**1. 메인화면**

<img width="1080" alt="main디자인_마크" src="https://user-images.githubusercontent.com/96249167/147672422-b1da9664-11bf-4197-9b37-b6524ca95b20.png">


* header는 스크롤이 되어도 픽스되도록함. jquery를 사용하여 헤더에 마우스를 올렸을때 상세 nav가 밑으로 animate되도록 함
* box1 갤러리 양쪽 화살표 버튼 클릭하면 넘어가도록 함. 
* box2는 이미지를 클릭하였을때, 해당 동물의 상품 카테고리로 넘어가도록 함.
* box3에서 상품을 클릭하였을때 상품의 상세페이지로 넘어가도록 함.
* box3에서 더보기를 클릭하였을때 section을 animate하여 상품 리스트가 더 보이도록 할 계획(수정중)


**2. 상품페이지 화면**

<img width="1040" alt="product디자인_마크" src="https://user-images.githubusercontent.com/96249167/147672459-7d8c47c2-a741-4ff0-8b70-e8686a2e1b84.png">

* 상품을 클릭하였을때 상품 상세페이지로 넘어가도록함.
* aside를 사용하여 왼쪽에 서브 메뉴 구현
* 해당 페이지 카테고리를 강조함


**3. 상품 상세페이지 화면**
<img width="943" alt="상품상세페이지 디자인" src="https://user-images.githubusercontent.com/96249167/147672545-c8a9506c-16f9-4c43-96d8-e545c35335ab.png">

* 수량의 +,-버튼을 클릭했을 때 수량에 따른 금액이 총금액에 반영되도록 함 (수정중)

**4. 로그인과 회원가입 화면**
![loginJoin디자인](https://user-images.githubusercontent.com/96249167/147866141-e624b2e9-49de-487c-8fc0-5d8ee6ca239a.jpg)

**5. contact 화면**
![image](https://user-images.githubusercontent.com/96249167/147866168-84b87983-5ea6-4c04-84f6-16eb3bd20e81.png)




## 테블릿 & 모바일 버전
![모바일버전디자인](https://user-images.githubusercontent.com/96249167/147866267-fbcc0f26-a773-470c-bfb0-6c43c65e91af.jpg)
*  햄버거 아이콘을 만들어서 클릭하였을 때, 서브메뉴가 슬라이드되며 나타나도록 함.
*  상품 리스트를 2열로 줄여서 간단히 보이도록 함.
*  footer를 간략하게 만들고, 화살표 아이콘을 누르면 상세 내용이 밑으로 슬라이드되며 나타나도록 함. 


