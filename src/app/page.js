"use client"

import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import Image from 'next/image'
import { FileTransfers } from "./charts/file_transfers";
import { FileTransfersOverTime } from "./charts/file_transfers_over_time";
import { UniqueVisitors } from "./charts/unique_visitors"

export default function Home() {

    return (
        <>
            <div className="fixed py-8 w-full flex items-center bg-inherit z-50">
                <div className="mx-auto flex items-center text-lg w-1/4 justify-around">
                    <a href="#home" className="border border-transparent hover:border-b-white">Home</a>
                    <a href="#about" className="border border-transparent hover:border-b-white">About</a>
                    <a href="#stats" className="border border-transparent hover:border-b-white">Stats</a>
                    <a href="/transfer" className="border border-transparent hover:border-b-white">Transfer</a>
                </div>
            </div>

            <div id="home" className="w-full h-screen flex justify-center items-center">
                <div>
                    <p className="monomakh text-center text-6xl">File Share</p>
                    <p className="shafarik text-center text-lg">The anonymous russian roulette style file sharing platform</p>
                    <div className="mt-4 w-full flex justify-center items-center">
                        <Button onClick={() => {window.location.href = "/transfer"}}>Try Now</Button>
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
                                    As secure as probably Fort Knox... if Fort Knox was just a box secured by a Masterlock. 
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
                    <div className="w-2/5 flex justify-center">
                        <Image
                            src="/firefox.png"
                            width={200}
                            height={200}
                            alt="Logo"
                            className="h-min relative top-16"
                        ></Image>
                    </div>
                </div>
            </div>

            <div id="stats" className="w-full h-screen">
                <p className="monomakh ml-[8rem] text-4xl pt-[7rem]">Statistics</p>
                <p className="shafarik ml-[8rem] text-lg">Some statistics since launch (Fudged numbers? I don't know what you're talking about)</p>
                <div id="charts" className="mt-6 mx-[8rem] grid grid-rows-1 grid-cols-4 gap-2">
                    <FileTransfers className=""></FileTransfers>
                    <FileTransfersOverTime className="col-span-2 "></FileTransfersOverTime>
                    <UniqueVisitors className="col-span-1"></UniqueVisitors>    
                    {/* There's not enough budget for more statistics ngl */}
                </div>
            </div>

            <div id="footer" className="fixed bottom-0 flex items-center justify-between w-full h-10 bg-[#161a21] text-[#6f6f6f]">
                <p className="ml-10">Do not contact us please</p>
                <p className="mr-10">© File Share 2025 (Who's even copying this??? Also we don't even have a copyright on this)</p>
            </div>
        </>
    );
}
