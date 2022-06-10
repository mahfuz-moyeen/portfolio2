import React from 'react';
import { motion } from "framer-motion";
import TitleBar from '../TitleBar/TitleBar';
import { FaUser } from 'react-icons/fa';
import { MdOutlineCall, MdLocationPin, MdAlternateEmail } from 'react-icons/md';
import Social from '../Social/Social';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const Contact = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit =  data => {
        console.log(data);
        // fetch('/contact', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         toast.success('Your message send  successfully')
        //         reset();
        //     })
        toast.success('Your message send  successfully')
        reset()

    }

    return (
        <div className="mt-5 md:mt-0 md:min-h-screen flex bg-base-200 justify-center items-center">
            <motion.div
                initial={{ scale: 0, rotate: 270 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <div className="w-11/12 h-[550px] md:w-[35rem] md:h-[50rem] lg:w-[70rem] lg:h-[35rem] rounded-xl mx-auto bg-neutral overflow-y-auto">
                    <div>
                        <div className='text-center my-5' >
                            <p className='md:text-lg'>Feel Free To Contact Me Anytimes</p>
                            <h1 className="text-4xl font-bold text-gray-200 my-3">
                                My <span className='text-primary'>Contact</span>
                            </h1>
                            <TitleBar />
                        </div>


                    </div>

                    <div className='w-10/12 lg:w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2'>

                        <div className="card rounded lg:rounded-md flex-shrink-0 bg-transparent w-full max-w-md">
                            <div className="card-body text-left">
                                <h1 className='text-center text-2xl text-gray-100'>Contact Info</h1>
                                <p className='text-center text-gray-300'>Feel free to contact me!</p>

                                <div className='flex flex-col md:flex-row items-center text-center md:text-left pt-5 md:pt-0'>
                                    <FaUser className='w-10 h-10 text-primary' />
                                    <div className='p-2'>
                                        <h1 className='font-semibold text-white'>Name</h1>
                                        <p className='text-primary'>Mahfuz Zahan Moyeen</p>
                                    </div>
                                </div>

                                <div className='flex flex-col md:flex-row items-center text-center md:text-left'>
                                    <MdLocationPin className='w-10 h-10 text-primary' />
                                    <div className='p-2'>
                                        <h1 className='font-semibold text-white'>Location</h1>
                                        <p className='text-primary'>Rajshahi, bangladesh</p>
                                    </div>
                                </div>

                                <div className='flex flex-col md:flex-row items-center text-center md:text-left'>
                                    <MdOutlineCall className='w-10 h-10 text-primary' />
                                    <div className='p-2'>
                                        <h1 className='font-semibold text-white'>Call Me</h1>
                                        <a href='tel:1703099425' className='text-primary'>( +880 )1703099425</a>
                                    </div>
                                </div>

                                <div className='flex flex-col md:flex-row items-center text-center md:text-left'>
                                    <MdAlternateEmail className='w-10 h-10 text-primary' />
                                    <div className='p-2'>
                                        <h1 className='font-semibold text-white'>Email Me</h1>
                                        <a
                                            href='mailto: mahfuzmoyeen01@gmail.com' className='text-primary'>mahfuzmoyeen01@gmail.com</a>
                                    </div>
                                </div>
                                <Social />
                            </div>
                        </div>

                        <div className="card rounded border-2 lg:rounded-md flex-shrink-0 bg-transparent w-full max-w-md">
                            <div className="card-body">
                                <h1 className='text-center text-2xl text-gray-100'>Contact me</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='flex flex-col lg:flex-row gap-2 justify-between'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-gray-300">Name</span>
                                            </label>
                                            <input type="text" placeholder="Your Name here" className="input input-bordered"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'name is Required'
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-gray-300">Subject</span>
                                            </label>
                                            <input type="text" placeholder="Your Subject" className="input input-bordered"  {...register("subject", {
                                                required: {
                                                    value: true,
                                                    message: 'Subject is Required'
                                                }
                                            })} />
                                            <label className="label">
                                                {errors.subject?.type === 'required' && <span className="label-text-alt text-red-500">{errors.subject.message}</span>}
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-gray-300">Email</span>
                                        </label>
                                        <input type="email" placeholder="Your email" className="input input-bordered"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'email is Required'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-gray-300">Message</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered" placeholder="Your message"
                                            {...register("message", {
                                                required: {
                                                    value: true,
                                                    message: 'message is Required'
                                                },
                                                maxLength: {
                                                    value: 250,
                                                    message: 'You use maximum 250 characters'
                                                }
                                            })}
                                        ></textarea>
                                        <label className="label">
                                            {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}

                                            {errors.message?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <button type='submit' className="btn block mx-auto btn-primary">Send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default Contact;