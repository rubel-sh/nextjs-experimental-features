import Container from "@/components/Container";
import dynamic from "next/dynamic";

const DynamicTooltip = dynamic(() => import("react-tooltip").then((mod) => mod.Tooltip), {
    ssr: false,
});

const DynamicImports = () => {
    // create dummy data of 50 people
    const peoples = [...Array(50)].map((_, i) => ({ id: i, name: `Person ${i}` }));

    return (
        <Container>
            <div className="flex gap-2 flex-wrap  mt-6">
                {peoples.map((person) => (
                    <>
                        <div
                            key={person.id}
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={`This is ${person.name}`}
                            className="bg-slate-800 hover:bg-orange-700 cursor-pointer p-2 rounded-md mb-2 text-white px-5 py-2"
                        >
                            {person.name}
                        </div>
                        <DynamicTooltip id="my-tooltip" arrowColor="blue" />
                    </>
                ))}
            </div>
        </Container>
    );
};

export default DynamicImports;
