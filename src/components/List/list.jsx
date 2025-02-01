import React from "react";

function list() {
  const options = { method: "GET", headers: { accept: "application/json" } };

  // fetch('https://api.coingecko.com/api/v3/coins/markets', options)
  // .then((res) => res.json())
  // .then((res) => console.log(res))
  // .catch(err => console.error(err));

  return (
    <div className="text-white mt-10">
      <div>
        <p>Name</p>
        <p>Price</p>
        <p>Market Cap</p>
      </div>
    </div>
  );
}

export default list;
