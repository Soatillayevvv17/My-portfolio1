import React from "react";

export default function Headerhero(){
return(
    <>
    <div className="flex justify-between">
        <div className="w-[100px] "></div>
        <ul className="flex justify-center  w-full items-center gap-8 p-2 rounded-bl-[1000px] bg-gray-300 shadow">
            <li><a href="#">Ta`lim</a></li>
            <li><a href="#">Moliya</a></li>
            <li><a href="#">Avto</a></li>
            <li><a href="#">Sog`lom hayot</a></li>
            <li><a href="#">Ko`chmas Mulk</a></li>
            <li><a href="#">Ayollar dunyosi</a></li>
            <li><a href="#">Turizm</a></li>
            <li><a href="#">Biznes</a></li>
        </ul>
        <div></div>
    </div>
    <div>
        <ul className="flex p-4 w-full justify-between items-center">
            <li className="list-disc"><a href="#">G`azoda otashkesim</a></li>
            <li className="list-disc"><a href="#">IIB boshlig`ining fitnasi</a></li>
            <li className="list-disc"><a href="#">Rassiya va Ukraina urushi</a></li>
            <li className="list-disc"><a href="#">"Geaosiyosat" dasturi</a></li>
        </ul>
    </div>
    <hr />
    </>
)

}
