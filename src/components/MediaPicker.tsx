'use client';

import { ChangeEvent, useState } from "react";

export default function MediaPicker(){
  const [preview, setPreview] = useState<string | null>(null);
  function handleFileSelected(event: ChangeEvent<HTMLInputElement>){
    const { files } = event.target; 

    if(!files) {
      return;
    }	

    const previewURL = URL.createObjectURL(files[0]);
    setPreview(previewURL);
  }

  return (
    <>
      <input 
        type="file" 
        id="media" 
        name="coverUrl"
        accept="image/*"
        onChange={handleFileSelected}
        className="invisible h-0 w-0"
      />

      {preview && (
        <img 
          src={preview} 
          alt="" 
          className="w-full aspect-video rounded-lg object-cover" 
        />
      )}
    </>
  )
}