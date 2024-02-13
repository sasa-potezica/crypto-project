import React, { useState, useEffect } from "react";
import axios from "axios";

const CoinPage = () => {
  const [coin, setCoin] = useState({});

  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
    });
  }, [url]);
  return <div>CoinPage</div>;
};

export default CoinPage;
