'use client'

import { useContext } from "react";
import Stats from "./Stats";
import UsersList from "./UsersList";
import { DataContext } from "@/context/DataProvider";

export default function Dashboard() {
  const { followings, followers } = useContext(DataContext);

  if(followings?.length === 0 && followers?.length === 0) return <></>

  return (
    <div className="lg:w-[90%] xl:ml-16">
        <Stats />
        <UsersList />
    </div>
  )
}
