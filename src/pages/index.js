import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
    return (
        <div className="max-w-[1280px] mx-auto mt-10">
            <h1 className="text-4xl mb-5">Rest Countries: {data.length}</h1>
            {/* Container */}
            <div className="flex flex-wrap gap-5 rounded-md">
                {data.slice.map((country) => {
                    return (
                        <Link href={country.name.common} key={country.capital[0]}>
                            <div className="max-w-[230px] border rounded-md p-4 hover:shadow-lg cursor-pointer">
                                <Image
                                    src={country.flags.svg}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className=" aspect-auto rounded-md"
                                />
                                <div className="mt-5">
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
