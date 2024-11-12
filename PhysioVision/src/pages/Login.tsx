import { useState, useEffect } from "react";
import { Image, Form, Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../components/Buttons";
import { Logo } from "../components/Logo";
import loginImage from "../assets/images/login.png";
import { styles } from "../assets/styles";

// Define the LoginRequest interface
interface LoginRequest {
  email: string;
  password: string;
}

export const Login = () => {
  const [form] = Form.useForm<LoginRequest>();

  // Submittable state for form submit button
  const [submittable, setSubmittable] = useState<boolean>(false);

  // Watch all form values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const onFinish = async (values: LoginRequest) => {
    await form.validateFields();
    console.log("Login request: ", values);
  };

  return (
    <div className="w-full h-screen flex">
      {/* Left Side Image */}
      <Image
        preview={false}
        src={loginImage}
        alt="Login Image"
        height={"100%"}
        width={"50%"}
        className="object-cover"
      />

      {/* Right Side Form */}
      <div className="w-1/2 h-full flex flex-col justify-center p-10 gap-10">
        <div className="flex flex-col items-center gap-5">
          {/* Logo */}
          <Logo width="15%" />

          {/* Page Title */}
          <h2 className={styles.heading3}>PhysioVision</h2>
          <h5 className={styles.heading5}>AI-Powered Personal Physio</h5>
        </div>

        {/* Login Form */}
        <Form
          form={form}
          name="LoginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          layout="vertical"
          className="w-full flex flex-col items-center gap-5"
          scrollToFirstError
          autoComplete="off"
        >
          {/* Email Input */}
          <Form.Item
            name="email"
            label={<span className={styles.label}>Email</span>}
            className="min-w-[60%] m-0"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "The input is not valid email!",
              },
            ]}
          >
            <Input
              placeholder="Please enter your email"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            name="password"
            label={<span className={styles.label}>Password</span>}
            className="min-w-[60%] m-0"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters",
              },
            ]}
          >
            <Input.Password
              placeholder="Please enter your password"
              prefix={<KeyOutlined />}
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item shouldUpdate className="w-full flex justify-center">
            {() => (
              <PrimaryButton
                htmlType="submit"
                disabled={!submittable}
                className="min-w-[60%]"
              >
                Login
              </PrimaryButton>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
