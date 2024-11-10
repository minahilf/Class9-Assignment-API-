"use client"
import { useState, useEffect } from "react"
export default function CoinMarket(){
    const API_KEY = "bb5f5eda5a8f57467437f0dabdaa88f2"
    const [data, setData] = useState<any>(null)
    useEffect(()=>{
        fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
        .then((response)=> response.json())
        .then((jsonConverted)=>{
            console.log("converted data", jsonConverted);
            
            setData(jsonConverted)
        })

    },[])

    
    return(
        <div className="flex flex-col justify-center items-center p-[30px] text-white min-h-screen bg-gradient-to-b from-blue-800 to-blue-950">

            <h1 className="text-[32px] font-bold mb-[10px]">COIN MARKET</h1>

            <div className="w-full max-w-md bg-[#1e3a8a] rounded-lg shadow-lg">

                <div className="flex justify-between p-3 border-b border-blue-300 hover:bg-blue-500">
                    <span className="text-lg font-semibold">ARC</span>
                    <span className="text-lg font-bold">{data?.rates.ARC}</span>
                </div>

                <div className="flex justify-between p-3 border-b border-blue-300 hover:bg-blue-500">
                    <span className="text-lg font-semibold">BTC</span>
                    <span className="text-lg font-bold">{data?.rates.BTC}</span>
                </div>

                <div className="flex justify-between p-3 border-b border-blue-300 hover:bg-blue-500">
                    <span className="text-lg font-semibold">CLD</span>
                    <span className="text-lg font-bold">{data?.rates.CLD}</span>
                </div>

                <div className="flex justify-between p-3 border-b border-blue-300 hover:bg-blue-500">
                    <span className="text-lg font-semibold">DCT</span>
                    <span className="text-lg font-bold">{data?.rates.DCT}</span>
                </div>

                <div className="flex justify-between p-3 border-b border-blue-300 hover:bg-blue-500">
                    <span className="text-lg font-semibold">EC</span>
                    <span className="text-lg font-bold">{data?.rates.EC}</span>
                </div>

                <div className="flex justify-between p-3 border-b border-blue-300 hover:bg-blue-500">
                    <span className="text-lg font-semibold">FUEL</span>
                    <span className="text-lg font-bold">{data?.rates.FUEL}</span>
                </div>

                <div className="flex justify-between p-3 border-b border-blue-300 hover:bg-blue-500">
                    <span className="text-lg font-semibold">GTC</span>
                    <span className="text-lg font-bold">{data?.rates.GTC}</span>
                </div>

                <div className="flex justify-between p-3 border-b border-blue-300 hover:bg-blue-500">
                    <span className="text-lg font-semibold">LUX</span>
                    <span className="text-lg font-bold">{data?.rates.LUX}</span>
                </div>

                <div className="flex justify-between p-3 hover:bg-blue-500">
                    <span className="text-lg font-semibold">ILC</span>
                    <span className="text-lg font-bold">{data?.rates.ILC}</span>
                </div>

            

            </div>
            
        </div>
        
        
    )
}
