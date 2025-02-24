import { Select, Typography } from "antd";
import { useState } from "react";

import Card from "@/components/card";
import Chart from "@/components/chart/chart";
import useChart from "@/components/chart/useChart";

export default function StudyAbroadTrends() {
	const [year, setYear] = useState("2025");
	const series: Record<string, ApexAxisChartSeries> = {
		"2022": [
			{ name: "USA", data: [12.5, 10.8, 11.3, 12.1, 13.0, 14.2, 13.8, 15.0, 14.5, 13.9, 12.8, 11.5] },
			{ name: "UK", data: [9.8, 8.5, 9.0, 9.3, 10.1, 10.7, 10.5, 11.2, 10.9, 10.2, 9.7, 9.1] },
			{ name: "Canada", data: [8.7, 7.9, 8.3, 8.5, 9.1, 9.8, 9.6, 10.2, 9.9, 9.4, 8.8, 8.2] },
		],
		"2023": [
			{ name: "USA", data: [13.0, 11.2, 12.1, 13.0, 14.3, 15.0, 14.5, 16.0, 15.2, 14.5, 13.3, 12.0] },
			{ name: "UK", data: [10.1, 9.0, 9.4, 10.0, 10.8, 11.3, 11.0, 11.8, 11.4, 10.7, 10.1, 9.5] },
			{ name: "Canada", data: [9.1, 8.4, 8.7, 9.2, 9.9, 10.5, 10.2, 11.0, 10.6, 10.0, 9.3, 8.7] },
		],
		"2024": [
			{ name: "USA", data: [13.5, 12.0, 12.8, 13.5, 14.7, 15.5, 15.0, 16.5, 15.8, 15.2, 14.0, 12.8] },
			{ name: "UK", data: [10.5, 9.5, 9.9, 10.5, 11.2, 11.7, 11.5, 12.2, 11.8, 11.0, 10.5, 9.8] },
			{ name: "Canada", data: [9.5, 8.8, 9.1, 9.6, 10.3, 10.9, 10.5, 11.3, 10.9, 10.3, 9.7, 9.0] },
		],
		"2025": [
			{ name: "USA", data: [14.0, 12.5, 13.2, 14.0, 15.1, 15.8, 15.3, 17.0, 16.2, 15.5, 14.5, 13.0] },
			{ name: "UK", data: [10.8, 9.8, 10.2, 10.8, 11.5, 12.0, 11.8, 12.5, 12.0, 11.3, 10.8, 10.0] },
			{ name: "Canada", data: [9.8, 9.2, 9.5, 10.0, 10.7, 11.3, 11.0, 11.8, 11.3, 10.7, 10.0, 9.5] },
		],
	};
	return (
		<Card className="flex-col">
			<header className="flex w-full justify-between self-start">
				<Typography.Title level={5}>Student Migration Trends</Typography.Title>
				<Select
					size="small"
					defaultValue={year}
					onChange={(value) => setYear(value)}
					options={[
						{ value: "2025", label: "2025" },
						{ value: "2024", label: "2024" },
						{ value: "2023", label: "2023" },
						{ value: "2022", label: "2022" },
					]}
				/>
			</header>
			<main className="w-full">
				<ChartArea series={series[year]} />
			</main>
		</Card>
	);
}

function ChartArea({ series }: { series: ApexAxisChartSeries }) {
	const chartOptions = useChart({
		xaxis: {
			type: "category",
			categories: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
			],
		},
		tooltip: {},
	});

	return (
		<Chart type="area" series={series} options={chartOptions} height={300} />
	);
}
