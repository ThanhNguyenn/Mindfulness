import React, {useEffect, useState} from "react";
import {quotes as quotes, quotesVietnamese}  from './Quote';


const QuoteGenerating = () => {
    const [quote, setQuote] = useState({});
    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random()*quotes.length)]);
    })
    
    useEffect(() => {
        const interval = setInterval(() => {
            setQuote(quotes[Math.floor(Math.random()*quotes.length)]);
        }, 60000);
        return () => clearInterval(interval);
      }, []);

      function toVietLanguage() {
      }
      function toEngLanguage() {}


    return (
        <div>
            {/* <button onClick={toVietLanguage}>Tieng Viet</button>
            <button onClick={toEngLanguage}>English</button> */}
       <h1 style={StyledQuoteGenerating}>&quot;{quote.quote}&quot;</h1>
       <h1 style={StyledName}>{quote.name}</h1>
       </div>
    )
}

const StyledName = {
    textAlign: "center", 
    color: "#867070",
    fontSize: "20px",
    marginLeft: "40px", 
    marginRight: "40px",
}

const StyledQuoteGenerating = {
    textAlign: "center", 
    color: "#867070",
    fontSize: "45px",
    marginLeft: "40px", 
    marginRight: "40px",
    marginTop: "150px",
    fontWeight: "600"
}


export default QuoteGenerating;