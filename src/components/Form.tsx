import Addons, { SelectedAddons } from './Addons';
import Info from './Info'
import SelectPlans from './SelectPlans';
import Steps from './Steps'
import { useState } from "react";
import Summary from './Summary';

type activeForm = {
    active: string;
    index: number
}
export type plans = {
    name: string;
    price: number;
}
const Form = () => {
    //Total Forms
    const forms = ['your info', 'select plan', 'add-ons', 'summary'];
    //Selected Form
    const [activeForms, setActiveForms] = useState<activeForm>({
        active: 'your info',
        index: 0
    });
    //Selected Plans
    const [selected, setSelected] = useState<plans>({
        name: 'arcade',
        price: 90
    });
    //Selected Addons
    const [selectedAddons, setSelectedAddons] = useState<SelectedAddons>({
        service: {
            price: 1,
            isChecked: false
        },
        storage: {
            price: 2,
            isChecked: false
        },
        profile: {
            price: 2,
            isChecked: false
        },
    });
    //Performing Function for Addons
    function handleCheck(s: keyof SelectedAddons) {
        setSelectedAddons(prevState => {
            const updatedAddons = {
                ...prevState,
                [s]: {
                    ...prevState[s],
                    isChecked: !prevState[s].isChecked
                }
            };
            return updatedAddons;
        });
    }
    //Handling next form type
    function handleNext() {
        const idx = activeForms.index + 1;
        if (forms[idx] !== undefined) {
            setActiveForms({ active: forms[idx], index: idx });
        }
    }
    //Handling prev form type
    function handlePrev() {
        const idx = activeForms.index - 1;
        if (forms[idx] !== undefined) {
            setActiveForms({ active: forms[idx], index: idx });
        }
    }
    return (
        <div className='form-container flex bg-white rounded-xl w-[60%] h-[30rem] shadow-sm p-3'>
            <div className='h-full basis-[35%] relative'>
                <img src="/images/bg-sidebar-desktop.svg" className='h-full w-full object-cover rounded-lg' alt="Illustration of a sidebar" />
                <div className="step-indicator absolute flex flex-col gap-4 top-4 left-3">
                    <Steps stepcount={1} desc='your info' activeForms={activeForms.active} />
                    <Steps stepcount={2} desc='select plan' activeForms={activeForms.active} />
                    <Steps stepcount={3} desc='add-ons' activeForms={activeForms.active} />
                    <Steps stepcount={4} desc='summary' activeForms={activeForms.active} />
                </div>
            </div>
            {activeForms.active === forms[0] && <Info handleNext={handleNext} />}
            {activeForms.active === forms[1] && <SelectPlans handleNext={handleNext} handlePrev={handlePrev} selected={selected.name} setSelected={setSelected} />}
            {activeForms.active === forms[2] && <Addons handleNext={handleNext} handlePrev={handlePrev} selectedAddons={selectedAddons} handleCheck={handleCheck} />}
            {activeForms.active === forms[3] && <Summary handlePrev={handlePrev} />}
        </div>
    )
}

export default Form
