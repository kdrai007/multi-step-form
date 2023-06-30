type Props = {
    handleNext: () => void;
    handlePrev: () => void;
    selectedAddons: SelectedAddons;
    handleCheck: (s: keyof SelectedAddons) => void;
}
interface Addon {
    name: string;
    price: number;
    isChecked: boolean;
}

export interface SelectedAddons {
    service: Addon;
    storage: Addon;
    profile: Addon;
}

const Addons = ({ handleNext, handlePrev, selectedAddons, handleCheck }: Props) => {

    return (
        <section className='flex flex-col justify-between mx-16 basis-[65%]'>
            <div className='flex flex-col mt-6 gap-6'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[2.2rem] font-bold text-marine-blue'>Pick add-ons</h1>
                    <p className='text-gray-400 text-sm '>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className={`addons-card ${selectedAddons.service.isChecked && 'border-[1.5px] border-purplish-blue'}`}>
                        <div className='flex items-center gap-5 '>
                            <input type="checkbox" className='w-[18px] h-[18px]' onChange={() => handleCheck("service")} />
                            <div>
                                <h3 className='text-lg font-semibold text-marine-blue'>Online service</h3>
                                <p className='text-gray-400 text-sm'>Access to multiplayer games</p>
                            </div>
                        </div>
                        <p className='text-purplish-blue'>+$<span>1</span>/mo</p>
                    </div>
                    <div className={`addons-card ${selectedAddons.storage.isChecked && 'border-[1.5px] border-purplish-blue'}`}>
                        <div className='flex items-center gap-5 '>
                            <input type="checkbox" className='w-[18px] h-[18px]' onChange={() => handleCheck("storage")} />
                            <div>
                                <h3 className='text-lg font-semibold text-marine-blue'>Larger storage</h3>
                                <p className='text-gray-400 text-sm'>Extra 1TB of cloud save</p>
                            </div>
                        </div>
                        <p className='text-purplish-blue'>+$<span>2</span>/mo</p>
                    </div>
                    <div className={`addons-card ${selectedAddons.profile.isChecked && 'border-[1.5px] border-purplish-blue'}`}>
                        <div className='flex items-center gap-5 '>
                            <input type="checkbox" className='w-[18px] h-[18px]' onChange={() => handleCheck("profile")} />
                            <div>
                                <h3 className='text-lg font-semibold text-marine-blue'>Customizable Profile</h3>
                                <p className='text-gray-400 text-sm'>Custom theme on your profile</p>
                            </div>
                        </div>
                        <p className='text-purplish-blue'>+$<span>2</span>/mo</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mb-4'>
                <button className='mt-12 px-5 py-2 rounded-md text-gray-400' onClick={handlePrev}>Go Back</button>
                <button className='mt-12 px-5 py-2 rounded-md bg-marine-blue text-white ' onClick={handleNext}>Next Step</button>
            </div>
        </section>
    )
}

export default Addons