import { Link } from "react-router-dom";
import Nabebar from "./Shared/Nabebar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const hendelSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.text.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(photoUrl, name, email, password);
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div>
            <Nabebar />
            <div className="py-26  bg-white font-Poppin">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto">
                        <div className="text-center mb-8">
                            <a className="inline-block mx-auto mb-6" href="#">
                                <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
                            </a>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Register your account</h2>
                        </div>
                        <form onSubmit={hendelSubmit} action="">
                            <div className="mb-6">
                                <label className="block mb-2 font-extrabold" >Name</label>
                                <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold  bg-white shadow border-2 rounded" type="text" name="name" placeholder="Name" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 font-extrabold" >Photo URL</label>
                                <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold  bg-white shadow border-2  rounded" type="text" name="text" placeholder="Photo URL" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 font-extrabold" >Email</label>
                                <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold  bg-white shadow border-2 rounded" type="email" name="email" placeholder="email" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 font-extrabold" >Password</label>
                                <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold  bg-white shadow border-2  rounded" type="password" name="password" placeholder="**********" />
                            </div>
                            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                                <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                                    <label >
                                        <input type="checkbox" />
                                        <span className="ml-1 font-extrabold">Remember me</span>
                                    </label>
                                </div>
                                <div className="w-full lg:w-auto px-4"><a className="inline-block font-extrabold hover:underline" href="#">Forgot your password?</a></div>
                            </div>
                            <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#403F3F] hover:bg-[#402F3F] border-3 border-indigo-900 shadow rounded transition duration-200">Login</button>
                            <p className="text-center font-extrabold">Alrady have an account? <Link to='/login' className="text-red-500 hover:underline" >Login page</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register