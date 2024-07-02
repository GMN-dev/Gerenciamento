'use client'
import logo from "../../public/logo_stefanini.png"
import defaultPhoto from "../../public/profile.jpg"
import data from "../api/teste.json"
import Image from "next/image"
import {DoorOpen, Search, Home, NotebookPen, Package, BarChartBig, LayoutGrid} from "lucide-react"

export default function Header(){
    const user = data[0];

    console.log(user);
    return(<div className="flex">
        <section className="h-screen">
            <div className=" w-56 h-20 flex justify-center items-center border-2">
                <Image src={logo}/>
            </div>
            <div className="p-6 font-bold text-primary  h-screen bg-white-primary border-2 border-t-0">
                <h3 className="text-2xl">Menu</h3>
                <ul className="mt-12 text-lg">
                    <a href=""><div className="flex items-center mb-10" ><Home/><li className="ml-2">Home</li></div></a>
                    <a href=""><div className="flex items-center mb-10" ><Package/><li className="ml-2">Estoque</li></div></a>
                    <a href=""><div className="flex items-center mb-10" ><NotebookPen/><li className="ml-2">Manutenção</li></div></a>
                    <a href=""><div className="flex items-center mb-10" ><BarChartBig/><li className="ml-2">Deshboards</li></div></a>
                    <a href=""><div className="flex items-center " ><LayoutGrid /> <li className="ml-2">Catálogo</li></div></a>
                </ul>
            </div>
        </section>
        <header className="w-full bg-white-primary h-20 flex items-center">
            <div className="flex justify-between items-center h-full w-full px-8 border-b-2">
                <div className="flex justify-center items-center">
                    <Image src={user.photo ? user.photo : defaultPhoto} className="rounded-full w-14 h-14" />
                    <div className="ml-3 font-semibold text-primary">
                        <h3>Olá <span className="text-highlight">{user.nome}</span></h3>
                        <p>Bem vindo de volta!</p>
                    </div>
                </div>  
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center bg-white-grey mr-6 rounded h-10">
                        <div className="p-2">
                            <Search size={14} color="#A5A5A5" className="text-primary"/>
                        </div>
                        <input type="text" name="" id="" placeholder="Pesquisar chamado..." className="pl-1 bg-white-grey text-sm rounded border-none focus:outline-none  placeholder:text-placeholder "/>
                    </div>
                    <button className="p-2 rounded bg-background-red ">
                        <DoorOpen color="red" />
                    </button>
                </div>
            </div>
        </header>
    </div>)
}