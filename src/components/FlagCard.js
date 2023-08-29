import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FlagCard = ({country}) => {
    return (
        <Link href={country.name.common} key={country.capital[0]}>
                            <div className=" border rounded-md hover:shadow-md cursor-pointer overflow-hidden h-full transition-all duration-300">
                                <Image src={country.flags.svg} alt="" width={900} height={500} className="  " />
                                <div className="mt-5 p-4 ">
                                    <p>{country.name.official}</p>
                                    <h1 className="text-xl font-bold">{country.name.common}</h1>
                                    <p>
                                        Capital: <span className="text-sm font-thin">{country.capital}</span>
                                    </p>
                                </div>
                            </div>
                        </Link>
    );
};

export default FlagCard;