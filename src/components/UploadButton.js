import React, { useState, useRef } from "react";
import "./UploadButton.css";

function UploadButton({ setFile }) {
  const [uploadedFileName, setUploadedFileName] = useState("");
  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleDisplayFileDetails = () => {
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
    fileToDataUri(inputRef.current.files[0]).then((dataUri) => {
      setFile(dataUri);
    });
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  return (
    <div>
      <label className="upload__button__title">Upload Picture </label>
      <input
        className="upload__button__choose"
        ref={inputRef}
        onChange={handleDisplayFileDetails}
        type="file"
      />
      <button
        onClick={handleUpload}
        className={`upload__button__choose-${
          uploadedFileName ? "success" : "primary"
        }`}
      >
        {uploadedFileName ? uploadedFileName : "Upload"}
      </button>
    </div>
  );
}

export default UploadButton;
