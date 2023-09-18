import React from "react";

interface DropzoneProps {
    setFiles: any;
}

export default function Dropzone({ setFiles }: DropzoneProps) {
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.files?.length! > 0) setFiles(e.target.files);
  }

  return (
    <form className="w-min-content">
        <input onChange={(e) => handleOnChange(e)} type="file" multiple={true} className="bg-indigo-900/20 border-2 border-dashed border-indigo-500 rounded-lg outline-none px-8 py-12 text-white bg-none file:text-white file:bg-indigo-500  file:border-none file:outline-none file:rounded-lg file:p-1 text-sm" />
    </form>
  )
}
