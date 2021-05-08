

const Swap_item = () => {
    return (
        <div className=" rounded-xl relative bg-accent-light border hover:border-accent-inputhover" id="swap-input">
            <div className="flex flex-wrap md:flex-nowrap">
                {/* Dropdown */}
                <button className="m-2 md:m-4 md:mr-4 h-10 px-2 md:px-4 rounded-xl md:rounder-2xl bg-white shadow-lg  transform transition duration-300 ease-in-out hover:bg-accent-border hover:scale-95">

                    <span className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          <div className="img mr-2 w-5 h-5 select-none">
                            <img className="w-5 h-5" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/48/Ethereum-ETH-icon.png" alt="ethereum" />
                          </div>
                        <span>ETH</span>
                        </div>

                        <svg className="ml-2" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-dRaagA bgZQFD"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="black" stroke-width="1.3"></path></svg>
                    </span>
                </button>

                {/* Input */}
                <input className="m-4 w-full text-left bg-accent-light font-semibold text-lg lg:text-xl text-black placeholder-accent-hover::placeholder md:m-0 md:mr-4 md:text-right " placeholder="0.0" type="text" id="" />

            </div>
        </div>
    )
}

export default Swap_item
