import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price (props) {
    // Our api key from coinapi.io.
    const apiKey = import.meta.env.VITE_API_KEY;
  // Grabbing the currency symbol from the URL Params.
  const {symbol} = useParams()
  console.log(symbol)
  // Using the other two variables to create our URL.
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  // State to hold the coin data.
  const [coin, setCoin] = useState("null");

  // Function to fetch coin data.
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      console.log(response)
      const data = await response.json();
      console.log(data)
      setCoin(data);
    } catch(e) {
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mounts.
  useEffect(() => {
    getCoin();
  }, []);

   // Function for when data doesn't exist.
   const loading = () => {
    return <h1>Loading...</h1>;
  };

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

 
  // If coin has data, run the loaded function; otherwise, run loading.
  return coin && coin.rate ? loaded() : loading();
}