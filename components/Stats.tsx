export default function Stats() {
  return (
    <div className="w-full my-8 lg:mt-0 p-4 sm:p-8 border-[1px] border-zinc-800 rounded-xl">
        <h3 className="text-xl font-bold text-zinc-300">Stats</h3>

        <div className="flex justify-around items-center mt-4">
          <div className="flex flex-col items-center">
            <h6 className="font-bold text-indigo-300 text-sm">1020</h6>
            <p className="font-medium text-zinc-300 text-sm">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="font-bold text-indigo-300 text-sm">633</h6>
            <p className="font-medium text-zinc-300 text-sm">Following</p>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="font-bold text-indigo-300 text-sm">22</h6>
            <p className="font-medium text-zinc-300 text-sm">Not following</p>
          </div>
        </div>
    </div>
  )
}
