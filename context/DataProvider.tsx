'use client'

import React, { createContext, useEffect, useState } from "react"

export interface DataContextProps {
    followers?: any[];
    followings?: any[];
    notFollowing?: any[];
    currentListView?: string;
    selectedTabData?: any[];
    setFollowers?: any;
    setFollowings?: any;
    setNotFollowing?: any;
    setCurrentListView?: any;
    setSelectedTabData?: any;
}

export const DataContext = createContext<DataContextProps>({});

export default function DataProvider({ children }: any) {
    const [followers, setFollowers] = useState([]);
    const [followings, setFollowings] = useState([]);
    const [notFollowing, setNotFollowing] = useState([]);
    const [currentListView, setCurrentListView] = useState("Followers")
    const [selectedTabData, setSelectedTabData] = useState<any>();

    useEffect(() => {
        setSelectedTabData(followers)
    }, [followers])

    return (
        <DataContext.Provider value={{
            followers,
            setFollowers,
            followings,
            setFollowings,
            notFollowing,
            setNotFollowing,
            currentListView,
            setCurrentListView,
            selectedTabData,
            setSelectedTabData
        }}>
            {children}
        </DataContext.Provider>
    )
}
