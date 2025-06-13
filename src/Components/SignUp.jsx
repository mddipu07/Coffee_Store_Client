import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {

    const {createUser} = use(AuthContext);
    console.log(createUser);

   const handleSignUp = (e) =>{
         e.preventDefault()
         const form = e.target;
         const formData = new FormData(form);
        
        const {email, password, ...restFormData} = Object.fromEntries(formData.entries());

     



         createUser(email,password)
         .then((result) =>{
            console.log(result.user);

           const userProfile = {
            email,
            ...restFormData,
            creationTime: result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime
           }
            


            // save Profile info in the database
            fetch('https://coffee-store-server-theta-hazel.vercel.app/users',{
                method:"POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userProfile)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                     Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Account is Created",
  showConfirmButton: false,
  timer: 1500
});
                }
            })
         })
         .catch((error) =>{
            console.log(error);
         })

   }

    return (

    <div className="card bg-base-100 max-w-sm  mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Your Name" />
          <label className="label">Address</label>
          <input type="text" name="address" className="input" placeholder="Your Address" />
          <label className="label">Phone</label>
          <input type="text" name="phone" className="input" placeholder="Phone" />
          <label className="label">Photo URL</label>
          <input type="text" name="PhotoUrl" className="input" placeholder="Email" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
      </div>
    </div>
    );
};

export default SignUp;