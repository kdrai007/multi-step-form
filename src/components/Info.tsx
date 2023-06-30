import React, { useState } from 'react'

type Input = {
    name: string;
    email: string;
    number: string;
}
type Props = {
    handleNext: () => void;
}
type Valid = {
    myName: boolean;
    myEmail: boolean;
    myNumber: boolean;

}

const Info = ({ handleNext }: Props) => {
    const [Inputs, setInputs] = useState<Input>({
        name: "",
        email: "",
        number: ""
    })
    const [isValid, setIsValid] = useState<Valid>({
        myName: true,
        myEmail: true,
        myNumber: true
    })
    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...Inputs,
            [name]: value
        })
    }
    function isInputEmpty() {
        const isNameValid = Inputs.name.length !== 0;
        const isEmailValid = Inputs.email.length !== 0;
        const isNumberValid = Inputs.number.length !== 0;
        setIsValid({ ...isValid, myName: isNameValid, myEmail: isEmailValid, myNumber: isNumberValid });
        return isNameValid && isEmailValid && isNumberValid;
    }
    function validateEmail(email: string) {
        // Regular expression pattern to check email validity
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function handleCheck() {
        if (isInputEmpty()) {
            if (!validateEmail(Inputs.email)) {
                setIsValid({ ...isValid, myEmail: false });
                return false;
            }
            return true;
        } else {
            return false;
        }
    }
    return (
        <section className='flex flex-col justify-between mx-16 basis-[65%]'>
            <div className='flex flex-col mt-6'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[2.2rem] font-bold text-marine-blue'>Personal info</h1>
                    <p className='text-gray-400 text-sm '>Please provide your name, email address, and phone number.</p>
                    <form className='flex flex-col mt-5 gap-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='text-sm text-marine-blue mb-1'>Name</label>
                            <input type="text" id='name' name='name' className={`inputs ${!isValid.myName && 'border-red-500 bg-red-200'}`} placeholder='John Doe' onChange={handleInputs}
                                value={Inputs.name} />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email-ad" className='text-sm text-marine-blue mb-1'>Email</label>
                            <input type="email" id='email-ad' name='email' className={`inputs ${!isValid.myEmail && 'border-red-500 bg-red-200'}`} placeholder='abc12@example.com' onChange={handleInputs} value={Inputs.email} />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="number" className='text-sm text-marine-blue mb-1'>Phone Number</label>
                            <input type="tel" id='number' name='number' className={`inputs ${!isValid.myNumber && 'border-red-500 bg-red-200'}`} placeholder='e.g +1234 567 890' onChange={handleInputs} value={Inputs.number} />
                        </div>
                    </form>
                </div>
            </div>
            <button className='mt-12 px-5 py-2 rounded-md bg-marine-blue text-white self-end  mb-4'
                onClick={() => { handleCheck() && handleNext() }}>
                Next Step</button>
        </section>

    )
}

export default Info