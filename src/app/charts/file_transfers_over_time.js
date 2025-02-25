"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
} from "@/components/ui/chart"
const chartData = [
  { month: "March", downloads: 2365, uploads: 865 },
  { month: "April", downloads: 10225, uploads: 5632 },
  { month: "May", downloads: 36523, uploads: 10532 },
  { month: "June", downloads: 64523, uploads: 35326 },
]

const chartConfig = {
  downloads: {
    label: "Downloads",
    color: "hsl(var(--chart-1))",
  },
  uploads: {
    label: "Uploads",
    color: "hsl(var(--chart-2))",
  },
} 

export function FileTransfersOverTime({className}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>File Transfers Over Time</CardTitle>
        <CardDescription>March - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer style={{
            "aspectRatio": "14/6"
        }} config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            style={{
                "height": "200px !important"
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent className="w-[150px]" />} />
            <Line
              dataKey="downloads"
              type="monotone"
              stroke="var(--color-downloads)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="uploads"
              type="monotone"
              stroke="var(--color-uploads)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              We made these numbers up<TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total transfers for the last 4 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
