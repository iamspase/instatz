'use client'

import { IoCheckmarkCircle } from 'react-icons/io5'
import Dropzone from './Dropzone'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '@/context/DataProvider';

export default function FileChooser() {
  const [files, setFiles] = useState<FileList>();
  const [followingsFile, setFollowingsFile] = useState<boolean>(false);
  const [followersFile, setFollowersFile] = useState<boolean>(false);

  const { followers, setFollowers, followings, setFollowings, notFollowing, setNotFollowing } = useContext(DataContext);

  useEffect(() => {
    // Make sure that both required files exist
    if(files) {
        if(files[0]?.name === 'followings.json' || files[1]?.name === 'followings.json') setFollowingsFile(true);
        else setFollowingsFile(false)
        
        if(files[0]?.name === 'followers.json' || files[1]?.name === 'followers.json') setFollowersFile(true);
        else setFollowersFile(false)
    }
  }, [files])

  useEffect(() => {
    // see who follows back
    const notFollowingUsers = followers?.filter(follower => !followings?.some(following => following.name === follower.name));

    // Update the notFollowing state with the filtered users
    setNotFollowing(notFollowingUsers || []);
  }, [followers, followings])

  function proccessFile(file: File) {
    if(followersFile && followingsFile) {
        const fileReader = new FileReader();
        fileReader.readAsText(file, 'UTF-8');

        fileReader.onload = (e: any) => {
            
            if(file.name === 'followers.json') {
                setFollowers(JSON.parse(e.target.result))
            }
            else setFollowings(JSON.parse(e.target.result))
        }
    }
  }

  function proccessFiles() {
    proccessFile(files![0])
    proccessFile(files![1])
  }

  return (
    <div className="mb-8 w-auto p-4 sm:p-8 border-[1px] border-zinc-800 rounded-xl">
        <h3 className="text-xl font-bold text-zinc-300">Upload files</h3>
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
    </div>
  )
}
