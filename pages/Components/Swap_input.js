

const Swap_item = () => {
    return (
        <div className=" rounded-3xl relative bg-accent-light border hover:border-accent-inputhover" id="swap-input">
            <div className="flex p-4">
                {/* Dropdown */}
                <button className="h-10 px-4 rounded-2xl bg-white shadow-lg mr-4 transform transition duration-300 ease-in-out hover:bg-accent-border hover:scale-95">

                    <span className="flex justify-center items-center">
                        <div className="flex justify-center items-center">
                          <div className="img mr-4 w-5 h-5">
                            <img className="w-5 h-5" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/48/Ethereum-ETH-icon.png" alt="ethereum" />
                          </div>
                        <span>ETH</span>
                        </div>

                        <svg className="ml-4" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-dRaagA bgZQFD"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="black" stroke-width="1.3"></path></svg>
                    </span>
                </button>

                {/* Input */}
                <input className="flex-auto text-right bg-accent-light font-semibold text-xl text-black placeholder-accent-hover::placeholder " placeholder="0.0" type="text" id="" />

            </div>
        </div>
    )
}

export default Swap_item
