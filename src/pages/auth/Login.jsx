const Login = () => {
  return (
    <>
      {" "}
      <img className="fixed" src="/jxB9GUOHTf2.webp" alt="" />
      <div className="flex flex-col h-screen items-center justify-end w-full">
        <div className="flex flex-col items-center w-[370px] space-y-2">
          <h3>Log in with your Instagram account</h3>
          <input
            className="p-4 w-full bg-[rgb(245,245,245)] rounded-[12px]"
            type="text"
            name=""
            id=""
            placeholder="Username, phone or email"
          />
          <input
            type="text"
            className="p-4 w-full bg-[rgb(245,245,245)] rounded-[12px]"
            name=""
            id=""
            placeholder="Password"
          />
          <button className="bg-black text-white p-4 w-full rounded-[12px]">
            Log in
          </button>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        {/* footer link */}
        <div className="flex justify-center items-center space-x-3 text-[12px] h-[70px] w-full">
          <span>© 2024 </span>
          <a href="">Threads Terms</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookies Policy</a>
          <a href="">Report a problem</a>
        </div>
      </div>
    </>
  );
};
export default Login;
