import { Layout } from "../layout"; // Layout already includes Header

export const Home = () => {
  return (
    <Layout>
      {" "}
      {/* Layout handles Header */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url('assets/images/home_page.png')`,
        }}
      ></div>
      {/* Rest of Home component content */}
    </Layout>
  );
};
