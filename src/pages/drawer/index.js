import Container from "@/components/Container";
import SecondaryHeader from "@/components/SecondaryHeader";
import { useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const drawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <Container>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="rounded-t-3xl p-5 !shadow-none !h-auto"
            >
                <div onClick={() => setIsOpen(false)}>close</div>
                <SecondaryHeader />
                <SecondaryHeader />
                <SecondaryHeader />
                <SecondaryHeader />
                <SecondaryHeader />
            </Drawer>
        </Container>
    );
};

export default drawer;
