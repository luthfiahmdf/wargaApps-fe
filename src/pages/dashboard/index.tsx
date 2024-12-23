import { CardDashboard } from "@/components/ui/card-dahboard";
import { MockCard } from "./store";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-4xl  ">Dashboard</h1>
      <div className="flex gap-4">
        {MockCard.map((item, index) => (
          <CardDashboard
            key={index}
            title={item?.title}
            color={item.color}
            value={item?.value}
          />
        ))}
      </div>
    </div>
  );
};
