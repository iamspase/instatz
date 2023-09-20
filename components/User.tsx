export default function User({ name } : { name: string }) {
  return (
    <div className="p-4 bg-zinc-950 transition-colors hover:bg-zinc-900 my-2 rounded-lg">
        <h6 className="text-indigo-500 font-medium">{name}</h6>
    </div>
  )
}
