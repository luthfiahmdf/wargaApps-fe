import { TCardDashboard } from "@/types/cardDasboard/type";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { FC } from "react";

export const CardDashboard: FC<TCardDashboard> = ({ title, color, value }) => {
  return (
    <Card
      className={`w-full shadow-lg flex flex-row border-l-8 rounded-xl border-l-${color}`}
    >
      {/* <div className={`  border-l-4 rounded-xl  border-l-${color}`} /> */}
      <div className="flex flex-col  ">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-4xl text-slate-900 font-bold">
            {value}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
};
