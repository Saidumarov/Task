import { useState } from "react";
import { Live, LiveView, Next, Password, UserSvg } from "../icon";
const Form = () => {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="block text-gray-800 font-[500] ">Email</label>
          <div className="flex items-center  justify-between relative">
            <span className="absolute left-3 mt-2 opacity-[0.5]">
              <UserSvg />
            </span>
            <input
              required
              type="email"
              className="w-full pl-10 p-2.5  border rounded-full mt-2 focus:outline-none focus:ring-4 focus:ring-[#00b8d936] hover:[#00b8d936] focus:[#00b8d936] shadow-sm transition duration-200"
              placeholder="info@pixsellz.io"
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-800 font-[500]">Password</label>
          <div className="flex items-center  justify-between">
            <span className="absolute left-3 mt-2">
              <Password className="w-[22px] h-[22px]" />
            </span>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2.5 pl-10 border  rounded-full mt-2 focus:outline-none focus:ring-4 focus:ring-[#00b8d936] hover:[#00b8d936] focus:[#00b8d936] shadow-sm transition duration-200"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-5 mt-2 opacity-[0.7]"
            >
              {showPassword ? <Live /> : <LiveView />}
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            className="mr-2 w-[18px] h-[18px] outline-none border-white border-none shadow-lg rounded-full "
          />
          <label htmlFor="remember" className="text-gray-700">
            Remember for 30 days
          </label>
        </div>
        <button
          type="submit"
          className="button-next w-full bg-[#00b8d9] hover:bg-[#00b8d9e0]  transition-all border-b-[2px] text-white text-[18px] font-[500]   py-2 px-4 rounded-full flex items-center justify-center gap-2 "
        >
          Sign in <Next />
        </button>
      </form>
    </>
  );
};

export default Form;
