'use client'

import { IoCheckmarkCircle } from 'react-icons/io5'
import Dropzone from './Dropzone'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '@/context/DataProvider';

export default function FileChooser() {
  const [files, setFiles] = useState<FileList>();
  const [followingsFile, setFollowingsFile] = useState<boolean>(false);
  const [followersFile, setFollowersFile] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { followers, setFollowers, followings, setFollowings, notFollowing, setNotFollowing } = useContext(DataContext);

  useEffect(() => {
    // Make sure that both required files exist
    if(files) {
        if(files[0]?.name === 'following.json' || files[1]?.name === 'following.json') setFollowingsFile(true);
        else setFollowingsFile(false)
        
        if(files[0]?.name === 'followers.json' || files[1]?.name === 'followers.json') setFollowersFile(true);
        else setFollowersFile(false)
    }
  }, [files])

  useEffect(() => {
    // see who follows back
    const notFollowingUsers = followings?.filter(following => !followers?.some(follower => follower.string_list_data[0].value === following.string_list_data[0].value));

    setNotFollowing(notFollowingUsers || []);
  }, [followers, followings])

  function readFile(file: File) {
    if(followersFile && followingsFile) {
        const fileReader = new FileReader();
        fileReader.readAsText(file, 'UTF-8');

        fileReader.onload = (e: any) => {
            
            if(file.name === 'followers.json') {
                setFollowers(JSON.parse(e.target.result))
              }
            else setFollowings(JSON.parse(e.target.result).relationships_following)
        }
    }
  }

  function proccessFiles() {
    if(!files) return setError("Please try again uploading the required files.")
    
    setError("")
    readFile(files![0])
    readFile(files![1])
  }

  if(followers?.length! > 0 && followings?.length! > 0) {
    return null;
  }

  return (
    <div className="mb-8 w-[430px] p-4 sm:p-8 border-[1px] border-zinc-800 rounded-xl">
        <h3 className="text-xl font-bold text-zinc-300">Upload files</h3>
        <p className='my-4 text-sm font-medium text-gray-400 w-96'>Request "Followers and Following" data <b>AS JSON</b> directly from your Instagram account on the web or from your mobile application. <br />
        Extract the "followers_0.json" and "following.json" files and upload them here.</p>

        <p className='mb-4 text-orange-500 font-medium text-sm'>Rename the "followers_0.json" to just "followers.json"!</p>
        
        <ul className="mb-6 mt-3">
            <li className='flex items-center'>
                <div className={`${followersFile ? 'text-green-500' : 'text-zinc-300'} text-2xl`}>
                    <IoCheckmarkCircle />
                </div>
                <p className='text-zinc-300 text-sm font-medium ml-3'>followers.json</p>
            </li>
            <li className='flex items-center mt-2'>
                <div className={`${followingsFile ? 'text-green-500' : 'text-zinc-300'} text-2xl`}>
                    <IoCheckmarkCircle />
                </div>
                <p className='text-zinc-300 text-sm font-medium ml-3'>followings.json</p>
            </li>
        </ul>

        <Dropzone 
            setFiles={setFiles}
        />

        <button onClick={proccessFiles} className='bg-indigo-500 border-none outline-none rounded-lg text-white py-1 px-4 text-sm mt-3'>Continue</button>
        <p className='text-red-500 my-4'>{error}</p>

        <p className='text-sky-400 text-sm'>Your data is stored on your device/browser's memory, and it is automatically cleared when you refresh the page. No data is stored on any server. <br /> All it does is basically comparing two JSON files and displaying them on the page.</p>
    </div>
  )
}
