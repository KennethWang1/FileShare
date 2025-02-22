import Nav from "./nav";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

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

            <div id="about" className="w-full h-screen">
                <p className="monomakh ml-[8rem] text-4xl pt-[7rem]">About Us</p>
                <div className="flex">
                    <div className="mt-8 w-3/5 ml-[8rem]">
                        <p className="shafarik text-xl">There are hundreds of file sharing website. There is only one of us.</p>
                        <p className="shafarik text-xl mt-5">At File Share, we believe in creating a fun, unpredictable, and anonymous experience when sharing your files with the world. Whether it be a video of a someone's dog, an interesting and creative project or just a cool photo, every press of the download button will guaranteed to be an unique experience.</p>
                        <p className="shafarik text-xl my-5">A digital mystery box, every time you click</p>
                        <p className="shafarik text-xl">Common FAQ</p>
                        <Accordion type="single" collapsible className="w-full shafarik">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-xl">What about privacy?</AccordionTrigger>
                                <AccordionContent className="text-xl">
                                    It's anonymous. And if you don't want someone to see a file, just don't upload it. 
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-xl">How secure is this?</AccordionTrigger>
                                <AccordionContent className="text-xl">
                                    As secure as probably Fort Knox... if Fort Knox was just a box secured by a Masterock. 
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-xl">How did this idea come about?</AccordionTrigger>
                                <AccordionContent className="text-xl">
                                    Who knows? This idea came about magically and randomly over some delicious pancakes. 
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="w-2/5 flex justify-center items-center">
                        <p className="h-min">Some picture here ig</p>
                    </div>
                </div>
            </div>
        </>
    );
}
