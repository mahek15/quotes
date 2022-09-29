import React,{useState, useEffect} from "react";
import '../styles/card.css';

const API_URL = "https://programming-quotes-api.herokuapp.com/Quotes?count=0";
const Card = ({ item, handleClick }) => {
    const [quote, setQuote] = useState("");
    const [fav,setFav] = useState([]);
    useEffect(() => {
        fetch(API_URL)
          .then((res) => res.json())
          .then((data) => {
           setQuote(data);
          });
      }, []);
      

    return(
        <div className="container">
            <div className="card">
                <h2 className="quote_name">{quote[0].en}</h2>
                <small className="author">-{quote[0].author}</small><br/>
                <button className="btn" onClick={() => setFav=(fav+1)}>Add to favourites! </button>
                
            </div>
            <div className="card">
                <h2 className="quote_name">{quote[1].en}</h2>
                <small className="author">-{quote[1].author}</small><br/>
                <button className="btn">Add to favourites! </button>
            </div>
            <div className="card">
                <h2 className="quote_name">{quote[2].en}</h2>
                <small className="author">-{quote[2].author}</small><br/>
                <button className="btn">Add to favourites! </button>
            </div>
            <div className="card">
                <h2 className="quote_name">{quote[3].en}</h2>
                <small className="author">-{quote[3].author}</small><br/>
                <button className="btn" >Add to favourites! </button>    
            </div>
            <div className="card">
                <h2 className="quote_name">{quote[4].en}</h2>
                <small className="author">-{quote[4].author}</small><br/>
                <button className="btn" >Add to favourites! </button>    
            </div>       
            <div className="card">
                <h2 className="quote_name">{quote[5].en}</h2>
                <small className="author">-{quote[5].author}</small><br/>
                <button className="btn" >Add to favourites! </button>    
            </div>       
            <div className="card">
                <h2 className="quote_name">{quote[6].en}</h2>
                <small className="author">-{quote[6].author}</small><br/>
                <button className="btn" >Add to favourites! </button>    
            </div>       
            <div className="card">
                <h2 className="quote_name">{quote[7].en}</h2>
                <small className="author">-{quote[7].author}</small><br/>
                <button className="btn" >Add to favourites! </button>    
            </div>       
            <div className="card">
                <h2 className="quote_name">{quote[8].en}</h2>
                <small className="author">-{quote[8].author}</small><br/>
                <button className="btn" >Add to favourites! </button>    
            </div>       
            <div className="card">
                <h2 className="quote_name">{quote[9].en}</h2>
                <small className="author">-{quote[9].author}</small><br/>
                <button className="btn" >Add to favourites! </button>    
            </div>              
      {/* <h1>check</h1> */}
        </div>
    ); 
      }
export default Card