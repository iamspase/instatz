'use client'

import React, { createContext, useEffect, useState } from "react"

export interface DataContextProps {
    followers?: any[];
    followings?: any[];
    notFollowing?: any[];
    currentListView?: string;
    setFollowers?: any;
    setFollowings?: any;
    setNotFollowing?: any;
    setCurrentListView?: any;
}

export const DataContext = createContext<DataContextProps>({});

export default function DataProvider({ children }: any) {
    const [followers, setFollowers] = useState([]);
    const [followings, setFollowings] = useState([]);
    const [notFollowing, setNotFollowing] = useState([]);
    const [currentListView, setCurrentListView] = useState("Followers")

    return (
        <DataContext.Provider value={{
            followers,
            setFollowers,
            followings,
            setFollowings,
            notFollowing,
            setNotFollowing,
            currentListView,
            setCurrentListView
        }}>
            {children}
        </DataContext.Provider>
    )
}
