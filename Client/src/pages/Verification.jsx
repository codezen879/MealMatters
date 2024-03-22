import { useState } from 'react'
import { useForm } from 'react-hook-form'
//import { AxiosInstance } from 'axios'
//import { axiosAdvanced } from '../utils/index'

export default function Verification() {
    const [img, setImg] = useState();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    
    const submitValidationForm = async (data) => {
        console.log(data);
        
        // make the backend api call over here
        try {
            const res = await AxiosInstance
                                        .get('http://localhost:4000/api/get')
                                        .then(() => {
                                            console.log(res);
                                        })

            setImg(res.data.data.certificate);
        }
        catch (err) {
            console.log(err);
        }
        // to reset the form
        reset();
    }

    return (
        <main className="min-h-screen flex flex-col justify-center items-center gap-5">
            <div className='flex flex-col'>
                <form onSubmit={handleSubmit(submitValidationForm)}>
                    <div className='flex flex-col gap-3 [&>*]:border [&>*]:border-black [&>*]:p-2'>
                        <div className='flex flex-col items-start gap-1'>
                            <label htmlFor='id' className='font-bold text-xl'>Personal ID</label>
                            <input 
                                type='text'
                                className='bg-red-700'
                                placeholder='Enter Your ID'
                                id="personal-id"
                                {...register('personalId', {
                                    required: {
                                        value: true,
                                        message: 'Enter Your ID'
                                    },
                                })}
                            />
                            {errors.personalId && (
                                <span>{errors.personalId.message}</span>
                            )}
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <label htmlFor='password' className='font-bold text-xl'>Personal ID</label>
                            <input 
                                type='password'
                                className='bg-red-700'
                                placeholder='Enter Your Password'
                                id="password"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Enter your password'
                                    }
                                })}
                            />
                            {errors.password && (
                                <span>{errors.password.message}</span>
                            )}
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <button 
                                type='submit'
                                className='bg-red-700'
                                id="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <img 
                    src={img}
                    className='h-10 w-20'
                />
            </div>
        </main>
    )
}