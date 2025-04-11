import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const armColors: { [key: string]: string } = {
  executive: "text-blue-500",
  legislative: "text-green-500",
  judicial: "text-purple-500",
};

const levelColors: { [key: string]: string } = {
  federal: "text-red-500",
  state: "text-yellow-600",
  local: "text-indigo-500",
};

function GovernmentOfficialCard({
  title,
  description,
  duties,
  arm,
  level,
}: {
  title: string;
  description: string;
  duties: string[];
  arm: string;
  level: string;
}) {
  const armColorClass = armColors[arm.toLowerCase()] || "text-black";
  const levelColorClass = levelColors[level.toLowerCase()] || "text-black";

  return (
    <Card className="w-full flex flex-col gap-4 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-semibold">{description}</p>
        <p className="font-light">{duties.join(", ")}</p>
      </CardContent>
      <CardFooter className="flex gap-4">
        <p className={`px-4 py-2 rounded-md font-semibold ${armColorClass}`}>
          {arm.charAt(0).toUpperCase() + arm.slice(1)}
        </p>
        <p className={`px-4 py-2 rounded-md font-semibold ${levelColorClass}`}>
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </p>
      </CardFooter>
    </Card>
  );
}

export default GovernmentOfficialCard;