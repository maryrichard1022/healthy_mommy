# PROJECT: Healthy Mommy
## 소개


### 팀 구성
- FE : [Github](https://github.com/maryrichard1022/healthy_mommy)
- BE : [Github](https://github.com/seoyun-dev/capstone1)

### 개발 기간
- 개발 기간 : 2023년 04.14~06.04
- 협업 툴 : Github, Notion


## 김가연(FE)의 기여
### CSS
- 헤더, 푸터 (모든 페이지에 상단과 하단에 삽입)
- 메인 페이지 (이미지 캐러셀, 신상품 리스트)
- 물품 리스트 페이지 (메인 페이지와 동일한 CSS)
- 로그인 및 회원가입 페이지
- 장바구니
- 결제 페이지
- 주문/결제 완료 페이지
-  매장 위치 페이지
- 404 error 페이지
- 메인 페이지, 물품 리스트 페이지 반응형 CSS

### 주요 기능 및 API 연동
#### 메인 페이지
- 카테고리 필터 버튼
- 백서버로부터 물품 리스트 가져오기 (API GET)
- 장바구니 물품 추가 API POST (물품 리스트 코드
이용)

 #### 로그인 및 회원가입 페이지
- 카카오 서버로부터 사용자의 id, 닉네임 받음
(API GET)
- 백서버에 사용자 id와 닉네임 전달 (API POST)
- SessionStorage 이용하여 로그인 상태 유지
  
#### 장바구니 페이지
- 장바구니 물품 가져오기 (API GET)
- 장바구니 수량 조절 (API PATCH)
- 장바구니 물품 삭제 (API DELETE)
  
#### 결제 페이지
- 결제할 물품 가져오기 (API GET
- 배송지 정보와 tid(결제고유번호)를 백서버에 전달
(API POST)
- 배송지 작성 위해 다음 우편번호 API 이용
- 카카오페이 API 이용하여 테스트 결제 구현
(카카오페이 서버에 결제 준비 API POST)

#### 결제 완료 페이지
- 카카오페이 결제 성공 시 카카오페이 서버에 결제
승인 요청 (API POST)

#### 마이페이지 (주문취소 카카오 서버 연동)
- 결제 시 카카오페이 서버로부터 받은 tid(결제고유
번호) 이용하여 카카오 페이 결제 취소 (API POST)
- 최근 주문 내역 순으로 주문내역 정렬
매장 위치 페이지(카카오맵 API)
- 카카오 맵 API 이용하여 매장 위치 표현

## 프로젝트최종 결과
- 유튜브 : [Healthy Mommy 최종 결과](https://youtu.be/bcZc6nXbB6Q)
