import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const reverse = () => {
    let str = "";
    for (let index = text.length - 1; index >= 0; index--) {
      str += text[index];
    }
    props.showAlert("String Reversed", "success");
    return setText(str);
  };

  const capitalized = () => {
    var arr = text.split(" ");
    var c = arr.length;
    var temp = "";
    while (c !== 0) {
      temp = arr[c - 1].charAt(0).toUpperCase() + arr[c - 1].substring(1).toLowerCase() + " " + temp;
      c--;
    }
    props.showAlert("String Capitalized", "success");
    setText(temp);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    props.showAlert("Speeking Text", "success");
    window.speechSynthesis.speak(msg);
  };

  const extraspace = () => {
    let msg = text.split(/[ ]+/);
    props.showAlert("Extra Spaces Removed", "success");
    setText(msg.join(" "));
  };

  const copy = () => {
    var t = document.getElementById("exampleFormControlTextarea1");
    t.select();
    props.showAlert("String Copied", "success");
    navigator.clipboard.writeText(t.value);
  };

  //  setText("i Enter Text");
  const uppercase = () => {
    // console.log('iiiiiiiiiii'+ text);
    let newText = text.toUpperCase();
    props.showAlert("String Converted Uppercase", "success");
    setText(newText);
  };

  const clear = () => {
    // console.log('iiiiiiiiiii'+ text);
    let newText = "";
    props.showAlert("Text Cleared", "success");
    setText(newText);
  };

  const lowercase = () => {
    // console.log('iiiiiiiiiii' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Covert to lowercase", "success");
  };
  const upchange = event => {
    // console.log('onchange');
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            }}
            value={text}
            onChange={upchange}
            rows="10"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={uppercase}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-4" onClick={lowercase}>
          Convert To lowercase
        </button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">
          Speak
        </button>
        <button type="submit" onClick={reverse} className="btn btn-info mx-2 my-2">
          reversed
        </button>
        <button type="submit" onClick={capitalized} className="btn btn-info mx-2 my-2">
          capital
        </button>
        <button type="submit" onClick={clear} className="btn btn-info mx-2 my-2">
          Clear Text
        </button>
        <button type="submit" onClick={copy} className="btn btn-info mx-2 my-2">
          Copy Text
        </button>
        <button type="submit" onClick={extraspace} className="btn btn-info mx-2 my-2">
          remove space
        </button>
      </div>

      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your Text Summary</h2>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter(value => value !== "").length
          }{" "}
          words
        </p>
        <p>{text.trim().length} characters</p>
        <p>
          {0.008 *
            text.split(" ").filter(element => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter Something Into Textbox To Preview Here "}</p>
      </div>
    </>
  );
}
