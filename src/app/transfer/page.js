"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react"
import { Download } from "lucide-react";

export default function Home() {

    const generateRandomString = (length) => {
        let result = '';
        const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const [ fileName, setFileName ] = useState("Click Get File Button")

    let count = 0 

    const getFile = () => {
        let interval = setInterval(() => {
            if (count == 25) clearInterval(interval)

            setFileName(generateRandomString(10));

            count++;
        }, 10)

        let classes = ["border", "border-transparent", "hover:border-b-white", "cursor-pointer"]
        for (let cls of classes) {
            document.getElementById("download").classList.add(cls)
        }
    }

    return (
        <>
            <div className="fixed py-8 w-full flex items-center bg-inherit z-50">
                <div className="mx-auto flex items-center text-lg w-1/4 justify-around">
                    <a href="/#home" className="border border-transparent hover:border-b-white">Home</a>
                    <a href="/#about" className="border border-transparent hover:border-b-white">About</a>
                    <a href="/#stats" className="border border-transparent hover:border-b-white">Stats</a>
                    <a href="/transfer" className="border border-transparent hover:border-b-white">Transfer</a>
                </div>
            </div>

            <div className="h-screen w-full flex items-center justify-center">
                <Tabs defaultValue="upload" className="w-1/2">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="upload">Upload</TabsTrigger>
                        <TabsTrigger value="download">Download</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upload">
                        <Card className="h-[400px]">
                        <CardHeader>
                        <CardTitle className="text-2xl text-center">Upload</CardTitle>
                            <CardDescription className="text-center">
                                Upload a file for others to randomly get (Make sure you don't upload sensitive data as you will <strong>NOT</strong> be able to remove afterwards. We don't have the budget for that to happen)
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            
                        </CardContent>
                        <CardFooter className="block">
                            <div className="flex items-center w-4/5 m-auto">
                                <Checkbox className="mr-10"></Checkbox>
                                <p className="text-sm text-muted-foreground">I have not uploaded a virus or personal information I do not wish to share. The company will not be liable for any damages done afterwards.</p>
                            </div>
                            
                            <Button className="mx-auto block mt-4">Upload</Button>
                        </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="download">
                        <Card className="h-[400px]">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Download</CardTitle>
                            <CardDescription className="text-center">
                                Download a file! Randomly receive a file from the other users of the website, ranging anything from someone's dog to a random stock image!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-center text-lg">File:</p>
                            <div id="download" className="w-max m-auto flex justify-center">
                                <p id="fileName" className="text-center text-lg mr-2">{fileName}</p>
                                <Download></Download>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button onClick={() => getFile()}>Get File</Button>
                        </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>

            <div id="footer" className="fixed bottom-0 flex items-center justify-between w-full h-10 bg-[#161a21] text-[#6f6f6f]">
                <p className="ml-10">Do not contact us please</p>
                <p className="mr-10">© File Share 2025 (Who's even copying this??? Also we don't even have a copyright on this)</p>
            </div>
            
        </>
    );
}
