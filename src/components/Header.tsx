import React from "react";
import Logo from "/vite.svg"

export default function Header(){
return(
    <>
    <header className="w-full bg-white rounded flex justify-between items-center">
        <div className="w-[120px] h-[70px]">
    <img className="w-full h-full" src={Logo} alt="" />
        </div>
        <nav>
            <ul className="flex justify-between gap-6 items-center">
                <li><a href="#" className="font-bold">O`zbekiston</a></li> 
                <li><a href="#" className="font-bold">Jahon</a></li> 
                <li><a href="#" className="font-bold">Iqtisodiyot</a></li>
                <li><a href="#" className="font-bold">Jamiyat</a></li>
                <li><a href="#" className="font-bold">Sport</a></li>
                <li><a href="#" className="font-bold">Tehnalogiya</a></li>
                <li><a href="#" className="font-bold">Audio</a></li>
            </ul>
        </nav>
        <div className="flex gap-2  items-center mr-2">
            <button className="bg-gray-200 p-2 rounded">🌐o`zbekcha</button>
            <button className="bg-gray-200 p-2 rounded">🔍</button>
            <button className="bg-gray-200 p-2 rounded">🏠</button>
        </div>
    </header>
    </>
)

}
