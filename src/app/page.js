import Home from "../components/Home"
 
 const page = () => {
  return (
    <main className="home">
        {/* <iframe src="https://lottie.host/embed/41ddab0b-1050-4c99-96b1-9c14f4042b0b/q4hCorX8uB.json"></iframe> */}
      <div className="d-flex justify-center align-middle p-20">
        <h1 className="text-6xl font-semibold">
          <strong>
            "Amazing things will happen
            <br />  &nbsp;&nbsp;when you listen <br />
            &nbsp;&nbsp;to the consumer"
          </strong>
        </h1>
        <Home/>
      </div>
    </main>
  );
}

export default page;