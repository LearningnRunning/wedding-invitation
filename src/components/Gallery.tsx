import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaxiQ2BHmSSYQvbxyzZ_bOy-yMvrjoisS3Q4C9Vo0ABBFcMthkgo9EGi2Yh7GM7pxXiS4_Vy5nI5PRGQVEBRuUNNg0P_GwI48I)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const images = [
  {
    original: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZqv3bY7fvk16QHQXyz44NBStgjBuEi33wG5N9EM0gMsuPWdIkmlFUH3Gmpa9lUoNE_owautY8RAQ2kA_CwALlmGtVBW-9kpw",
    thumbnail: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZqv3bY7fvk16QHQXyz44NBStgjBuEi33wG5N9EM0gMsuPWdIkmlFUH3Gmpa9lUoNE_owautY8RAQ2kA_CwALlmGtVBW-9kpw=w540-h144-rw-v1",
  },
  {
    original: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha2GGub5IrFHblwynZo8CXmppZbVP-59KftqFlPvZPPCn5ZtXNR0PXc1IvUI898BRDv7ntKMVa3zWaHbknViBONKc7LUQND2A",
    thumbnail: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpiha2GGub5IrFHblwynZo8CXmppZbVP-59KftqFlPvZPPCn5ZtXNR0PXc1IvUI898BRDv7ntKMVa3zWaHbknViBONKc7LUQND2A=w540-h144-rw-v1",
  },
  {
    original: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY6iiMSoVy6Stxowx0KWO8wMy2VRUfSRJdfwQdBapPdxbW34zIkJ4etWle6tPqQFNPdnH3lWpSfdpeM0YKYxHNRUBxhu0RUbxE",
    thumbnail: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY6iiMSoVy6Stxowx0KWO8wMy2VRUfSRJdfwQdBapPdxbW34zIkJ4etWle6tPqQFNPdnH3lWpSfdpeM0YKYxHNRUBxhu0RUbxE=w540-h144-rw-v1",
  },
  {
    original: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihabtkfw2mmlSg9nNKhrbGpWxBat-Ta4pkcWezaVGv35JRPgyADSqzsemnKgnhdfarnvh5yKZpfAnFB2IucKek7hdTwfiL4C2w",
    thumbnail: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihabtkfw2mmlSg9nNKhrbGpWxBat-Ta4pkcWezaVGv35JRPgyADSqzsemnKgnhdfarnvh5yKZpfAnFB2IucKek7hdTwfiL4C2w=w540-h144-rw-v1",
  },
  {
    original: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbe2t858uA0qMoLGTxMYof8Dh4ulLkq81mDb93rOfpljD6nXlNjUwNxCjg-QNkSR8OsOJfam0kDH0Kf27nNAiDZL_xAQjmBAB8",
    thumbnail: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbe2t858uA0qMoLGTxMYof8Dh4ulLkq81mDb93rOfpljD6nXlNjUwNxCjg-QNkSR8OsOJfam0kDH0Kf27nNAiDZL_xAQjmBAB8=w540-h144-rw-v1",
  },
  {
    original: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaOsh7XarVx_Ch5WfrdeGQ3hzn7nA4K1veFANhSRC1EHsUb_Gxf8v3qwlodVmg0EMOgGR7iJCzH81TxmNBEXXagyYda6OaEAQ",
    thumbnail: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaOsh7XarVx_Ch5WfrdeGQ3hzn7nA4K1veFANhSRC1EHsUb_Gxf8v3qwlodVmg0EMOgGR7iJCzH81TxmNBEXXagyYda6OaEAQ=w540-h144-rw-v1",
  },
  {
    original: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaQQFCXukFZnnTGxPlxgz85Ql5jNN9G73WcpJJF3GTrkd6EjjNP2YmBMQOHWbXgo8cmvwhPuhyXtM2sfcF2_vEKjPcuAO-OjFI",
    thumbnail: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaQQFCXukFZnnTGxPlxgz85Ql5jNN9G73WcpJJF3GTrkd6EjjNP2YmBMQOHWbXgo8cmvwhPuhyXtM2sfcF2_vEKjPcuAO-OjFI=w540-h144-rw-v1",
  },
  {
    original: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYcpXyE1lpmgbcf-agYSGqxTv98ich6alnI509u3D4ebJwxfPoE_ySbHJ_gwByUeWdleubL-0dgOaeafEhRXRo9P9itBN9d6f8",
    thumbnail: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYcpXyE1lpmgbcf-agYSGqxTv98ich6alnI509u3D4ebJwxfPoE_ySbHJ_gwByUeWdleubL-0dgOaeafEhRXRo9P9itBN9d6f8=w540-h144-rw-v1",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
