import { Button, ButtonProps } from "antd";

export const SecondaryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      htmlType={props?.htmlType}
      onClick={props?.onClick}
      className={`w-32 font-small !px-2 !py-6 bg-white text-black rounded-full ${props?.className} mx-auto`}
    >
      {props.children}
    </Button>
  );
};
