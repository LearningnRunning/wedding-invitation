import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";


const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaxiQ2BHmSSYQvbxyzZ_bOy-yMvrjoisS3Q4C9Vo0ABBFcMthkgo9EGi2Yh7GM7pxXiS4_Vy5nI5PRGQVEBRuUNNg0P_GwI48I)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="김성록❤최서연 결혼식에 초대합니다" name="Title" />
        <meta
          content="2024년 06월 15일 토요일 12시"
          name="Description"
        />
        <meta content="2024년 06월 15일 토요일 12시" name="Keyword" />
        <meta property="og:title" content="김성록❤최서연 결혼식에 초대합니다" />
        <meta
          property="og:description"
          content="2024년 06월 15일 토요일 12시"
        />
        <meta
          property="og:url"
          content="https://learningnrunning.github.io/"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>김성록❤최서연 결혼식에 초대합니다</title>
        {/* <script src="https://developers.kakao.com/sdk/js/kakao.js"></script> */}
      </Head>
      <main className={`${notoSansKR.className}`}>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        <Analytics />

        <Title data={JsonData} />
        <Gretting data={JsonData} />
        <Gallery />
        
        
        <CongratulatoryMoney data={JsonData} />
        <Share data={JsonData} />
        <Location />

        <Footer>Copyright © 2021 KyuHyuk Lee</Footer>
      </main>
    </>
  );
}
