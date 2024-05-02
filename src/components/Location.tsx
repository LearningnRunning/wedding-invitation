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
  fontSize: "3vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

export default function Location() {
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
          console.log("onLoadKakaoAPI")
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

      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <br />
      <CopyToClipboard
              text={"서울시 성북구 선잠로 46 1층 KINA 키나"}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("주소가 복사되었습니다.")}
              >
                {"서울시 성북구 선잠로 46 KINA 키나"}
              </Button>
        </CopyToClipboard>

    </Wrapper>
    
  );
}
