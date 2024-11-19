import { Button, ButtonProps } from "antd";

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      htmlType={props?.htmlType}
      onClick={props?.onClick}
      className={`w-24 !font-extralight !px-8 !py-4 bg-black text-white rounded-full ${props?.className} mx-auto`}
    >
      {props.children}
    </Button>
  );
};
