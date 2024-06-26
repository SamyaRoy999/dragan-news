import { useContext } from "react"
import userImg from "../../assets/user.png"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../Provider/AuthProvider"
const Nabebar = () => {
    const { user, logOut } = useContext(AuthContext)


    const linkNav = <>
        <li><Link to='/'>Home  </Link></li>
        <li><Link to=''>About</Link></li>
        <li><Link to=''>Career</Link></li>
        <li><Link to='/login'>Login</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 my-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {linkNav}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {linkNav}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={userImg} />
                    </div>
                </div>
                {user ? <button onClick={()=> logOut()} className="btn bg-[#403F3F] text-xl font-bold text-white">Loge out</button>

                    : <Link to='/login' className="btn bg-[#403F3F] text-xl font-bold text-white">Login</Link>
                }
            </div>
        </div>
    )
}

export default Nabebar