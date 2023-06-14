import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
    return (
        <div className="max-w-[1260px] px-2 mx-auto mt-10">
            <h1 className="text-md lg:text-2xl underline underline-offset-4 mb-5">Rest Countries: {data.length}</h1>
            {/* Container */}
            <div className="grid grid-cols-resSuraGrid gap-5 rounded-md mx-auto">
                {data.map((country) => {
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
                })}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    try {
        const url = `https://restcountries.com/v3.1/independent?status=true&fields=capital,name,flags`;
        // const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const res = await fetch(url);
        const data = await res.json();
        return { props: { data } };
    } catch (err) {
        return { props: { data: err } };
    }
}
