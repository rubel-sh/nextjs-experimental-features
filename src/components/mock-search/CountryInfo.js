import Image from "next/image";
import React from "react";

const CountryInfo = ({ country }) => {
  // const { common, official, nativeName } = country.name;
  const {
    name,
    capital,
    region,
    subregion,
    languages,
    population,
    flags,
    maps,
  } = country;

  return (
    <div className="max-w-sm p-4 bg-white hover-shadow rounded-md mt-8">
      <h1 className="text-3xl font-bold mb-4">{name.common}</h1>
      <p className="mb-2">Capital: {capital && capital[0]}</p>
      <p className="mb-2">Region: {region}</p>
      <p className="mb-2">Subregion: {subregion}</p>
      <p className="mb-2">
        Languages: {languages && languages[Object.keys(languages)[0]]}
      </p>
      <p className="mb-4">Population: {population}</p>
      <Image
        width={300}
        height={20}
        className=" h-20 object-contain mb-4 "
        src={flags.png}
        alt="Flag of Bangladesh"
      />

      <div className="space-y-2">
        <h2 className="text-xl font-semibold mb-2">Maps:</h2>
        <p>
          Google Maps:{" "}
          <a
            href={maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Open Google Maps
          </a>
        </p>
        <p>
          OpenStreetMaps:{" "}
          <a
            href={maps.openStreetMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Open OpenStreetMaps
          </a>
        </p>
      </div>
    </div>
  );
};

export default CountryInfo;
