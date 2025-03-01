"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent
} from "@/components/ui/chart"

import { useEffect } from "react"
import { useState } from "react";

export function FileTransfers({className}) {

    const [ uploads, setUploads ] = useState()
    const [ downloads, setDownloads ] = useState()

    const chartData = React.useMemo(() => [
        { transfer_type: "downloads", transfers: downloads, fill: "var(--color-downloads)", dataKey: "downloads" },
        { transfer_type: "uploads", transfers: uploads, fill: "var(--color-uploads)", dataKey: "uploads" },
    ], [uploads, downloads]);
    
    const chartConfig = {
        transfers: {
            label: "Transfers",
        },
        downloads: {
            label: "Downloads",
            color: "hsl(var(--chart-1))",
        },
        uploads: {
            label: "Uploads",
            color: "hsl(var(--chart-2))",
        },
    }
    
    const [totalTransfers, setTotalTransfers] = useState()

    useEffect(() => {
        let x = 0
        fetch("http://localhost:3001/api/v1/fetchUploads")
        .then(r => r.text())
        .then(n => {setUploads(parseInt(n)); x = parseInt(n)})
        
        fetch("http://localhost:3001/api/v1/fetchDownloads")
        .then(r => r.text())
        .then(n => {
            setDownloads(parseInt(n))
            setTotalTransfers(parseInt(n) + x)
            console.log(uploads, downloads, parseInt(n) + x)
        })
        
    }, [])


    return (
        <Card className={`flex flex-col ${className}`}>
            <CardHeader className="items-center pb-0">
                <CardTitle>Total File Transfers</CardTitle>
                <CardDescription>Since launch (2025 March)</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent className="w-[150px]" hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="transfers"
                            nameKey="transfer_type"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalTransfers.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Transfers
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                        <ChartLegend content={<ChartLegendContent />} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm mt-4">
                <div className="flex items-center gap-2 font-medium leading-none text-center">
                    On track to break 500k total transfers by end of Q2 
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total transfers since launch
                </div>
            </CardFooter>
        </Card>
    )
}
