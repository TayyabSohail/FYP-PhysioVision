import { Form, Input } from "antd";
import { PrimaryButton } from "../components/Button";

import Logo from "../assets/images/Logo.png"; // Logo path
import whiteBackground from "../assets/images/white_background.png"; // White background for the right section

export const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 h-full bg-black text-white flex flex-col items-center justify-center p-8 rounded-tr-[5rem] rounded-br-[5rem]">
        <img src={Logo} alt="Logo" className="w-96 mb-5" />{" "}
        {/* Extremely large logo */}
        {/* Tagline in 2 Lines */}
        <p className="text-center text-2xl font-light max-w-[98%] leading-relaxed text-white mb-4 ">
          Your Premier Digital <br /> Physiotherapy Solution
        </p>
      </div>

      {/* Right Section */}
      <div
        className="w-1/2 h-full bg-gray-100 flex flex-col justify-center items-center p-8 relative"
        style={{
          backgroundImage: `url(${whiteBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Transparent Login Card */}
        <div className="bg-white/20 p-10 rounded-xl w-3/4 shadow-lg backdrop-blur-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-black">
            Welcome Back !
          </h2>
          <p className="mb-8 text-black text-lg text-center">
            Please enter your credentials to log in
          </p>

          <Form
            name="login-form"
            layout="vertical"
            className="w-full"
            onFinish={(values) => console.log(values)}
          >
            {/* Username */}
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input
                placeholder="Username"
                className="bg-white text-black p-4 rounded-lg"
              />
            </Form.Item>

            {/* Password */}
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                className="bg-white text-black p-4 rounded-lg"
              />
            </Form.Item>

            {/* Forgot Password */}
            <div className="text-right text-sm mb-4">
              <a href="#" className="text-black hover:text-gray-700">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <Form.Item>
              <PrimaryButton htmlType="submit" className=" !text-sm py-1">
                Sign In
              </PrimaryButton>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
