import { UserContext } from '../../context/UserContext.js';
import Navbar from '../layouts/Navbar';
import SideMenu from './SideMenu.js';
import React, { useContext } from "react";



const DashboardLayout = ({Children, activeMenu}) => {
    const {user} = useContext( UserContext);
  return (
    <div className="">
        <Navbar activeMenu={activeMenu} />

        {user && (
            <div className="flex">
                <div className="max-[1080px]:hidden">
                    <SideMenu activeMenu={activeMenu} />
                </div>
            <div className="grow mx-5">{Children}</div>
            </div>
        )}
    </div>
  )
};

export default DashboardLayout;