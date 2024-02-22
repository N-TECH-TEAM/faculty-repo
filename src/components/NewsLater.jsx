import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const NewsLater = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ts2p16g',
            'template_ozo2a8y',
            form.current,
            '7eMxv6VX0s2ThWYN9')


            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            },
                (error) => {
                    console.log(error.text);
                });
    };
    return (
        <div className='justify-center items-center text-center py-20 '>

            <h2 className='md:text-xl font-bold text-gray-800'>subscribe to our newsletter </h2>
            <h3 className='text-gray-700 text-sm'>Enter your email adress and get our newsletters staright away</h3>

            <form ref={form} onSubmit={sendEmail}>
                <div className='flex justify-center items-center p-5 gap-2 md:gap-3'>

                    <div>
                        <input type='email'  name='user_email' placeholder='Email' className='border-2 p-2 border-gray-700 rounded-md px-4' />
                    </div>
                    <div className=''>
                        <button type='submit' value='send' className='bg-green-700 border-2 border-gray p-2 justify-center items-center text-center rounded-md'>subscribe</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default NewsLater