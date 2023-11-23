import Container from "@/components/Container";
import dynamic from "next/dynamic";
// import ScrollArea from "react-scrollbar";
const ScrollArea = dynamic(() => import("react-scrollbar"), { ssr: false });

const CustomScrollbar = () => {
    return (
        <Container>
            <ScrollArea
                smoothScrolling
                minScrollSize={150}
                className="h-[100dvh]"
                contentClassName="content"
                horizontal={false}
            >
                {[...Array(2000)].map((_, i) => (
                    <div key={i} className="h-10 bg-gray-200 mb-2">
                        {i}
                    </div>
                ))}
            </ScrollArea>
        </Container>
    );
};

export default CustomScrollbar;
