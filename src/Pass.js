import React, { useState } from "react";
import "./App.css";
import generatePassword from "./tools";
import $ from "jquery";
// import image from './info.png'
// <img src={image} alt="Smiley face" width="32" className="App"/>

// function copyToClipboard(element) {
//   var $temp = $("<input>");
//   $("body").append($temp);
//   $temp.val($(element).text()).select();
//   document.execCommand("copy");
//   $temp.remove();
// }

function Pass() {
  const [size, setSize] = useState(10);
  const [password, setPassword] = useState(" ");

  return (
    <div>
      <br />
      <h2> Enter Size: </h2>
      <input
        placeholder={size}
        onChange={e => {
          if (e.target.value.match(/[a-z]/i)) {
            alert("Warning: contains letters");
            e.target.value = "";

            return;
          }
          setSize(e.target.value);
        }}
      />{" "}
      {/* validate input : values only */} <br /> <br />
      <button
        onClick={() => {
          var password = generatePassword(size);
          // console.log("pass: ", password);
          setPassword(password);
          // copyToClipboard(password);
        }}
      >
        Submit
      </button>
      <br /> <br />
      <h3> {password} </h3>
    </div>
  );
}

export default Pass;
