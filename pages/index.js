import Head from 'next/head'

import { ArrowSmDownIcon, CogIcon, DotsHorizontalIcon, SunIcon } from '@heroicons/react/outline/';

import Swap_item from "./Components/Swap_input"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Uniswap Exchange</title>
        <meta name="description" content="Uniswap clone" />
        <link rel="icon" href="/uniswap.ico" />
      </Head>

    <div className="app__wrapper h-screen overflow-hidden">
  
      <nav className="md:flex md:items-center md:justify-evenly">

        {/* Logo */}

        <div className="select-none flex w-full justify-center my-8 md:w-auto md:inline-flex md:ml-8 md:my-4">
          <a href="#" className="transform transition duration-150 hover:-rotate-3	">
          <img width="48px" src="https://app.uniswap.org/static/media/logo.4a50b488.svg" alt="logo" />
          </a>
        </div>

        {/* Center items */}

        <div className="flex items-center justify-center rounded-2xl z-10 md:flex-grow md:justify-self-center">
          <div className="center-items flex items-center justify-center rounded-2xl p-1 space-x-2 md:space-x-4 bg-white">
            <a className="active" href="#">Swap</a>
            <a className="" href="#">Pool</a>
            <a className="" href="#">Vote</a>
            <a className="flex hover:underline" href="#">Charts<span className="ml-1 text-xs">↗</span></a>
          </div>
        </div>
        
        {/* Right items */}

        <div className="absolute bottom-0 w-full p-4 flex justify-between items-center md:items-center md:w-auto md:justify-end md:bg-none md:static ">
          <div className="md:mr-2">
            <button className="text-primary-dark select-none bg-primary-light p-2 text-base cursor-pointer rounded-xl font-semibold border-2 border-accent-bg hover:border-primary-border">Connect to a wallet</button>
          </div>
          <div className="flex space-x-2">
            <div className="">
              <button>
                <SunIcon className=" h-8 w-8 text-black bg-accent-border p-1 rounded-lg hover:bg-accent-hover" />
              </button>
            </div>
            <div className="">
              <button>
                <DotsHorizontalIcon className="h-8 w-8 text-black bg-accent-border p-1 rounded-lg hover:bg-accent-hover" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main container */}

      <div className="main__container w-full flex items-center justify-center flex-grow p-4">
        <div className="main__wrapper max-w-lg w-full bg-white rounded-3xl mt-4 ">

          {/* Main container -- Header */}
          <div className="head px-5 pt-4 pb-2">
            <div className="flex items-center justify-between">
              <div className=" font-semibold text-accent-gray">Swap</div>
              <div className="">
                <button>
                  <CogIcon className="h-8 w-8 text-accent-gray p-1"/>
                </button>
              </div>
            </div>
          </div>

          {/* Main container -- swap page */}
          <div className="p-2">
            <div className="flex flex-col">
              <div className="">
                <div className="swap__input">
                  <Swap_item />
                </div>

                {/* Swap Arrow */}
                <div className="relative flex w-full justify-center -mt-2 -mb-2 z-10">
                  <ArrowSmDownIcon className="h-8 w-8 bg-accent-bg rounded-full border-4 border-white cursor-pointer"/>
                </div>
                <div className="swap__output">
                  <Swap_item/>
                </div>
                
              </div>


              { /* Connect wallet -- Button  */}
              <button className="p-4 mt-4 select-none text-primary-dark bg-primary-light text-base cursor-pointer rounded-3xl font-semibold w-full transform transition duration-300 ease-in-out hover:scale-95" >Connect Wallet</button>

            </div>
          </div>


        </div>
      </div>

    </div>   

  </div>
  )
}
