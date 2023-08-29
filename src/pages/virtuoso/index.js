import React, { useState } from "react";
import { Virtuoso } from "react-virtuoso";
import Image from "next/image";

const Index = ({ data }) => {
  const [count, setCount] = useState(0);

  const handleIncreaseClick = () => {
    setCount((prev) => prev + 1);
  };

  const renderListItem = (index) => {
    return (
      <div className="py-2 text-lg">
        {data[index].title} {count + index}
        <Image src={data[index].thumbnailUrl} width={100} height={100} />
      </div>
    );
  };

  return (
    <div className="">
      <button
        className="flex items-center justify-center"
        onClick={handleIncreaseClick}
      >
        INCREASE
      </button>
      <Virtuoso
        style={{ height: "calc(100vh - 90px)" }}
        totalCount={data.length + 1}
        itemContent={renderListItem}
      />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url);
    const data = await res.json();
    return { props: { data } };
  } catch (err) {
    return { props: { data: err } };
  }
}

export default Index;
