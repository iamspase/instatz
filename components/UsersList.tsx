'use client'

import { useContext } from "react";
import User from "./User";
import { DataContext } from "@/context/DataProvider";

export default function UsersList() {
  const { followers, followings, notFollowing, currentListView } = useContext(DataContext);

  function displayUserList() {
    if(currentListView === 'Followers') return followers?.map((follower) => <User key={follower.name} name={follower.name}/>)
    else if (currentListView === 'Followings') return followings?.map((following) => <User key={following.name} name={following.name}/>)
    else return notFollowing?.map((notFollower) => <User key={notFollower.name} name={notFollower.name} />)
  }

  return (
    <div className="w-full p-4 sm:p-8 border-[1px] border-zinc-800 rounded-xl">
        <div className="flex flex-wrap justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-zinc-300">{currentListView}</h3>
            <input type="text" placeholder="Search for username" className="text-zinc-300 font-medium text-sm px-3 py-2 border-zinc-700 focus:border-indigo-500 outline-none border-[1px] rounded-xl bg-neutral-950" />
        </div>

        <ul>
          {displayUserList()}
        </ul>

    </div>
  )
}
