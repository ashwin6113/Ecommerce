import Home from "../components/Home";
import SubNav from "../components/SubNav";

const page = () => {
  return (
    <main className="home">
      {/* <iframe src="https://lottie.host/embed/41ddab0b-1050-4c99-96b1-9c14f4042b0b/q4hCorX8uB.json"></iframe> */}
        <div className="flex flex-row justify-center align-middle h-28">
          <SubNav />
        </div>
        <div>
          <Home />
        </div>
    </main>
  );
};

export default page;
