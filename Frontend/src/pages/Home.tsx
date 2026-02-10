import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { ScrollBar } from "../components/Scrollbar";
import { ScrollCategories } from "../components/ScrollCategories";

export default function Home() {
    return (
        <>
            <Navbar />
            <ScrollBar />
            <Button />
            <ScrollCategories />
        </>
    );
}
