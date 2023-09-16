import { IoCheckmarkCircle } from 'react-icons/io5'

export default function FileChooser() {
  return (
    <div className="p-4 sm:p-8 border-[1px] border-zinc-800 rounded-xl">
        <h3 className="text-xl font-bold text-zinc-300">Upload files</h3>
        <ul className="mb-6 mt-3">
            <li className='flex items-center'>
                <div className="text-zinc-500 text-2xl">
                    <IoCheckmarkCircle />
                </div>
                <p className='text-zinc-300 text-sm font-medium ml-3'>followers.json</p>
            </li>
            <li className='flex items-center mt-2'>
                <div className="text-zinc-500 text-2xl">
                    <IoCheckmarkCircle />
                </div>
                <p className='text-zinc-300 text-sm font-medium ml-3'>followings.json</p>
            </li>
        </ul>

        <div className="drop-zone bg-indigo-950/20 border-dashed border-2 border-indigo-500 p-16 rounded-xl">
            <p className="text-center text-zinc-300">Drop files here or <span className="text-indigo-500 cursor-pointer">choose a file.</span></p>
        </div>
    </div>
  )
}
