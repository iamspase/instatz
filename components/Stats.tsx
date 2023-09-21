'use client'

import { DataContext } from "@/context/DataProvider"
import { useContext } from "react"

export default function Stats() {
  const { followers, followings, notFollowing, setCurrentListView, setSelectedTabData } = useContext(DataContext);

  return (
    <div className="w-full my-8 lg:mt-0 p-4 sm:p-8 border-[1px] border-zinc-800 rounded-xl">
        <h3 className="text-xl font-bold text-zinc-300">Stats</h3>

        <div className="flex justify-around items-center mt-4">
          <div onClick={() => {
              setCurrentListView("Followers")
              setSelectedTabData(followers)
              }} className="cursor-pointer flex flex-col items-center">
            <h6 className="font-bold text-indigo-300 text-sm">{followers?.length}</h6>
            <p className="font-medium text-zinc-300 text-sm">Followers</p>
          </div>
          <div onClick={() => { 
              setCurrentListView("Followings")
              setSelectedTabData(followings)
            }} className="cursor-pointer flex flex-col items-center">
            <h6 className="font-bold text-indigo-300 text-sm">{followings?.length}</h6>
            <p className="font-medium text-zinc-300 text-sm">Following</p>
          </div>
          <div onClick={() => { 
              setCurrentListView("Not Following")
              setSelectedTabData(notFollowing)
            }} className="cursor-pointer flex flex-col items-center">
            <h6 className="font-bold text-indigo-300 text-sm">{notFollowing?.length}</h6>
            <p className="font-medium text-zinc-300 text-sm">Not Following</p>
          </div>
        </div>
    </div>
  )
}
