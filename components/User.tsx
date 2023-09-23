import Link from "next/link";

export default function User({ value, href, timestamp } : { value?: string, href: string, timestamp: number }) {
  return (
    <Link href={href?.toString()} target="_blank">
      <div className="p-4 bg-zinc-950 transition-colors hover:bg-zinc-900 my-2 rounded-lg">
          <h6 className="text-indigo-500 font-medium">{value}</h6>
          <p className="text-gray-300 text-xs font-medium">{new Date(timestamp * 1000).toLocaleString()}</p>
      </div>
    </Link>
  )
}
