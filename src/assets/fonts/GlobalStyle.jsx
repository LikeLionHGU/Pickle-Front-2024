import { createGlobalStyle } from "styled-components";
import PretendardTTFRegular from "./PretendardTTF/Pretendard-Regular.ttf";
import PretendardTTFSemiBold from "./PretendardTTF/Pretendard-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: "PretendardSemiBold";
  }

  @font-face {
    font-family: 'PretendardRegular';
    src: url(${PretendardTTFRegular}) format('embedded-opentype'),
         url(${PretendardTTFRegular}) format('woff2'),
         url(${PretendardTTFRegular}) format('woff'),
         url(${PretendardTTFRegular}) format("truetype");
    font-display: swap;
}

@font-face {
    font-family: 'PretendardSemiBold';
    src: url(${PretendardTTFSemiBold}) format('embedded-opentype'),
         url(${PretendardTTFSemiBold}) format('woff2'),
         url(${PretendardTTFSemiBold}) format('woff'),
         url(${PretendardTTFSemiBold}) format("truetype");
    font-display: swap;
}
`;

export default GlobalStyle;
