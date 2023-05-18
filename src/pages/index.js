import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
    return (
        <div className="max-w-[1280px] mx-auto mt-10">
            <h1 className="text-4xl mb-5">Cards Container</h1>
            {/* Container */}
            <div className="flex flex-wrap gap-5 rounded-md">
                {/* Each Card */}
                {data?.map((item) => (
                    <Link key={item.id} href={`/${item.id}`}>
                        <div
                            className={`p-4 border rounded-lg border-slate-200 shadow-sm hover:shadow-md ${
                                item.completed ? "bg-emerald-100" : "bg-rose-100"
                            }`}
                        >
                            <h2 className="text-xl uppercase font-bold mb-4">{item.title}</h2>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-orange-400 text-white font-bold grid place-items-center rounded-full">
                                    {item.id}
                                </div>
                                <p className="text-sm uppercase font-bold ml-3">
                                    Completed: {item.completed ? "Done" : "Not"}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

// export async function getStaticPaths() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const data = await res.json();
//     const paths = data.map((post) => ({ params: { id: post.id.toString() } }));
//     return { paths, fallback: false };
// }

export async function getStaticProps() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const data = await res.json();
        return { props: { data } };
    } catch (err) {
        return { props: { data: err } };
    }
}
