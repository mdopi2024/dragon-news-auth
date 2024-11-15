
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
     const {createNewUser,setUser}=useContext(AuthContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
    const form =new FormData(e.target)
    const name= form.get('name')
    const photo= form.get('photo')
    const email= form.get('email')
    const password= form.get('password')
    createNewUser(email,password)
    .then(result => {
       setUser(result.user)
    }).catch(error=>{
        console.log(error.message)
    })
    }

    return (

            <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">

                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-none">Registser</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Already Have An Account ? <Link to='/auth/login' className="text-red-500">Login</Link></p>
            </div>
        </div>
      
    );
};

export default Register;