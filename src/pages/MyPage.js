//마이페이지(주문내역조회) 해나가 작업할 부분!!!
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Product from "../components/Product";
import "./MyPage.css";
import API from "../config";
/* import Counter from "../components/Counter"; */

const MyPage = () => {
  const products_sample = [
    {
      "id": 1,
      "receiver": "명지대큰손",
      "order_status": "결제완료",
      "order_number": "2023052113552236750100001",
      "products": [
          {
              "id": 1,
              "product_img": "https://shopping-phinf.pstatic.net/main_3574061/35740611281.20230503095936.jpg?type=f640",
              "product_name": "이고진 더쎈 풀업밴드 20806 옐로우 탄력밴드",
              "product_price": "1050.00",
              "quantity": 22,
              "product_total_price": "23100.00"
          },
          {
              "id": 2,
              "product_img": "https://shopping-phinf.pstatic.net/main_3022245/30222450618.20230511155510.jpg?type=f640",
              "product_name": "파비츠 EVA 폼롤러 33cm",
              "product_price": "25530.00",
              "quantity": 14,
              "product_total_price": "357420.00"
          },
          {
              "id": 3,
              "product_img": "https://shopping-phinf.pstatic.net/main_1345221/13452217992.20201214154239.jpg?type=f640",
              "product_name": "종근당건강 칼슘 앤 마그네슘 비타민D 아연 1000mg x 180정",
              "product_price": "10790.00",
              "quantity": 14,
              "product_total_price": "151060.00"
          }
      ]
  },
  {
      "id": 2,
      "receiver": "김가연",
      "order_status": "결제완료",
      "order_number": "2023052408351952042000002",
      "products": [
          {
              "id": 4,
              "product_img": "https://shopping-phinf.pstatic.net/main_3828576/38285763618.20230227090321.jpg?type=f640",
              "product_name": "솔가 엽산 400 280mg x 100정",
              "product_price": "12790.00",
              "quantity": 6,
              "product_total_price": "76740.00"
          },
          {
              "id": 5,
              "product_img": "https://shopping-phinf.pstatic.net/main_3972762/39727622619.20230501170819.jpg?type=f640",
              "product_name": "닥터트루 프리미엄 유기농 비타민D 3000IU 300mg X 60정",
              "product_price": "34190.00",
              "quantity": 16,
              "product_total_price": "547040.00"
          },
          {
              "id": 6,
              "product_img": "https://shopping-phinf.pstatic.net/main_3206506/32065068618.20230111135442.jpg?type=f640",
              "product_name": "뉴트원 칼슘 마그네슘 비타민D 1200mg x 60정",
              "product_price": "20350.00",
              "quantity": 21,
              "product_total_price": "427350.00"
          },
          {
              "id": 7,
              "product_img": "https://shopping-phinf.pstatic.net/main_3986077/39860776313.20230508213957.jpg?type=f640",
              "product_name": "하렘 팬츠 요가 조거 요가복 임산부 편한 바지 여성 운동복 필라테스",
              "product_price": "22100.00",
              "quantity": 1,
              "product_total_price": "22100.00"
          }
      ]
  },
  {
      "id": 3,
      "receiver": "김가연",
      "order_status": "결제완료",
      "order_number": "2023052408370250457300003",
      "products": [
          {
              "id": 8,
              "product_img": "https://shopping-phinf.pstatic.net/main_3986077/39860776313.20230508213957.jpg?type=f640",
              "product_name": "하렘 팬츠 요가 조거 요가복 임산부 편한 바지 여성 운동복 필라테스",
              "product_price": "22100.00",
              "quantity": 1,
              "product_total_price": "22100.00"
          },
          {
              "id": 9,
              "product_img": "https://shopping-phinf.pstatic.net/main_3972762/39727622619.20230501170819.jpg?type=f640",
              "product_name": "닥터트루 프리미엄 유기농 비타민D 3000IU 300mg X 60정",
              "product_price": "34190.00",
              "quantity": 1,
              "product_total_price": "34190.00"
          },
          {
              "id": 10,
              "product_img": "https://shopping-phinf.pstatic.net/main_3828576/38285763618.20230227090321.jpg?type=f640",
              "product_name": "솔가 엽산 400 280mg x 100정",
              "product_price": "12790.00",
              "quantity": 3,
              "product_total_price": "38370.00"
          }
      ]
  },
  {
      "id": 4,
      "receiver": "김가연",
      "order_status": "결제완료",
      "order_number": "2023052408534880232400004",
      "products": [
          {
              "id": 11,
              "product_img": "https://shopping-phinf.pstatic.net/main_3951969/39519695618.20230421161708.jpg?type=f640",
              "product_name": "우성레포츠 아리프 안티버스트 미니 짐볼 25cm 2개 세트",
              "product_price": "7900.00",
              "quantity": 1,
              "product_total_price": "7900.00"
          }
      ]
  },
  {
      "id": 5,
      "receiver": "김가연",
      "order_status": "결제완료",
      "order_number": "2023052409015497147000005",
      "products": [
          {
              "id": 12,
              "product_img": "https://shopping-phinf.pstatic.net/main_3828576/38285763618.20230227090321.jpg?type=f640",
              "product_name": "솔가 엽산 400 280mg x 100정",
              "product_price": "12790.00",
              "quantity": 1,
              "product_total_price": "12790.00"
          }
      ]
  }
  ];
  const [Productlist, setProductlist] = useState(products_sample);
  const navigate = useNavigate();
  const location = useLocation();
 

  useEffect(() => {
    const kakao_id = sessionStorage.getItem("kakao_id");
    if (!kakao_id) {
      alert("로그인이 필요합니다.");
      navigate("/Login");
      return;
    }

    fetch(`${API.order}`, {
      method: "GET",
      headers: {
        Authorization: kakao_id,
      }
    })
      .then((res) => res.json())
      .then((result) => {
        //     setTotalItems(result);
        setProductlist(result.RESULT.orders_list);
        console.log(result.RESULT.orders_list);
      });
    
  },[]);




  return (
    <div className="mypage">
      <div className="contentWrapper">
        <Nav />
        
          <h1> 주문내역조회 </h1>
        
        <div className="MyPageInfo">
          <div className="OrderInCart">
          <hr />
          <div className="OrderInCartInfo">
            <span>주문번호</span>
            <span>   </span>
            <span>상품정보</span>
            <span>상품구매금액</span>
            <span>결제상태</span>
            
          </div>

          <div>
      {Productlist?.map((product, index) => (
        <Product key={index} products={product}/>
      ))}
    </div>
          </div>
        </div>
        <h3>   1   </h3>

      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
