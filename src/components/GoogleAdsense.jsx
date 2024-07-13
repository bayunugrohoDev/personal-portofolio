import Script from "next/script";
import React from "react";

const codeId =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7310986127461708";

const GoogleAdsense = () => {
  return (
    <Script
      async
      src={codeId}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdsense;
