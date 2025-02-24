import { Tag, Typography } from "antd";
import Card from "@/components/card";
import { Iconify } from "@/components/icon";
import Scrollbar from "@/components/scrollbar";
import { Rate } from "antd";

const universities = [
  {
    logo: <Iconify icon="logos:harvard" size={24} />, // Example icon, replace with actual
    name: "Harvard University",
    location: "USA",
    tuition: "$50,000/year",
    rating: 4.8,
    reviews: "12.5k",
  },
  {
    logo: <Iconify icon="logos:oxford" size={24} />,
    name: "University of Oxford",
    location: "UK",
    tuition: "$45,000/year",
    rating: 4.7,
    reviews: "10.2k",
  },
  {
    logo: <Iconify icon="logos:mit" size={24} />,
    name: "MIT",
    location: "USA",
    tuition: "$55,000/year",
    rating: 4.9,
    reviews: "9.8k",
  },
  {
    logo: <Iconify icon="logos:toronto" size={24} />,
    name: "University of Toronto",
    location: "Canada",
    tuition: "$35,000/year",
    rating: 4.6,
    reviews: "8.5k",
  },
  {
    logo: <Iconify icon="logos:melbourne" size={24} />,
    name: "University of Melbourne",
    location: "Australia",
    tuition: "$40,000/year",
    rating: 4.5,
    reviews: "7.9k",
  },
];

export default function TopUniversities() {
  return (
    <Card className="flex-col">
      <header className="self-start">
        <Typography.Title level={5}>Top Study Abroad Universities</Typography.Title>
      </header>
      <main className="w-full">
        <Scrollbar>
          {universities.map((uni) => (
            <div className="mb-4 flex" key={uni.name}>
              <div
                className="mr-2 flex items-center justify-center bg-gray-200 rounded-xl w-12 h-12"
              >
                {uni.logo}
              </div>
              <div className="flex flex-col">
                <span className="font-medium">{uni.name}</span>
                <div className="flex items-center text-gray-500 text-xs">
                  <Iconify icon="carbon:location" size={12} />
                  <span className="ml-1">{uni.location}</span>
                  <Tag color="blue" className="ml-2">{uni.tuition}</Tag>
                </div>
              </div>
              <div className="ml-auto flex flex-col self-center">
                <Rate allowHalf disabled defaultValue={uni.rating} />
                <span className="mt-1 text-right text-xs text-gray-400">{uni.reviews} reviews</span>
              </div>
            </div>
          ))}
        </Scrollbar>
      </main>
    </Card>
  );
}