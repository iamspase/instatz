'use client'

import { useContext, useEffect, useState } from "react";
import User from "./User";
import { DataContext } from "@/context/DataProvider";

export default function UsersList() {
  const { currentListView, selectedTabData } = useContext(DataContext);

  const [search, setSearch] = useState<string>("");

  const filteredData = selectedTabData?.filter((user: any) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setSearch("")
  }, [currentListView])

  return (
    <div className="w-full p-4 sm:p-8 border-[1px] border-zinc-800 rounded-xl">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-zinc-300">{currentListView}</h3>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search for username"
          className="text-zinc-300 font-medium text-sm px-3 py-2 border-zinc-700 focus:border-indigo-500 outline-none border-[1px] rounded-xl bg-neutral-950"
        />
      </div>

      <ul>
        {currentListView === 'Followers' && (
          filteredData?.map((follower) => <User key={follower.name} name={follower.name} />)
        )}
        {currentListView === 'Followings' && (
          filteredData?.map((following) => <User key={following.name} name={following.name} />)
        )}
        {currentListView === 'Not Following' && (
          filteredData?.map((notFollower) => <User key={notFollower.name} name={notFollower.name} />)
        )}
      </ul>
    </div>
  );
}