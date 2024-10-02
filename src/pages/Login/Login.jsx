import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'))
        console.log(form.get('password'))

        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.user);
            })
        // console.log(email)
    }
    return (
        <>
            <Navbar></Navbar>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-auto mt-24">

                <form onSubmit={handleLogin} className="card-body">
                    <h3 className=" mb-4 text-lg font-bold text-center">Login your account</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">Login</button>
                    </div>

                    <p className="text-sm"><Link className=" underline  text-blue-600" to={'/register'}>Forget Password?</Link></p>
                    <p className="text-sm">Do not Have An Account? <    Link className=" underline  text-blue-600" to={'/register'}>Register</Link></p>
                </form>
            </div>
        </>

    );
};

export default Login;