import React from "react";
import { useLoaderData } from "react-router-dom";

const Country = () => {
  const country = useLoaderData()[0];
  console.log(country);
  return (
    <div>
      <h1>Learn About the {country.name?.common}</h1>
      <h3>Official Name: {country?.name?.official}</h3>
      <p>Short Name: {country?.cca2}</p>
      <p>Capital City: {country.capital?.[0]}</p>
      <p>Region : {country.region}</p>
      <p>Population : {country?.population}</p>
      <p>Timezones : {country?.timezones[0]}</p>
      <p>
        Calling Code : {country?.idd?.root}
        {country?.idd?.suffixes?.[0]}
      </p>
    </div>
  );
};

export default Country;
