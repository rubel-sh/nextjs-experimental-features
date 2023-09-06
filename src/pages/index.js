import FlagCard from "@/components/FlagCard";
import IndexLoader from "@/components/index/IndexLoader";
import usePageLoading from "@/hooks/usePageLoading";

export default function Home({ data }) {
  const loading = usePageLoading();
  console.log(loading);
  return (
    <div className="max-w-[1260px] px-2 mx-auto mt-10">
      <h1 className="text-md lg:text-2xl underline underline-offset-4 mb-5">
        Rest Countries: {data.length}
      </h1>
      {/* Container */}
      <div className="grid grid-cols-resSuraGrid gap-5 rounded-md mx-auto">
        {loading ? (
          <IndexLoader />
        ) : (
          data.map((country) => {
            return <FlagCard key={country.name.common} country={country} />;
          })
        )}
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
