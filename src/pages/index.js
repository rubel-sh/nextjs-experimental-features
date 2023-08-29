// import FlagCard from "@/components/FlagCard";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


const DynamicHeader = dynamic(() => import('@/components/FlagCard'), {
    loading: () => <p>Loading...</p>,
  })

export default function Home({ data }) {
    return (
        <div className="max-w-[1260px] px-2 mx-auto mt-10">
            <h1 className="text-md lg:text-2xl underline underline-offset-4 mb-5">Rest Countries: {data.length}</h1>
            {/* Container */}
            <div className="grid grid-cols-resSuraGrid gap-5 rounded-md mx-auto">
                {data.map((country) => {
                    return (
                       <DynamicHeader country={country}/>
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
