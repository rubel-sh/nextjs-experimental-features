import { useRouter } from "next/router";
import React from "react";

const post = ({ data }) => {
    const router = useRouter();
    return (
        <div className="max-w-[1280px] mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center underline my-10">ID PAGE</h1>
            <div className="p-5 border rounded-lg">
                <div className="mt-10 space-y-5">
                    <p className="text-2xl font-medium">Title: {data.title}</p>
                    <p className="text-2xl font-medium">Completed: {data.complete ? "TRUE" : "FALSE"}</p>
                </div>

                <button
                    onClick={() => router.back()}
                    className="text-2xl uppercase font-bold mt-10 border px-3 py-1 hover:shadow-sm"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    const paths = data.map((post) => ({ params: { id: post.id.toString() } }));
    // return { paths: [{ params: { id: "1" } }, { params: { id: "2" } }], fallback: false };
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
        const data = await res.json();
        return { props: { data } };
    } catch (err) {
        return { props: { data: err } };
    }
}
export default post;
