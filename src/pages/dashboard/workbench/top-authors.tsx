import Card from "@/components/card";
import { Iconify } from "@/components/icon";
import { themeVars } from "@/theme/theme.css";
import { Typography } from "antd";

export default function TopAuthor() {
  const predefinedLikes = [9, 8, 7, 6, 5, 4]; // Predefined manual values in 'K'

  const authorImages = [
    "/images/authors/swathi.jpeg",
    "/images/authors/anil.jpeg",
    "/images/authors/poojitha.jpg",
    "/images/authors/adinarayana.jpeg",
    "/images/authors/anusha.jpeg",
    "/images/authors/naveena.jpeg",
  ];

  const getTrophyIconColor = (index: number) => {
    switch (index) {
      case 0:
        return {
          color: themeVars.colors.palette.success.default,
          bg: `rgba(${themeVars.colors.palette.success.defaultChannel}, .4)`,
        };
      case 1:
        return {
          color: themeVars.colors.palette.info.default,
          bg: `rgba(${themeVars.colors.palette.info.defaultChannel}, .4)`,
        };
      case 2:
        return {
          color: themeVars.colors.palette.error.default,
          bg: `rgba(${themeVars.colors.palette.error.defaultChannel}, .4)`,
        };
      case 3:
        return {
          color: themeVars.colors.palette.warning.default,
          bg: `rgba(${themeVars.colors.palette.warning.defaultChannel}, .4)`,
        };
      case 4:
        return {
          color: themeVars.colors.palette.primary.default,
          bg: `rgba(${themeVars.colors.palette.primary.defaultChannel}, .4)`,
        };
      case 5:
        return {
          color: themeVars.colors.palette.secondary.default,
          bg: `rgba(${themeVars.colors.palette.secondary.defaultChannel}, .4)`,
        };
      default:
        return {
          color: themeVars.colors.palette.success.default,
          bg: `rgba(${themeVars.colors.palette.success.defaultChannel}, .4)`,
        };
    }
  };

  return (
    <Card className="flex-col">
      <header className="self-start">
        <Typography.Title level={5}>AOC Pride</Typography.Title>
      </header>
      <main className="w-full">
        {new Array(6).fill("").map((_, index) => (
          <div key={index} className="mb-4 flex">
            <img
              src={authorImages[index]} // Use the local image path
              alt="Author"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-2 flex flex-col">
              <span>
                {index === 0
                  ? "Swathi Chowdary Kakani - CEO & Managing Director"
                  : index === 1
                  ? "Anil Kumar Kakani - Managing Director"
                  : index === 2
                  ? "Poojitha Subrahmanyam Naralasetti - Managing Partner"
                  : index === 3
                  ? "Adinarayana Mandalapu - Managing Partner"
                  : index === 4
                  ? "Anusha Vajja - Senior Consultant"
                  : index === 5
                  ? "Naveena Bhargavi Ravula - Operations Manager"
                  : ""}
              </span>
              <div className="flex items-center text-gray">
                <Iconify icon="icon-park-solid:like" size={14} />
                <span className="ml-2">{predefinedLikes[index]}Years</span>
              </div>
            </div>

            <div
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                background: getTrophyIconColor(index).bg,
              }}
            >
              <Iconify
                icon="solar:cup-star-bold"
                size={24}
                color={getTrophyIconColor(index).color}
              />
            </div>
          </div>
        ))}
      </main>
    </Card>
  );
}
