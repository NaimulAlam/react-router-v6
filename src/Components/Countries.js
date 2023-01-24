import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Countries = () => {
  const countries = useLoaderData();
  console.log(countries);
  return (
    <div>
      <h2>Total countries : {countries.length}</h2>
      {countries.map((country) => (
        <li key={country.cca3}>
          <Link to={`counrty/${country.name.common}`}>
            {country.name.common}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Countries;
