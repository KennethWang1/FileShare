import Nav from "./nav";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <Nav></Nav>

            <div className="w-full h-screen flex justify-center items-center">
                <div>
                    <p className="monomakh text-center text-6xl">File Share</p>
                    <p className="shafarik text-center text-lg">The anonymous russian roulette style file sharing platform</p>
                    <div className="mt-4 w-full flex justify-center items-center">
                        <Button>Try Now</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
