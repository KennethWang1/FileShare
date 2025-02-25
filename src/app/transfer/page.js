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
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            
                        </CardContent>
                        <CardFooter>
                            <Button>Sign up</Button>
                        </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">

                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
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
