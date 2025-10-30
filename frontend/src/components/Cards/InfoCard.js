import React from "react";
import { IoMdCard } from "react-icons/io";



const InfoCard = ({ icon, label, value, color }) => {
 
    return (
        <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-500/5  ">
            <div className={`w-14 h-14 flex item-center  justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
                {icon}
            </div>
            <div>
                <h6 className="text-sm text-gray-500 mb-1">{label}</h6>
                <span className="text-[22px]">${value}</span>
            </div>InfoCard
        </div>
    )
};

export default InfoCard;