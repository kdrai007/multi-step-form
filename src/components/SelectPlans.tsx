import { useState } from 'react'
import { plans } from './Form';

type Props = {
    handleNext: () => void;
    handlePrev: () => void;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<plans>>
}

const SelectPlans = ({ handleNext, handlePrev, selected, setSelected }: Props) => {

    const [active, setActive] = useState(false);
    return (
        <section className='flex flex-col justify-between mx-16 basis-[65%]'>
            <div className='flex flex-col mt-6 gap-6'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[2.2rem] font-bold text-marine-blue'>Select your plan</h1>
                    <p className='text-gray-400 text-sm '>You have option of monthly or yearly billing.</p>
                </div>
                <div className="flex flex-col">
                    <div className='flex gap-5'>
                        <div className={`bill-card ${selected === 'arcade' && 'active-card'}`} onClick={() => setSelected({ name: 'arcade', price: 90 })}>
                            <img src="/images/icon-arcade.svg" alt="arcade svg" />
                            <div>
                                <h3 className='text-lg font-semibold text-marine-blue'>Arcade</h3>
                                <p className='text-gray-400 text-sm'>$90/mo</p>
                                <small>2 months free</small>
                            </div>
                        </div>
                        <div className={`bill-card ${selected === 'advanced' && 'active-card'}`} onClick={() => setSelected({ name: 'advanced', price: 120 })}>
                            <img src="/images/icon-advanced.svg" alt="advanced svg" />
                            <div>
                                <h3 className='text-lg font-semibold text-marine-blue'>advanced</h3>
                                <p className='text-gray-400 text-sm'>$120/mo</p>
                                <small>2 months free</small>
                            </div>
                        </div>
                        <div className={`bill-card ${selected === 'pro' && 'active-card'}`} onClick={() => setSelected({ name: 'pro', price: 120 })}>
                            <img src="/images/icon-pro.svg" alt="pro svg" />
                            <div>
                                <h3 className='text-lg font-semibold text-marine-blue'>pro</h3>
                                <p className='text-gray-400 text-sm'>$150/mo</p>
                                <small>2 months free</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <span className={`text-sm ${active && 'text-gray-400'}`}>Monthly</span>
                    <label className="switch">
                        <input type="checkbox" className='invisible' onClick={() => setActive(!active)} />
                        <span className="slider"></span>
                    </label>
                    <span className={`text-sm ${!active && 'text-gray-400'}`}>Yearly</span>
                </div>
            </div>
            <div className='flex justify-between mb-4'>
                <button className='mt-12 px-5 py-2 rounded-md text-gray-400' onClick={handlePrev}>Go Back</button>
                <button className='mt-12 px-5 py-2 rounded-md bg-marine-blue text-white ' onClick={handleNext}>Next Step</button>
            </div>
        </section>
    )
}

export default SelectPlans