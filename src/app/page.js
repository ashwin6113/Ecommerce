import Home from "../components/Home";
import SubNav from "../components/SubNav";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="home">
      {/* <iframe src="https://lottie.host/embed/41ddab0b-1050-4c99-96b1-9c14f4042b0b/q4hCorX8uB.json"></iframe> */}
      <div>
        <SubNav />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
