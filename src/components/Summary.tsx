type Props = {
    handlePrev: () => void;
}


const Summary = ({ handlePrev }: Props) => {
    return (
        <section className='flex flex-col justify-between mx-16 basis-[65%]'>
            <div className='flex flex-col mt-6 gap-6'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[2.2rem] font-bold text-marine-blue'>Finishing up</h1>
                    <p className='text-gray-400 text-sm'>Double-check everything looks OK before confirming.</p>
                </div>

            </div>
            <div className='flex justify-between mb-4'>
                <button className='mt-12 px-5 py-2 rounded-md text-gray-400' onClick={handlePrev}>Go Back</button>
                <button className='mt-12 px-5 py-2 rounded-md bg- text-white bg-purplish-blue '>  Confirm</button>
            </div>
        </section>
    )
}

export default Summary