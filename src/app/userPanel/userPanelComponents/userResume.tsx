"use client"
import ReservasData from "./reservasData";
import ActivitiesData from "./activitiesData";
import ActivitiesDataResume from "./activitiesDataResume";
import CuotasData from "./cuotasData";
import CuotasDataesume from "./cuotasDataResume";
import ReservasDataResume from "./reservasDataResume";
import UserData from "./userData";
import UserDataResume from "./userDataResume";
import { UserResumeProps } from "@/components/constants/interfaces";

const UserResume: React.FC<UserResumeProps> = ({ setMostrar }) => {

  const userDataClick = () => {
    setMostrar(<UserData/>);
  };
  const cuotasDataClick = () => {
    setMostrar(<CuotasData/>)
  }
  const activitiesDataClick = () => {
    setMostrar(<ActivitiesData/>)
  }
  const reservasDataClick = () => {
    setMostrar(<ReservasData/>)
  }


  return (
    <main className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 items-center content-center text-center justify-around h-full w-full">
      <button className="h-full" onClick={userDataClick}><UserDataResume/></button>
      <button className="h-full" onClick={cuotasDataClick}><CuotasDataesume/></button>
      <button className="h-full" onClick={activitiesDataClick}><ActivitiesDataResume/></button>
      <button className="h-full" onClick={reservasDataClick}><ReservasDataResume/></button>
    </main>
  );
}
export default UserResume;
