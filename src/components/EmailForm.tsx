import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

type Inputs = {
  name: string;
  email: string;
  message: string;
}


export default function EmailForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
    });
    
    const responseData = await response.json();

    if (responseData === "Message sent successfully.") {
			toast.success('Message sent successfully.')
    } else {
			toast.error('Message not sent.')
    }

    reset();
    setLoading(false)
  }

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
		className='bg-white p-4 rounded-xl text-gray-900 flex flex-col gap-4 shadow-inner'
    >
      <div className='flex flex-col gap-2'>
        <label>
          Name:
        </label>
				<input type="text" {...register("name", { required: true })} className='p-2 border bg-gray-100 shadow-inner'/>
				{errors.name && <span className='rounded text-red-500'>Please share you name.</span>}
      </div>
      <div className='flex flex-col gap-2'>
        <label>
          Email:
        </label>
				<input type="email" {...register("email", { required: true })} className='p-2 border bg-gray-100 shadow-inner'/>
				{errors.email && <span className='rounded text-red-500'>Please don&apos;t forget your email.</span>}
      </div>
      <div className='flex flex-col gap-2'>
        <label>
          Message:
        </label>
				<textarea {...register("message", { required: true })} className='p-2 border bg-gray-100 shadow-inner'/>
				{errors.message && <span className='rounded text-red-500'>Please include a message.</span>}
      </div>
      <button 
      className='bg-gradient-to-r text-white from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 ease-in-out duration-200 shadow-lg rounded py-2'
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}
