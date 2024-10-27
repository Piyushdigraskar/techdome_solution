import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Fill out all the form");
    }
    try {
      setErrorMessage(null);
      const res = await fetch(`http://localhost:5000/api/user/login`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if(data.success === false){
        setErrorMessage(data.message);
      }
      if(res.ok){
        alert(data.message);
        navigate('/about');
      }
      
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login Form
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block font-bold text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-lg focus:ring-blue-500 border-blue-500"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block font-bold text-gray-700">
              Password:
            </label>
            <input
              type={showPassword ? "password" : "text"}
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-lg focus:ring-blue-500 border-blue-500"
            />
            <button
              className="absolute right-2 top-10 text-gray-500"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-2 text-xl text-white rounded-lg bg-green-500 hover:bg-green-400"
            >
              SignUp
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p lassName="text-center tetx-2xl text-gray-600">
            Not a user yet?{" "}
            <a href="/signup">
              <button className="text-blue-500 text-xl hover:underline">
                Sign-Up
              </button>
            </a>
          </p>
        </div>
        {errorMessage && alert(errorMessage)}
      </div>
    </div>
  );
};

export default LoginPage;
