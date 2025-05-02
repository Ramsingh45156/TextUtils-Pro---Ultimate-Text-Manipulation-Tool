import React, { useState } from "react";

export default function Formtemp(props) {
  const [text, setText] = useState("");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleCapitalize = () => {
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    props.showAlert("Capitalized Each Word", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed", "success");
  };

  const handleToSentenceCase = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to Sentence Case", "success");
  };

  const handleToAlternatingCase = () => {
    let newText = text
      .split("")
      .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
      .join("");
    setText(newText);
    props.showAlert("Alternating Case Applied", "success");
  };

  const handleFindReplace = () => {
    const find = prompt("Enter the word to find:");
    const replace = prompt("Enter the replacement word:");
    if (find && replace !== null) {
      const newText = text.replaceAll(find, replace);
      setText(newText);
      props.showAlert(`Replaced '${find}' with '${replace}'`, "success");
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "TextUtilsOutput.txt";
    element.click();
    props.showAlert("File Downloaded", "success");
  };

  const handleCountWord = () => {
    const word = prompt("Enter the word to count:");
    if (word) {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      const count = (text.match(regex) || []).length;
      props.showAlert(`The word '${word}' appears ${count} times.`, "success");
    }
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    props.showAlert("Speaking text", "success");
  };

  const handleRemoveNumbers = () => {
    const newText = text.replace(/\d+/g, "");
    setText(newText);
    props.showAlert("Removed numbers", "success");
  };

  const handleExtractEmails = () => {
    const emails = text.match(/[\w.-]+@[\w.-]+\.\w+/g);
    const newText = emails ? emails.join("\n") : "No emails found.";
    setText(newText);
    props.showAlert("Extracted Emails", "success");
  };

  const handleEncrypt = () => {
    let newText = text.replace(/[a-zA-Z]/g, (c) => {
      return String.fromCharCode(c.charCodeAt(0) + 1);
    });
    setText(newText);
    props.showAlert("Text Encrypted (Caesar Cipher)", "success");
  };

  const handleDecrypt = () => {
    let newText = text.replace(/[a-zA-Z]/g, (c) => {
      return String.fromCharCode(c.charCodeAt(0) - 1);
    });
    setText(newText);
    props.showAlert("Text Decrypted", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearSpaces = () => {
    let newText = text.replace(/ /g, "");
    setText(newText);
    props.showAlert('All Spaces Removed',"success")
  };

  const handleTitleCase = () => {
    let newText = text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
    props.showAlert('Converted to Title Case',"success")
  };

  const handleAlternateCase = () => {
    let newText = text.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
    setText(newText);
    props.showAlert('Converted to Alternate Case',"success")
  };

  const handleClearPunctuation = () => {
    let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    setText(newText);
    props.showAlert('Punctuation Removed',"success")
  };

  const handleEncodeURI = () => {
    setText(encodeURI(text));
    props.showAlert('Encoded to URI format',"success")
  };

  const handleDecodeURI = () => {
    setText(decodeURI(text));
    props.showAlert('Decoded URI format',"success")
  };


  const handleAddLineBreaks = () => {
    let newText = text.replace(/\./g, '.\n');
    setText(newText);
    props.showAlert('Line Breaks Added',"success")
  };

  const handleSortWords = () => {
    let newText = text.split(" ").sort().join(" ");
    setText(newText);
    props.showAlert('Words Sorted Alphabetically',"success")
  };


  return (
    <>
      <div>
        <div className="mb-4" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <h1>{props.heading}</h1>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#072344" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            value={text}
            placeholder="Enter text here"
            className="form-control"
            rows="10"
          ></textarea>
        </div>

        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleClick}>UpperCase</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>LowerCase</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Spaces</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleToSentenceCase}>Sentence Case</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleToAlternatingCase}>Alt Case</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleFindReplace}>Find & Replace</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleDownload}>Download</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleCountWord}>Count Word</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleRemoveNumbers}>Remove Numbers</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleExtractEmails}>Extract Emails</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleEncrypt}>Encrypt</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleDecrypt}>Decrypt</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearSpaces}>Remove All Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTitleCase}>Title Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleAlternateCase}>Alternate Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearPunctuation}>Remove Punctuation</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleEncodeURI}>Encode URI</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDecodeURI}>Decode URI</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveNumbers}>Remove Numbers</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleAddLineBreaks}>Add Line Breaks</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSortWords}>Sort Words</button>
        {/* <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTextStats}>Text Stats</button> */}
      </div>

      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((el) => el.length !== 0).length} words and {text.length} characters</p>
        <h4>{0.008 * text.split(/\s+/).filter((el) => el.length !== 0).length} Minutes Read</h4>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
