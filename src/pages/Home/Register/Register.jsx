import { Link } from "react-router-dom";
import Navbar from "../../../components/shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {

        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photoUrl');
        console.log(name, email, photoUrl, password)

        // console.log(email)
        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <>
            <Navbar></Navbar>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-auto mt-24">

                <form onSubmit={handleRegister} className="card-body">
                    <h3 className=" mb-4 text-lg font-bold text-center">Register your account</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photoUrl" type="text" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">Register</button>
                    </div>
                    <p className="text-sm">Already Have An Account? <Link className=" underline  text-blue-600" to={'/login'}>Login</Link></p>
                </form>
            </div>
        </>

    );
};

export default Register;