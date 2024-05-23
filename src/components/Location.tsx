import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

declare global {
  interface Window {
    kakao: any;
  }
}

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Subtitle = styled("p", {
  fontSize: "1.9vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

type ShareProps = {
  data?: Data;
};

export default function Location({ data }: ShareProps) {
  useEffect(() => {
    const defaultLevel = 3;
    const kakaoMapLoad = (level: number) => {
      const kakaoMapScript = document.createElement('script');
      kakaoMapScript.async = false;
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=26d1e102e0293e4d740c19a09639abb8&autoload=false`;
      document.head.appendChild(kakaoMapScript);

      const onLoadKakaoAPI = () => {
        window.kakao.maps.load(() => {
          var container = document.getElementById('map');
          var options = {
            center: new window.kakao.maps.LatLng(37.5964783385796, 126.997113401321),
            level: level,
          };

          var map = new window.kakao.maps.Map(container, options);

          // 마커가 표시 될 위치
          let markerPosition = new window.kakao.maps.LatLng(
            37.5964783385796,
            126.997113401321
          );

          // 마커를 생성
          let marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          // 마커를 지도 위에 표시
          marker.setMap(map);

          // Add click event listener to the marker
          window.kakao.maps.event.addListener(marker, 'click', function() {
            // Redirect to the desired URL when the marker is clicked
            window.location.href = 'https://map.naver.com/p/entry/place/1036788911?c=15.00,0,0,0,dh';
          });
        });
      };

      kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
    };
    
    kakaoMapLoad(defaultLevel);
  }, []);

  return (
    <Wrapper>
      
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      {/* <Image src="./assets/location_naver_map.png" /> */}

      <div id="map" style={{ width: "100%", height: "200px" }}></div>
      <CopyToClipboard
              text={"서울시 성북구 선잠로 46"}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("주소가 복사되었습니다.")}
              >
                {"서울시 성북구 선잠로 46 KINA 키나"}

              </Button>
              
        </CopyToClipboard>
        <div style={{ width: "100%", height: "150px", padding: "10px", boxSizing: "border-box", textAlign: "left" }}>
        <Subtitle>대중교통 이용시<br /></Subtitle>
        <br />한성대입구역(4호선) 하차 <br />
          6번 출구로 나와서 성북동 마을버스 02번 탑승 <br />
          성북빌리지역에서 하차 하시면 오르막길로 2분거리에 위치 하고 있습니다.
        </div>
        <div style={{ width: "100%", height: "200px", padding: "10px", boxSizing: "border-box", textAlign: "left" }}>

        <Subtitle>자차 이용시<br /></Subtitle>
        <br />KINA로 오시면 발렛 이용 가능합니다. (무료)
        </div>
    </Wrapper>
    
  );
}
