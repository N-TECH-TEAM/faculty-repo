// import React, { useState } from 'react'
// import { images } from '../layouts'
// import { auth } from '../config/firebase'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//     const [login, setLogin] = useState("false")

//     const history = useNavigate()

//     const handleSubmit = (e, type) => {
//         e.preventDefault()
//         const email = e.target.email.value
//         const password = e.target.password.value

//         if (type === "signup") {

//             createUserWithEmailAndPassword(auth, email, password)
//                 .then((data) => {
//                     console.log(data, "authData")
//                     history("/page")
//                 })

//                 .catch((err) => {
//                     alert(err.code);
//                     setLogin(true);
//                 });

//         } else {

//             signInWithEmailAndPassword(auth, email, password)
//                 .then((data) => {
//                     console.log(data, "authData")
//                     history("/page")
//                 })
//                 .catch((err) => {
//                     alert(err.code);
//                     setLogin(true);
//                 });

//         }

//     }

//     const handleReset = () => {
//         history("/reset")
//     }

//     return (

//         <div className='bg-green-600'>
//             <div className='flex flex-col p-10 md:flex-row md:p-20 justify-center items-center'>


//                 <img src={images.nuesa} alt='' className='w-[30%] md:w-[30%] p-4' />


//                 <div className='bg-gray-200 p-10 md:p-20 rounded-3xl'>
//                 <h1 className='flex text-orange-400 my-2 font-bold justify-center items-center'>UNIABUJA CHAPTER</h1>
//                     <div className='flex  justify-center items-center gap-5'>
//                         <div onClick={() => setLogin(false)} className='bg-orange-400  p-2 text-sm text-white rounded-md hover:bg-white hover:text-orange-400 cursor-pointer font-semibold'>signUp</div>
//                         <div onClick={() => setLogin(true)} className='bg-orange-400  p-2 text-sm text-white rounded-md hover:bg-white hover:text-orange-400 cursor-pointer font-semibold'>signIn</div>
//                     </div>

//                     <h1 className='text-orange-400 font-bold w-[30%] m- p-2 rounded-lg'>{login ? "SignIn" : "SignUp"}</h1>
//                     <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
//                         <div className='flex flex-col'>
//                             <label className='capitalize text-sm py-1'>
//                                 Email
//                             </label>
//                             <input name='email' placeholder='your Email' className='border-2 rounded-lg  p-3 flex 
//                                 focus:outline-none border-orange-400 dark:bg-gray-white'
//                             />
//                         </div>
//                         <div className='flex flex-col'>
//                             <label className='capitalize text-sm py-1'>
//                                 Password
//                             </label>
//                             <input type='text' name='password' placeholder='input password' className='border-2 rounded-lg  p-3 flex 
//                                 focus:outline-none border-orange-400 dark:bg-gray-white'
//                             />

//                         </div>
//                         <p onClick={handleReset} className='text-sm cursor-pointer'>Forgot Password?</p>
//                         <div className='flex gap-5 m-3 justify-center items-center '>
//                             <button className='text-white bg-orange-400 py-1.5 px-16 rounded-md hover:bg-white hover:text-orange-400 cursor-pointer font-semibold'>{login ? "signin" : "signup"}</button>
//                         </div>
//                     </form>


//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login
