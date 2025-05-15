import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { detectDevice } from '../utils/detectDevice'

function Redirect() {
    const {id}=useParams();
    const originalUrl=localStorage.getItem(id);
    useEffect(()=>{
        if(!originalUrl) return;
        const device=detectDevice();
        const appLink=getAppLInk(originalUrl,device);

        window.location.href=appLink;
        setTimeout(()=>{
            window.location.href=originalUrl;
        },2000);

    },[id]);
    const getAppLInk=(url,device)=>{
        if(url.includes("instagram.com")){
            if(device==="Android")
            return `intent://${url.replace("https://","")}
        #intent; package=com.instagram.android;scheme=https;end`;
        if(device==="ios") return 'istagram://app';
            
        }
        return url;
    }

    if(!originalUrl){
        return (
    <div className='min-h-screen bg-gradient-to-r from-[#0f0c29] via-[rgb(48,43,99)] to-[#24243e] flex items-centre justify-center p-6 '>
       <div className='backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-xl text-centre shadow-lg text-white '>
        <h2 className='text-2xl font-bold text-red-400 mb-2'>Link Not Found</h2>
        <P className='text-gray-300'>This Link is invalid or has expired</P>
       </div>
    </div>
  )
    }
    return(
        <div className='min-h-screen items-centre justify-centre bg-gradient-to-r from-[#0f0c29] via-[rgb(48,43,99)] to-[#24243e] flex items-centre justify-center p-6 '>
            <div className='backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-xl shadow-lg text-centre text-white max-w-md w-full'>
                <h2 className='text-2xl font-bold mb-2'>Opening in App..</h2>
                <p className='text-gray-300'>if it does't open automatically, 
                    <br />
                    <a href={originalUrl} className='text-purple-400 underline '>Click here</a>
                </p>
            </div>
        </div>
    )
 
}

export default Redirect
