import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUpPage = ()=>{
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up Form</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block font-bold text-gray-700">Username:</label>
                        <input 
                        type="text"
                        id="username"
                        name="username"
                        placeholder="john wick"
                        className="w-full p-2 mt-1 border rounded-lg focus:ring-blue-500 border-blue-500"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-bold text-gray-700">Email:</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@gmail.com"
                        className="w-full p-2 mt-1 border rounded-lg focus:ring-blue-500 border-blue-500"/>
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block font-bold text-gray-700">Password:</label>
                        <input 
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full p-2 mt-1 border rounded-lg focus:ring-blue-500 border-blue-500"/>
                        <button
                        type="button" className="absolute right-2 top-10 text-gray-500"
                        onClick={()=> setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye />:<FaEyeSlash /> }
                        </button>
                    </div>
                    <button 
                    type="submit"
                    className="w-full p-2 text-xl text-white rounded-lg bg-green-500 hover:bg-green-400">
                        Sign Up
                    </button>
                </form>
                <div className="mt-4">
                <p className="text-center tetx-2xl text-gray-600">
                    Already a user?{" "}
                    <a href="/login">
                        <button className="text-blue-500 text-xl hover:underline"> Login</button>
                    </a>
                </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;