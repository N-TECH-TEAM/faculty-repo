import React from 'react'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail } from 'firebase/auth'
import { images } from '../layouts'

const ForgetPassword = () => {
    const history = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const emailVal = e.target.email.value
        sendPasswordResetEmail(auth, emailVal).then(data => {
            alert("Check your gmail")
            history("/")
        }).catch(err => {
            alert(err.code)

        })
    }

    return (
        <div className='bg-green-600 h-screen '>
            <div className='flex flex-col p-20 justify-center items-center '>
                <img src={images.nuesa} alt='' className='w-32' />

                <div className='flex flex-col gap-5 justify-center items-center' >
                    <h1 className='font-bold m-5 text-white'>Reset your Password</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='flex justify-center items-center gap-2'>
                        <input name='email' placeholder='your Email' className='w-full text-sm border-2 rounded-lg  p-3 px-10 flex 
                                focus:outline-none border-orange-400 '
                            />
                        <button className='bg-orange-400 text-white p-3 rounded-lg hover:bg-white hover:text-orange-400'>Reset</button>
                            </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ForgetPassword