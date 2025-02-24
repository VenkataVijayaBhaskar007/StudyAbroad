import { Typography } from "antd";
import type { ReactNode } from "react";

import Card from "@/components/card";
import { Iconify } from "@/components/icon";

const dataSource = [
  {
    country: "USA",
    iconify: "twemoji:flag-united-states",
    studentsSent: "12.5k",
  },
  {
    country: "UK",
    iconify: "twemoji:flag-united-kingdom",
    studentsSent: "9.8k",
  },
  {
    country: "Canada",
    iconify: "twemoji:flag-canada",
    studentsSent: "8.7k",
  },
  {
    country: "Europe",
    iconify: "twemoji:flag-european-union",
    studentsSent: "7.4k",
  },
  {
    country: "Australia",
    iconify: "twemoji:flag-australia",
    studentsSent: "6.3k",
  },
  {
    country: "UAE",
    iconify: "twemoji:flag-united-arab-emirates",
    studentsSent: "5.9k",
  },
];

export default function TopDestinations() {
  return (
    <Card className="flex-col">
      <header className="self-start">
        <Typography.Title level={5}>Top Study Abroad Destinations</Typography.Title>
      </header>
      <main className="w-full">
        {dataSource.map((item) => (
          <div className="mb-4 flex items-center" key={item.country}>
            <Iconify icon={item.iconify} size={30} />
            <span className="mx-2 font-medium">{item.country}</span>
            <div className="ml-auto flex items-center justify-center text-gray-500">
              <Iconify icon="mdi:account-group" size={18} className="mr-1" />
              {item.studentsSent} students
            </div>
          </div>
        ))}
      </main>
    </Card>
  );
}