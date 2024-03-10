
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div 
        className="w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-400 text-center">Login  
           <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text">Username</span>
                </label>
                <input 
                    placeholder="enter username"
                    type="text"
                    className="input w-full input-bordered h-10">
                </input>
            </div>
            <div>
                <label className="label p-2">
                    <span>Password</span>
                </label>
                <input 
                    type="password" 
                    placeholder="enter password" 
                    className="w-full input input-bordered h-10">
                </input>
            </div>
            
            <a href='#' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
                Dont have an acount?
            </a>
            <div>
                <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login