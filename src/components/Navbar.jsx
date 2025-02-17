import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo_22.png";

const Navbar = () => {
  return (
    <header className='header'>      
      <NavLink
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt='logo' className='w-8 h-8 object-contain rounded' />
          <p className='text-[16px] lg:text-[18px] cursor-pointer flex dark-gradient_text font-semibold drop-shadow'>
            Huỳnh Vĩnh Tiến&nbsp;
            {/* <span className='sm:block hidden'> | PortFolio</span> */}
          </p>
        </NavLink>
      <nav className='flex text-[14px] lg:text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;