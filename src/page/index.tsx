import { Facebook, Logo, Twitter } from "../icon";
import ConnectBtn from "../components/buttons";
import Form from "../components/form";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-5 mt-10 mb-16 rounded-[15px] shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          {/* Logo */}

          <div className="w-[5rem] h-[5rem]  flex items-center justify-center">
            <Logo className="w-full h-full" />
          </div>
        </div>

        {/* Text */}

        <h2 className="text-3xl  font-[500] mb-2 text-center tracking-[1.5px]">
          Welcome back
        </h2>
        <p className=" text-[16px] text-center mb-6 text-gray-500">
          Sign in to access to your dashboard, <br /> settings and projects
        </p>

        {/* Btn group */}

        <ConnectBtn
          contet={{
            text: "Connect with Facebook",
            icon: <Facebook className="w-[25px] h-[25px]" />,
          }}
        />
        <ConnectBtn
          contet={{
            text: "Connect with Twitter",
            icon: <Twitter className="w-[25px] h-[25px]" />,
          }}
        />
        {/* ////////// */}

        <div className="flex items-center justify-between mb-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2  text-gray-500 whitespace-nowrap ">
            or sign in with email
          </span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Form */}
        <Form />

        {/*   Create an account */}
        <div className="text-center mt-4 flex items-center justify-center gap-2">
          <span className="text-gray-700">No account?</span>
          <a href="#" className="text-[#00b8d9] hover:underline">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
