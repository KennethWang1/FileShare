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

import { Toast } from "@/app/toast"

import { useState } from "react"

export default function Transfer() {

    const [ fileName, setFileName ] = useState("Click Get File Button")

    const [ uFileName, setUFileName ] = useState("N/A")

    const [ uploadStatus, setUploadStatus ] = useState("Not Uploaded")

    let count = 0 

    const getFileName = (string) => {
        let arr = string.split(";");
        for (let x of arr) {
            let v = x.trim()

            if (v.startsWith("filename=")) {
                let z = v.split("=")[1];
                return z.substring(1, z.length - 1)
            }
        }
    }

    const fetchFile = () => {
        fetch("http://localhost:3001/api/v1/fetchFile")
        .then(response => { 

            let filename = getFileName(response.headers.get("Content-Disposition"))

            return response.blob().then(blob => ({ blob, filename }))
        })
        .then(({blob, filename}) => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            
            document.getElementById("fileName").innerText = `${filename} !`;
            
            a.href = url;
            a.download = filename;
            document.body.appendChild(a); 
            setTimeout(() => {
                a.click();    
            }, 500)
            a.remove(); 

        })
        .catch(error => console.error(error))
    }

    const getFile = () => {

        fetch("http://localhost:3001/api/v1/allFileNames")
        .then(response => response.json())
        .then(json => {

            let fileNames = json['files']

            let interval = setInterval(() => {
                if (count == 25) {
                    clearInterval(interval)
                    fetchFile()
                }
    
                setFileName(fileNames[Math.floor(Math.random() * fileNames.length)]);
    
                count++;
            }, 10)
        })
        .catch((error) => console.error(error))
    }

    const selectFile = () => {
        let e = document.getElementById("select")
        e.click()
    }

    const changedFile = (e) => {
        setUFileName(e.target.files[0].name)
    }

    const uploadFile = () => {

        let cb = document.getElementById("checkbox")
        
        if (cb.ariaChecked == "false") {
            Toast.error("Please check the checkbox")
        }
        else if (uFileName != "N/A") {
            
            let file = document.getElementById("select")

            setUploadStatus("Uploading...")

            fetch("http://localhost:3001/api/v1/upload", {
                method: 'POST',
                body: file.files[0]
            })
            .then(r => r.text())
            .then(r => {

                if (r != "success") {
                    throw Error("Something went wrong probably")
                }
                
                setUFileName("N/A")
                setUploadStatus("Finished")
                Toast.success("Completed uploading!")

                file.value = ""
            })
            .catch(e => {
                Toast.error("Something went wrong uploading...")
                setUFileName("N/A")
                setUploadStatus("Failed")
                file.value = ""
            })


        } else {
            Toast.error("No file found")
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
                        <CardContent className="space-y-2 flex justify-center">
                            <div className="block w-1/3">
                                <p className="text-center mb-4">Status: {uploadStatus}</p>
                                <input onChange={(e) => changedFile(e)} id="select" className="hidden" type='file'></input>
                                <Button onClick={() => selectFile()} className="m-auto w-full">
                                    Select File
                                </Button>
                                <p className="text-center mt-4">File Selected: {uFileName}</p>
                            </div>
                         </CardContent>
                        <CardFooter className="block">
                        <div className="flex items-center w-4/5 m-auto">
                            <Checkbox id="checkbox" className="mr-10"></Checkbox>
                            <p className="text-sm text-muted-foreground">I have not uploaded a virus or personal information I do not wish to share. The company will not be liable for any damages done afterwards.</p>
                        </div>
                        <Button onClick={() => uploadFile()} className="mx-auto block mt-4">Upload</Button>
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
                                <a id="fileName" className="text-center text-lg mr-2">{fileName}</a>
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
