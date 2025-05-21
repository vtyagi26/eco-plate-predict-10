
import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";

const NGORegister = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
};

export default NGORegister;
