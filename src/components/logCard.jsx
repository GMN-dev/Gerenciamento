'use client'
import Image from "next/image"
import profile from "../../public/profile.jpg"

 

export default function LogCard(props){
    return(<>
        <div className="w-full h-fit flex text-primary justify-between items-center p-2 border-b-2">
            <div className="flex ">
                <Image src={profile} className="rounded-full w-14 h-14"/>
                <div className="ml-2">
                    <p className="font-bold text-base">{props.name}</p>
                    <p className="font-semibold flex flex-1">{props.log}</p>
                </div>
            </div>
            <div className="">
                <p>{props.date}</p>
            </div>
        </div>
    </>)
}