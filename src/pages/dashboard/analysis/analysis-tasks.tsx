import { faker } from "@faker-js/faker";
import { Checkbox, List } from "antd";

import { IconButton, Iconify } from "@/components/icon";

export default function AnalysisTasks() {
	const data = [
		{
			task: "Follow up with pending student inquiries",
			checked: false,
		},
		{
			task: "Schedule counseling sessions for prospective students",
			checked: true,
		},
		{
			task: "Verify uploaded documents for visa processing",
			checked: false,
		},
		{
			task: "Update status of university applications",
			checked: false,
		},
		{
			task: "Prepare weekly report for team review",
			checked: false,
		},
	];

	return (
		<List
			size="small"
			dataSource={data}
			renderItem={(item) => (
				<List.Item
					actions={[
						<IconButton key={item.task}>
							<Iconify icon="fontisto:more-v-a" />
						</IconButton>,
					]}
				>
					<Checkbox
						onChange={(e) => {
							item.checked = e.target.checked;
						}}
						checked={item.checked}
					>
						{item.task}
					</Checkbox>
				</List.Item>
			)}
		/>
	);
}