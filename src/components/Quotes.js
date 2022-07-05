import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <>
      <h1 style={{ color: "white", textAlign: "center", margin: "3rem" }}>
        Quote Generator
      </h1>
      <div id="quote-box">
        <div id="text">
          <p>{quote}</p>
        </div>
        <div id="author">
          <p>-{author}</p>
        </div>
        <div id="buttons">
          <button onClick={handleClick} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Quotes;
