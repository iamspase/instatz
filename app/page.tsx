import Dashboard from "@/components/Dashboard";
import FileChooser from "@/components/FileChooser";
import Stats from "@/components/Stats";
import UsersList from "@/components/UsersList";
import DataProvider from "@/context/DataProvider";
import { useContext } from "react";

export default function Home() {
  return (
    <main className="container py-8 xl:flex justify-between items-start">
        <DataProvider>
          <FileChooser />

          <Dashboard />
        </DataProvider>
    </main>
  )
}
