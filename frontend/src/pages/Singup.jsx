import CheckBox from "../components/GenderCheckBox";

const Singup = () => {
  return (
    <div className="flex flex-col justify-center min-w-96 mx-auto text-white">
      <div className=" w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-center text-3xl text-gray-400 font-semibold">
          Register
          <span className="text-blue-600"> ChatApp</span>
        </h1>
        <form>
          <div>
            <lavel className="label p-2">FullName</lavel>
            <input
              type="text"
              placeholder="enter fullname"
              className="input w-full input-bordered h-10"
            ></input>
          </div>
          <div>
            <lavel className="label">Username</lavel>
            <input
              type="text"
              placeholder="enter username"
              className="input w-full input-bordered h-10 "
            ></input>
          </div>
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="enter password"
              className="input w-full input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span>Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <CheckBox></CheckBox>
          <a className="text-sm hover:underline hover:text-blue-600 inline-block mt-2 ">
            Do have an acount
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;
