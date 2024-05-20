import React from "react";

const ImagePage = () => {
  return (
    <div>
      <h1>Display Image</h1>
      <img
        src="https://example.com/image.jpg" // Replace with your image URL
        alt="Sample Image"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default ImagePage;
