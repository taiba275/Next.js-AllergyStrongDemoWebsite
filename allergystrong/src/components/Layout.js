
import Footer from "@/pages/Footer";


const Layout = ({ children }) => {
  return (
    <div className="bg-white text-black">
      
      <nav className="bg-black-8">
        <div className="container mx-auto flex justify-between items-center"/>
      </nav>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
