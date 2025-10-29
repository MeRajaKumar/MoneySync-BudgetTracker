import React from 'react'
import SideMenu from './SideMenu ';

const Navbar = () => {
    const [openSideMenu, setOpenSideMenu]= useState(false);
  return (
    <div classname="">
        <button
            className=''
            onClick={() => {
                setOpenSideMenu(!openSideMenu);
            }}
        >{openSideMenu ?(
            <HiOutlineX className="" />
        ):(
            <HiOutlineMenu className="" />
        )}
        </button>

        <h2 className=" ">Expense Tracker</h2>

        {openSideMenu && (
            <div className="fixed top-">
                <SideMenu activeMenu = {activeMenu} />
            </div>
        )}
    </div>
  )
}

export default Navbar