import { Space, Tag, Typography } from "antd";
import Table, { type ColumnsType } from "antd/es/table";

import Card from "@/components/card";
import { IconButton, Iconify } from "@/components/icon";
import Scrollbar from "@/components/scrollbar";

interface DataType {
	key: string;
	id: string;
	category: string;
	price: string;
	status: string;
}

export default function NewInvoice() {
	const columns: ColumnsType<DataType> = [
		{
			title: "Student Name",
			dataIndex: "id",
			key: "id",
			render: (text) => <span>{text}</span>,
		},
		{
			title: "Degree",
			dataIndex: "category",
			key: "category",
		},
		{
			title: "Course",
			dataIndex: "price",
			key: "price",
			render: (text) => <span>{text}</span>,
		},
		{
			title: "Status",
			key: "status",
			dataIndex: "status",
			render: (status) => {
				let color = "green";
				if (status === "Ongoing") color = "gold";
				if (status === "Hold") color = "blue";
				if (status === "Rejected") color = "red";

				return <Tag color={color}>{status}</Tag>;
			},
		},
		{
			title: "Action",
			key: "action",
			render: () => (
				<Space size="middle">
					<IconButton>
						<Iconify icon="fontisto:more-v-a" />
					</IconButton>
				</Space>
			),
		},
	];

	const data: DataType[] = [
		{
			key: "1",
			id: "Aarav Sharma",
			category: "B.Tech in Computer Science",
			price: "Web Development",
			status: "Completed",
		},
		{
			key: "2",
			id: "Ishita Verma",
			category: "MBA in Marketing",
			price: "Digital Marketing",
			status: "Ongoing",
		},
		{
			key: "3",
			id: "Rohan Gupta",
			category: "B.Sc in Data Science",
			price: "Data Analytics",
			status: "Hold",
		},
		{
			key: "4",
			id: "Ananya Kapoor",
			category: "B.Com in Finance",
			price: "Accounting Basics",
			status: "Rejected",
		},
		{
			key: "5",
			id: "Aryan Mehta",
			category: "BBA in Management",
			price: "Business Administration",
			status: "Completed",
		},
	];

	return (
		<Card className="flex-col">
			<header className="self-start">
				<Typography.Title level={5}>Student Enrollment</Typography.Title>
			</header>
			<main className="w-full">
				<Scrollbar>
					<Table columns={columns} dataSource={data} pagination={false} />
				</Scrollbar>
			</main>
		</Card>
	);
}
