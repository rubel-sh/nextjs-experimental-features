import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const post = ({ data }) => {
    const router = useRouter();
    const [increasePopulation, setIncreasePopulation] = useState();
    const [creatorName, setCreatorName] = useState(process.env.NEXT_PUBLIC_CREATOR_NAME);
    const [todo, setTodo] = useState({});
    const [countryInformations] = data;

    const fetchTodo = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        setTodo(data);
    };

    useEffect(() => {
        setIncreasePopulation(parseInt(countryInformations.population));
        fetchTodo();
    }, []);

    return (
        <div className="max-w-[1280px] mx-auto  grid place-items-center ">
            <Image
                src={countryInformations.flags.svg}
                width={3000}
                height={2000}
                className="fixed inset-0 rounded-tr-lg"
                alt="country flag"
            />
            <div className="py-5 px-10 border-slate-500 rounded-lg relative z-10 top-1/2 bg-white/30 backdrop-blur-lg text-slate-900">
                <div className="mt-10 space-y-2">
                    <p className="text-2xl font-light ">Official Name: {countryInformations.name.official}</p>
                    <p className="text-2xl font-light mb-4">CSR Todo: {todo.title}</p>
                    <p className="text-2xl font-normal">Country: {countryInformations.name.common}</p>
                    <p className="text-2xl font-normal">Capital: {countryInformations.capital[0]}</p>
                    <p className="text-2xl font-normal">Region: {countryInformations.region}</p>
                    <p className="text-2xl font-normal">
                        Languages:{" "}
                        {Object.keys(countryInformations.languages).map((lang) => (
                            <span key={countryInformations.languages[lang]} className="mr-1">
                                {countryInformations.languages[lang]}
                            </span>
                        ))}
                    </p>
                    <p
                        className="text-2xl font-normal select-none hover:font-medium active:text-slate-500"
                        onClick={() => setIncreasePopulation((prev) => prev + 1)}
                    >
                        Population: {increasePopulation}
                    </p>
                    <p className="text-2xl font-normal">Sub Region: {countryInformations.subregion}</p>
                    <p className="text-2xl font-normal">
                        Independent: {countryInformations.independent ? "YES" : "NO"}
                    </p>
                </div>

                <button
                    onClick={() => router.back()}
                    className="text-2xl uppercase font-medium mt-10 border border-slate-500 px-3 py-1 rounded-md hover:shadow-md"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch("https://restcountries.com/v3.1/independent?status=true&fields=capital,name,flags");
    const data = await res.json();

    const paths = data.slice.map((country) => ({ params: { country_name: country.name.common } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    try {
        const url = `https://restcountries.com/v3.1/name/${params.country_name}?fullText=true`;
        const res = await fetch(url);
        const data = await res.json();
        return { props: { data } };
    } catch (err) {
        return { props: { data: err } };
    }
}
export default post;
