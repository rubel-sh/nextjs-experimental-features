import Image from "next/image";
import React from "react";
import { Virtuoso } from "react-virtuoso";

const index = ({ data }) => {

  return (
    <div className="grid grid-cols-3">
      <Virtuoso
        style={{ height: "100vh" }}
        totalCount={data.length + 1}
        itemContent={( index) => (
          <div className="py-2 text-lg">
            {data[index].title}
            <Image src={data[index].thumbnailUrl} width={100} height={100} />
          </div>
        )}
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

export default index;
