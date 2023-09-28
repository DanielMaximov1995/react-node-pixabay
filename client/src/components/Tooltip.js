
const Tooltip = (props) => {
    const {title , classes , children } = props

    let className = `group-hover:z-high rounded-sm absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 ${classes} group-hover:opacity-100 transition-all rounded  bg-accent  mx-auto hidden md:inline-block min-w-max`

    return (
        <div className='justify-center relative group transition-all'>
            <div className='mx-2.5 group-hover:-mb-1 -mb-2 transition-all'>
                {children}
            </div>
                <div id='tooltip' className={className}>
                    <span className='text-white px-2'>{title}</span>
                    <div className='h-2 absolute bottom-full right-[45%] border-x-4 border-x-transparent border-b-[8px] border-accent'></div>
                </div>
        </div>

    )
}
export default Tooltip