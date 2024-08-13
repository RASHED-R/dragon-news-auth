import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const HomeRight = () => {
    return (
        <div className="">
            <div className=" mb-9">
                <h4 className=" p-3 text-md font-bold">Login With</h4>

                <div className=" flex flex-col gap-3">
                    <Link> <button className=" flex items-center gap-2 justify-center w-full border rounded-lg p-2 hover:border-blue-500 hover:text-blue-500"> <FaGoogle></FaGoogle> Login with Google</button></Link>
                    <Link> <button className=" flex items-center gap-2 justify-center w-full border rounded-lg p-2 hover:border-blue-500 hover:text-blue-500"> <FaGithub></FaGithub> Login with Github</button></Link>
                </div>
            </div>
            <div className=" mb-9">
                <h4 className=" p-3 text-md font-bold">Finds On</h4>

                <div className=" flex flex-col">
                    <Link> <button className=" flex items-center gap-2 w-full border rounded-t-lg p-2 hover:border-blue-500 hover:text-blue-500"> <span className=" w-7 h-7 rounded-full bg-slate-200 flex justify-center items-center text-blue-500"><FaFacebook></FaFacebook></span> FaceBook</button></Link>
                    <Link> <button className=" flex items-center gap-2 w-full border border-t-0 border-b-0 p-2 hover:border-blue-500 hover:text-blue-500"> <span className=" w-7 h-7 rounded-full bg-slate-200 flex justify-center items-center text-blue-500"><FaTwitter></FaTwitter></span>Twitter</button></Link>
                    <Link> <button className=" flex items-center gap-2 w-full border rounded-b-lg p-2 hover:border-blue-500 hover:text-blue-500"> <span className=" w-7 h-7 rounded-full bg-slate-200 flex justify-center items-center text-rose-400"><FaInstagram></FaInstagram></span>InstaGram</button></Link>
                </div>
            </div>
            <div className=" bg-slate-200 p-3">
                <h4 className=" p-3 text-md font-bold">Q-Zone</h4>

                <div className=" flex flex-col">
                    <img src="/src/assets/assets/qZone1.png" alt="" />
                    <img src="/src/assets/assets/qZone2.png" alt="" />
                    <img src="/src/assets/assets/qZone3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeRight;