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

export default function Home() {
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
                        <Card>
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
                        <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Download</CardTitle>
                            <CardDescription className="text-center">
                                Download a file! Randomly receive a file from the other users of the website, ranging anything from someone's dog to a random stock image!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p id="fileName" className="text-center">Baguette noises</p>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button>Download</Button>
                        </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>

            <div id="footer" className="fixed bottom-0 flex items-center justify-between w-full h-10 bg-[#161a21] text-[#6f6f6f]">
                <p className="ml-10">Do not contact us please</p>
                <p className="mr-10">© File Share 2025 (Who's even copying this???)</p>
            </div>
            
        </>
    );
}
