import React, { useEffect } from "react";

const AdBanner = ({ adSlot, style }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Optionally handle error
    }
  }, []);

  // Determine if fixed size (width and height provided)
  const isFixedSize = style && style.width && style.height;

  return (
    <ins
      className="adsbygoogle"
      style={isFixedSize ? { ...style, display: "inline-block" } : { ...style, display: "block" }}
      data-ad-client="ca-pub-6798751176104550"
      data-ad-slot={adSlot}
      {...(!isFixedSize && {
        "data-ad-format": "auto",
        "data-full-width-responsive": "true"
      })}
    ></ins>
  );
};

export default AdBanner; 