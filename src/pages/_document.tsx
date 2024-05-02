import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* <link rel="icon" href="/favicon.svg" /> */}
        {/* Load Kakao Maps SDK asynchronously */}
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=26d1e102e0293e4d740c19a09639abb8&libraries=services&autoload=false`}
          async
        ></script>
        {/* Load Kakao JavaScript SDK asynchronously */}
        <script
          type="text/javascript"
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
