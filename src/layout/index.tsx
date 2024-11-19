import { Space, Layout as AntdLayout } from "antd";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Space direction="vertical" className="w-full h-full">
      <AntdLayout className="w-full h-full bg-white">
        <Header /> {/* Fixed Header */}
        <AntdLayout.Content>{children || <Outlet />}</AntdLayout.Content>
      </AntdLayout>
    </Space>
  );
};
