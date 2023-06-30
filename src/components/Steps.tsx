
type Props = {
    stepcount: number;
    desc: string;
    activeForms: string;
}

const Steps = ({ stepcount, desc, activeForms }: Props) => {
    return (
        <div className='step-item flex items-center gap-3'>
            <button className={`step-number text-white rounded-full border border-white px-2 py-[1px] ${activeForms === desc && 'bg-light-blue text-black'}`}>{stepcount}</button>
            <div className='step-details uppercase'>
                <p className='step-name text-gray-400 text-xs'>Step {stepcount}</p>
                <strong className='step-title text-white font-semibold text-sm'>{desc}</strong>
            </div>
        </div>
    )
}

export default Steps