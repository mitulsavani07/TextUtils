import React, { useState, useRef } from "react";
import QRCode from "qrcode.react";
import $ from 'jquery';

const QrCode = () => {
  const [text, setText] = useState("");
  const [fgColor, setFgColor] = useState("#000000"); // Default black
  const [bgColor, setBgColor] = useState("#ffffff"); // Default white
  const qrCodeRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFgColorChange = (color) => {
    setFgColor(color.target.value);
  };

  const handleBgColorChange = (color) => {
    setBgColor(color.target.value);
  };

  const clickCopyText = () => {
    let textElement = document.getElementById('myBox');
    textElement.select();
    navigator.clipboard.writeText(textElement.value).then(() => {
      $('.copied-alert').fadeIn('slow');
      setTimeout(function () {
        $('.copied-alert').fadeOut('slow');
      }, 1000);
    });
    textElement.blur(); 
  };

  const downloadQRCode = () => {
    const canvas = qrCodeRef.current.getElementsByTagName('canvas')[0];
    const qrCodeURL = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = qrCodeURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clickClearText = () => {
    setText('');
  };

  return (
    <div className="max-w-3xl w-full mx-auto my-5">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10">
        QR Code Generator
      </h1>
      <div className="flex justify-center">
        <input
          id="myBox"
          type="text"
          placeholder="Enter text or URL"
          className="border-gray-400 px-4 py-2 w-full rounded-lg mr-4 drop-shadow-primary dark:drop-shadow-none"
          value={text}
          onChange={handleChange}
        />
        <button className="btn whitespace-nowrap m-[0!important]" onClick={clickCopyText}>
          Copy
        </button>
        <button onClick={clickClearText} className='btn whitespace-nowrap my-[0!important] ml-[10px!important] mr-[0!important]'>
          Clear Text
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <label htmlFor="fgColor" className="mr-2">Foreground Color:</label>
        <input type="color" id="fgColor" value={fgColor} onChange={handleFgColorChange} className="mr-4 border-[transparent!important]"/>
        <label htmlFor="bgColor" className="mr-2">Background Color:</label>
        <input type="color" id="bgColor" value={bgColor} onChange={handleBgColorChange} className="border-[transparent!important]" />
      </div>
      {text && (
        <div className="flex justify-center mt-5 flex-col items-center" ref={qrCodeRef}>
          <QRCode value={text} size={200} fgColor={fgColor} bgColor={bgColor} />
          <button className="btn mt-[30px!important] whitespace-nowrap" onClick={downloadQRCode}>
              Download
          </button>
        </div>
      )}
    </div>
  );
};

export default QrCode;