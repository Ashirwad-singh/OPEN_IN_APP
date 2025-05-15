import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FaCopy } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [link,setLink]=useState("");
    const [id,setId]=useState("");
    const [copied,setCopied]=useState(false);


    const genrateId=()=>{
      return Math.random().toString(36).substring(2,8);
    }

    const handleSubmit=()=>{
      if(!link) return;
      const newId=genrateId();
      localStorage.setItem(newId,link);
      setId(newId);
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(`${window.location.origin}/go/${id}`);
        setCopied(true);
        setTimeout(()=>setCopied(false),1500);
    }
   
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0f0c29] via-[rgb(48,43,99)] to-[#24243e] flex items-centre justify-center p-6 '>
      <div className='backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-md text-centre text-white'>
        <h1 className='text-3xl font-bold mb-2'>Open In App</h1>
        <p className='text-gray-400 mb-8'>Create smart links that open directly in the app </p>
        <input type="url" placeholder='paste your url here ' className='w-full p-3 rounded-lg  text-white placeholder:text-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 ' value={link} onChange={(e)=>setLink(e.target.value)} />
        <button  onClick={handleSubmit} className='mt-4 w-full py-3 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-[#0f0c2b63] to-[#24243e] hover:from-[#1e1b4b] hover:to-[#3b0764] transition-all duration-300 ease-in-out shadow-xl hover:scale-105 focus:outline-none cursor-pointer'>Gentrate Samrt link</button>
        {id&&(
            <div className='mt-8 bg-white/1 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white'>
                <p className='text-sm font-bold text-gray-300 mb-2 '>Your Smart Link:</p>
                <div className='flex items-centre justify-between bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 p-[2px] rounded-lg '>
                    <div className='flex-1 bg-black/70 rounded-l-md px-4 py-2 break-all text-sm' >
                        {window.location.origin}/go/{id}
                    </div>
                    <button 
                    onClick={handleCopy}
                     className='bg-black/70 cursor-pointer text-white px-4 py-3 text-sm rounded-r-md hover:bg-black/80 transition '>
                        {copied?(
                            <span className='text-green-400'>Copied</span>
                        ):(
                            <FaCopy></FaCopy>
                        )}

                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Home
