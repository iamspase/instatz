import FileChooser from "@/components/FileChooser";
import Stats from "@/components/Stats";
import UsersList from "@/components/UsersList";

export default function Home() {
  return (
    <main className="container py-8 lg:flex justify-between items-start">
      <FileChooser />

      <div className="lg:w-[90%] lg:ml-16">
        <Stats />
        <UsersList />
      </div>
    </main>
  )
}
