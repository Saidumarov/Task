import { useState } from "react";
import { Live, LiveView, Next, Password, UserSvg } from "../icon";
const Form = () => {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
          <label className="inline-flex items-center gap-4">
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`w-5 h-5 border rounded-md cursor-pointer shadow-sm ${
                isChecked
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white border-gray-300"
              } flex items-center justify-center`}
            >
              {isChecked && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
            <span className="text-gray-700 cursor-pointer ">
              Remember for 30 days
            </span>
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
