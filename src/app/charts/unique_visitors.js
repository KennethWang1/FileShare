"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
  { month: "March", visitors: 895 },
  { month: "April", visitors: 1526 },
  { month: "May", visitors: 2365 },
  { month: "June", visitors: 2869 },
]

const chartConfig = {
  visitors: {
    label: "Unique Visitors",
    color: "hsl(var(--chart-1))",
  },
}

export function UniqueVisitors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Number of Unique Visitors</CardTitle>
        <CardDescription>March - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="w-[165px]" hideLabel />}
            />
            <Bar dataKey="visitors" fill="var(--color-visitors)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing monthly unique visitors since launch 
        </div>
      </CardFooter>
    </Card>
  )
}
