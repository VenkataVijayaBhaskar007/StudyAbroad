import { Avatar, List } from "antd";

const data = [
	{
		title: "Top 10 Universities for International Students in 2024",
		description: "A new ranking highlights the best universities worldwide for study abroad aspirants."
	},
	{
		title: "New Visa Policies Announced for International Students",
		description: "Several countries have updated their visa rules to make it easier for students to study abroad."
	},
	{
		title: "Scholarships Available for Fall 2024 Intake",
		description: "Explore the latest fully funded and partial scholarships for international students."
	},
	{
		title: "Post-Study Work Opportunities Expanding in Canada and Australia",
		description: "Graduates can now stay longer and explore job opportunities in their respective fields."
	}
];

export default function AnalysisNews() {
	return (
		<List
			size="small"
			pagination={{ position: "bottom", align: "end" }}
			dataSource={data}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta
						avatar={
							<Avatar
								shape="square"
								size={48}
								src="https://source.unsplash.com/50x50/?education,university"
							/>
						}
						title={item.title}
						description={item.description}
					/>
				</List.Item>
			)}
		/>
	);
}
