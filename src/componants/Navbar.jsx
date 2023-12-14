import React, { useState } from 'react'


const Navbar = () => {
    const [toggle, setToggle] = useState(true)

    return <>
        {/* navbar start */}
        <div className='z-50' >
            <div className=''>
                <div className='w-full bg-slate-950 ' >
                    <div className='flex text-center justify-between p-3 mx-12'>
                        <div className='flex items-center '>
                            <img className='pe-4 h-8 md:h-10 lg:h-10 bg-white px-2' src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg" alt="" />

                            <div className='  text-center ms-[2rem] hidden lg:block '>
                                <a className='text-white px-3 py-3' href="">Payment</a>
                                <a className='text-white px-3 py-3' href="">Payroll</a>
                                <a className='text-white px-3 py-3' href="">Credit</a>
                                <a className='text-white px-3 py-3' href="">Banking+</a>
                                <a className='text-white px-3 py-3' href="">Support</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src="https://razorpay.com/build/browser/static/indian-flag.a7d181aa.svg" alt="" />
                            <button className='border border-white text-white text-center hidden lg:block  p-2 px-2 font-bold  pe-3   rounded'>Login
                            </button>
                            <div className='hidden lg:block group '>
                                <div>
                                    <button className='border bg-white text-center   hidden lg:block  p-2 px-2 font-bold  pe-3   rounded'>
                                        Sign Up
                                    </button>

                                </div>
                            </div>

                            <button onClick={e => setToggle(!toggle)} className='text-center text-white lg:hidden'><i class={toggle ? " bi text-3xl bi-list " : "text-3xl bi-x-lg"}></i>  </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative z-[61]'>
                <div className={!toggle ? " flex flex-col right-0 top-4 w-full bg-slate-50 text-2xl absolute lg:hidden text-center ms-[2rem]" : " hidden "}>
                    <a className='p-4 hover:bg-slate-200' href="">Home</a>
                    <a className='p-4 hover:bg-slate-200' href="">Service</a>
                    <a className='p-4 hover:bg-slate-200' href="">Portfolio</a>
                    <a className='p-4 hover:bg-slate-200' href="">Blog</a>
                    <a className='p-4 hover:bg-slate-200' href="">Pages</a>
                    <a className='p-4 hover:bg-slate-200' href="">About</a>
                </div>
            </div>
        </div >
        {/* navbar end */}

        {/* first page start */}

        <div className='bg-slate-950 clip pb-24' >
            <div className='grid lg:grid-cols-12 mx-16'>
                <div className='col-span-6  text-white 
                  py-14 md:py-12 lg:py-16 '>
                    <div className=''>
                        <div className='text-4xl sm:text-5xl md:text-[3rem] lg:text-[3rem] font-bold md:w-[70%]  lg:w-full '>
                            <p className='py-1 md:pt-6 lg:pt-6'>Power your finance,</p>
                            <p className='py-1'>grow your business</p>
                        </div>
                        <div className='w-8 h-1 my-10 bg-white'></div>
                        <p className='text-xl  md:w-[60%]  lg:w-[80%] my-3 text-gray-300'>
                            Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.
                        </p>

                        <div className=' my-8 md:my-12 lg:my-14 flex'>
                            <button className='bg-blue-600 group text-center p-3 px-5  pe-10 text-wite rounded'>Sign Up Now<i class="bi ps-1 group-hover:ps-3 absolute bi-arrow-right"></i>
                            </button>

                        </div>

                    </div>
                </div>
                <div className='col-span-6 lg:py-16 w-full '>
                    <img src="https://razorpay.com/build/browser/static/home-desktop.4a9233fc.jpg" alt="" />
                </div>
            </div>
        </div>

        {/* first page end */}

        {/* first second start */}
        <div className='bg-white' >
            <div className='mb-20 text-center flex-col flex items-center '>
                <div className='pt-16 lg:pb-5 text-3xl  font-bold'>
                    Accept Payments with Razorpay Payment Suite
                </div>
                <div className='w-10 h-1   bg-green-400'></div>

            </div>
            <div className='grid grid-cols-12 mx-16 border border-gray-300 rounded-lg'>
                <div className='col-span-12 md:col-span-8 lg:col-span-6    
                  py-10 md:py-10'>
                    <div className='px-10'>
                        <div className='text-2xl sm:text-3xl md:text-[1.8rem] lg:text-[2rem] font-bold  lg:w-full '>
                            <p className='py-1 md:pt-6 lg:pt-6'>
                                Supercharge your business with the all‑powerful
                                <span className='text-blue-500'> Payment Gateway</span>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> 100+ Payment Methods</p>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> Industry Leading Success Rate</p>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> Superior Checkout Experience</p>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> Easy to Integrate</p>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> Instant Settlements from day 1</p>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> In-depth Reporting and Insights</p>
                        </div>
                        <div className='flex mt-6'>
                            <button className='bg-blue-600 group text-center font-bold p-3 px-5  pe-10 text-white rounded'>Sign Up Now<i class="bi ps-1 group-hover:ps-3 absolute bi-arrow-right"></i>
                            </button>
                            <button className='text-center p-3 px-5  pe-10 text-wite rounded font-bold'>Know More </button>
                        </div>

                    </div>
                </div>
                <div className='hidden md:block lg:block col-span-12 md:col-span-4  lg:col-span-6  lg:h-full w-full md:h-80 md:mt-auto '>
                    <img className='w-full h-full rounded-lg' src="https://www.livemint.com/lm-img/img/2023/07/12/600x338/EM_1_1689162311042_1689162322691.png" alt="" />
                </div>
            </div>
        </div>
        {/* first second end */}

        {/* first third start */}
        <div>
            <div className="grid grid-cols-12 mx-16 gap-6 py-14 ">

                <div className='col-span-12    group hover:shadow-lg md:col-span-6 lg:col-span-4 relative '>
                    <i class="bi bi-arrow-down-left-circle-fill top-[10px] text-blue-700 right-[0] absolute text-5xl"></i>
                    <div className='bg-gray-100 h-64 cardClip p-3 rounded-lg'>
                        <p className='text-2xl pb-1 text-slate-800 font-bold'>
                            Payment Links
                        </p>
                        <div className='text-gray-500'>
                            <p className='py-4'>
                                Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                            </p>
                        </div>
                        <button className='text-blue-600 flex  items-center font-bold'>
                            Know More
                            <i className='bi-chevron-compact-right font-bold text-2xl'></i>
                        </button>
                    </div>

                </div>
                <div className='col-span-12  group hover:shadow-lg md:col-span-6 lg:col-span-4 relative '>
                    <i class="bi bi-wallet-fill top-[10px] text-blue-700 right-[0] absolute text-5xl"></i>
                    <div className='bg-gray-100 h-64 cardClip p-3 rounded-lg'>
                        <p className='text-2xl pb-1 text-slate-800 font-bold'>
                            Payment Pages
                        </p>
                        <div className='text-gray-500'>
                            <p className='py-4'>
                                Take your store online instantly with zero coding. Accept international & domestic payments
                            </p>
                        </div>
                        <button className='text-blue-600 flex  items-center font-bold'>
                            Know More
                            <i className='bi-chevron-compact-right font-bold text-2xl'></i>
                        </button>
                    </div>

                </div>
                <div className='col-span-12  group hover:shadow-lg md:col-span-6 lg:col-span-4 relative '>
                    <i class="bi bi-link-45deg top-[10px] text-blue-700 right-[0] absolute text-5xl"></i>
                    <div className='bg-gray-100 cardClip p-3 h-64 rounded-lg'>
                        <p className='text-2xl pb-1 text-slate-800 font-bold'>
                            Payment Buttons
                        </p>
                        <div className='text-gray-500'>
                            <p className='py-4'>
                                Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more
                            </p>
                        </div>
                        <button className='text-blue-600 flex  items-center font-bold'>
                            Know More
                            <i className='bi-chevron-compact-right font-bold text-2xl'></i>
                        </button>
                    </div>

                </div>
                <div className='col-span-12    group hover:shadow-lg md:col-span-6 lg:col-span-4 relative '>
                    <i class="bi bi-arrow-down-left-circle-fill top-[10px] text-blue-700 right-[0] absolute text-5xl"></i>
                    <div className='bg-gray-100 h-64 cardClip p-3 rounded-lg'>
                        <p className='text-2xl pb-1 text-slate-800 font-bold'>
                            Payment Links
                        </p>
                        <div className='text-gray-500'>
                            <p className='py-4'>
                                Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                            </p>
                        </div>
                        <button className='text-blue-600 flex  items-center font-bold'>
                            Know More
                            <i className='bi-chevron-compact-right font-bold text-2xl'></i>
                        </button>
                    </div>

                </div>
                <div className='col-span-12  group hover:shadow-lg md:col-span-6 lg:col-span-4 relative '>
                    <i class="bi bi-wallet-fill top-[10px] text-blue-700 right-[0] absolute text-5xl"></i>
                    <div className='bg-gray-100 h-64 cardClip p-3 rounded-lg'>
                        <p className='text-2xl pb-1 text-slate-800 font-bold'>
                            Payment Pages
                        </p>
                        <div className='text-gray-500'>
                            <p className='py-4'>
                                Take your store online instantly with zero coding. Accept international & domestic payments
                            </p>
                        </div>
                        <button className='text-blue-600 flex  items-center font-bold'>
                            Know More
                            <i className='bi-chevron-compact-right font-bold text-2xl'></i>
                        </button>
                    </div>

                </div>
                <div className='col-span-12  group hover:shadow-lg md:col-span-6 lg:col-span-4 relative '>
                    <i class="bi bi-link-45deg top-[10px] text-blue-700 right-[0] absolute text-5xl"></i>
                    <div className='bg-gray-100 cardClip p-3 h-64 rounded-lg'>
                        <p className='text-2xl pb-1 text-slate-800 font-bold'>
                            Payment Buttons
                        </p>
                        <div className='text-gray-500'>
                            <p className='py-4'>
                                Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more
                            </p>
                        </div>
                        <button className='text-blue-600 flex  items-center font-bold'>
                            Know More
                            <i className='bi-chevron-compact-right font-bold text-2xl'></i>
                        </button>
                    </div>

                </div>

            </div>
        </div>

        <div className='border  border-gray-300 bg-sky-300 mx-16 p-3 rounded-lg text-center'>
            <strong>Not sure which product to choose?</strong>
            <span className='text-gray-500'> Answer a few questions and we'll help you out</span>

            <strong className='text-blue-600'> Find me a product</strong>
            <i class="bi font-bold text-2xl text-blue-600 "></i>
        </div>

        {/* first third end */}

        {/*  four ppage start */}
        <div className='bg-slate-950 py-48  cardClip2 mt-10' >
            <div className='mb-20 text-center flex-col flex items-center '>
                <div className='pt-16 lg:pb-5 text-white text-3xl  font-bold'>
                    Explore RazorpayX powered Business Banking
                </div>
                <div className='w-10 h-1   bg-green-400'></div>

            </div>
            <div className='grid grid-cols-12 text-white mx-16 border-blue-600 border rounded-lg'>
                <div className='col-span-12 md:col-span-8 lg:col-span-6    
                  py-10 md:py-10'>
                    <div className='px-10'>
                        <div className='text-2xl sm:text-3xl md:text-[1.8rem] lg:text-[2rem] font-bold  lg:w-full '>
                            <p className='py-1 md:pt-6 lg:pt-6'>
                                Manage your company’s finances and supercharge your business banking with
                                {/* <span className='text-blue-500'> Payment Gateway</span> */}
                            </p>
                        </div>
                        <div className='mt-6'>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> Open a fully digital current account</p>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> Automate payables & compliment payments</p>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> Simplify and track spends with Corporate cards</p>
                            <p> <i className='bi-check text-2xl me-2 text-green-500'></i> View financial insights at a glance</p>
                        </div>
                        <div className='flex mt-6'>
                            <button className='bg-blue-600 group text-center font-bold p-3 px-5  pe-10 text-white rounded'>Sign Up Now<i class="bi ps-1 group-hover:ps-3 absolute bi-arrow-right"></i>
                            </button>
                            <button className='text-center p-3 px-5  pe-10 text-wite rounded font-bold'>Know More </button>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block lg:block col-span-12 md:col-span-4  lg:col-span-6  lg:h-full w-full md:h-80 md:mt-auto '>
                    <img className='w-full h-full rounded-lg' src="https://razorpay.com/build/browser/static/payment-suite.c8ef898b.png" alt="" />
                </div>
            </div>

            <div>
                <div className="grid grid-cols-12 mx-16 gap-6 py-14 ">

                    <div className='col-span-12 group border-yellow-300  md:col-span-6 lg:col-span-4 relative '>
                        <i class="bi bi-bank top-[10px] text-blue-700 right-[0] absolute text-5xl"></i>
                        <div className=' bg-slate-800 group hover:border border-slate-500  h-64 cardClip p-3 rounded-lg'>
                            <p className='text-2xl pb-1 text-white font-bold'>
                                Payment Links
                            </p>
                            <div className='text-gray-300'>
                                <p className='py-4'>
                                    Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                                </p>
                            </div>
                            <button className='text-blue-400 flex  items-center font-bold'>
                                Know More
                                <i className='bi-chevron-compact-right font-bold text-2xl'></i>
                            </button>
                        </div>

                    </div>
                    <div className='col-span-12 group border-yellow-300  md:col-span-6 lg:col-span-4 relative '>
                        <i class="bi bi-arrow-up-right-circle-fill top-[10px] text-blue-700 right-[0] absolute text-5xl"></i>
                        <div className=' bg-slate-800 group hover:border border-slate-500  h-64 cardClip p-3 rounded-lg'>
                            <p className='text-2xl pb-1 text-white font-bold'>
                                Payment Links
                            </p>
                            <div className='text-gray-300'>
                                <p className='py-4'>
                                    Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                                </p>
                            </div>
                            <button className='text-blue-400 flex  items-center font-bold'>
                                Know More
                                <i className='bi-chevron-compact-right font-bold text-2xl'></i>
                            </button>
                        </div>

                    </div>
                    <div className='col-span-12 group border-yellow-300  md:col-span-6 lg:col-span-4 relative '>
                        <i class="bi bi-wallet2 top-[10px] text-blue-700 right-[0] absolute text-5xl"></i>
                        <div className=' bg-slate-800 group hover:border border-slate-500  h-64 cardClip p-3 rounded-lg'>
                            <p className='text-2xl pb-1 text-white font-bold'>
                                Payment Links
                            </p>
                            <div className='text-gray-300'>
                                <p className='py-4'>
                                    Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately
                                </p>
                            </div>
                            <button className='text-blue-400 flex  items-center font-bold'>
                                Know More
                                <i className='bi-chevron-compact-right font-bold text-2xl'></i>
                            </button>
                        </div>

                    </div>


                </div>
            </div>

            <div className='border text-2xl py-4 mb-20 border-gray-300 bg-slate-900 mx-16 p-3 rounded-lg text-center'>
                <span className='text-white'> Check out the live demo to learn how RazorpayX works. </span>

                <strong className='text-blue-600'> No sign-up required!</strong>
                <i class="bi font-bold text-2xl text-blue-600 "></i>
            </div>

        </div>
        {/*  four page end */}

        {/* five page start */}
        <div className="grid grid-cols-12 mx-8 gap-6 py-14 ">

            <div className='col-span-12 group md:col-span-6 h-80 lg:col-span-4 relative  p-7  rounded-xl overflow-hidden'>

                <p className='text-5xl text-black font-bold pb-1 py-3'>
                    New in the <p className='text-blue-600'>Razorpay</p>
                    Product Suite
                </p>

            </div>
            <div className='col-span-12 group md:col-span-6 h-80 lg:col-span-4 relative bg-slate-100 p-7 border-blue-400 hover:border rounded-xl overflow-hidden'>
                <div className='h-14 w-14 rounded-full bg-blue-600 opacity-90 flex justify-center items-center'>
                    <i class="bi bi-megaphone text-white  text-3xl"></i>
                </div>
                <p className='text-2xl  pb-1 py-3'>
                    Instant Settlements
                </p>
                <div className='text-gray-700 mb-10'>
                    <p className=''>
                        Settle your customer payments within 10 seconds as soon your account is activated, even during holidays.
                    </p>
                </div>

                <a href="" className='group-hover:text-blue-400 text-xl pb-1 border-b-2 border-black group-hover:border-blue-400 font-bold '> Learn more<i className='bi rounded-lg ms-3 group-hover:text-yellow-400 bi-arrow-up-right'></i></a>
                {/* <img src={BgImg} className='absolute hidden group-hover:block blur-[0.3rem] right-[-3rem] bottom-[-2rem]' alt="" /> */}

            </div>
            <div className='col-span-12 group md:col-span-6 h-80 lg:col-span-4 relative bg-slate-100 p-7 border-blue-400 hover:border rounded-xl overflow-hidden'>
                <div className='h-14 w-14 rounded-full bg-blue-600 opacity-90 flex justify-center items-center'>
                    <i class="bi bi-megaphone text-white  text-3xl"></i>
                </div>
                <p className='text-2xl  pb-1 py-3'>
                    Instant Settlements
                </p>
                <div className='text-gray-700 mb-10'>
                    <p className=''>
                        Settle your customer payments within 10 seconds as soon your account is activated, even during holidays.
                    </p>
                </div>

                <a href="" className='group-hover:text-blue-400 text-xl pb-1 border-b-2 border-black group-hover:border-blue-400 font-bold '> Learn more<i className='bi rounded-lg ms-3 group-hover:text-yellow-400 bi-arrow-up-right'></i></a>
                {/* <img src={BgImg} className='absolute hidden group-hover:block blur-[0.3rem] right-[-3rem] bottom-[-2rem]' alt="" /> */}

            </div>
            <div className='col-span-12 group md:col-span-6 h-80 lg:col-span-4 relative bg-slate-100 p-7 border-blue-400 hover:border rounded-xl overflow-hidden'>
                <div className='h-14 w-14 rounded-full bg-blue-600 opacity-90 flex justify-center items-center'>
                    <i class="bi bi-megaphone text-white  text-3xl"></i>
                </div>
                <p className='text-2xl  pb-1 py-3'>
                    Instant Settlements
                </p>
                <div className='text-gray-700 mb-10'>
                    <p className=''>
                        Settle your customer payments within 10 seconds as soon your account is activated, even during holidays.
                    </p>
                </div>

                <a href="" className='group-hover:text-blue-400 text-xl pb-1 border-b-2 border-black group-hover:border-blue-400 font-bold '> Learn more<i className='bi rounded-lg ms-3 group-hover:text-yellow-400 bi-arrow-up-right'></i></a>
                {/* <img src={BgImg} className='absolute hidden group-hover:block blur-[0.3rem] right-[-3rem] bottom-[-2rem]' alt="" /> */}

            </div>
            <div className='col-span-12 group md:col-span-6 h-80 lg:col-span-4 relative bg-slate-100 p-7 border-blue-400 hover:border rounded-xl overflow-hidden'>
                <div className='h-14 w-14 rounded-full bg-blue-600 opacity-90 flex justify-center items-center'>
                    <i class="bi bi-megaphone text-white  text-3xl"></i>
                </div>
                <p className='text-2xl  pb-1 py-3'>
                    Instant Settlements
                </p>
                <div className='text-gray-700 mb-10'>
                    <p className=''>
                        Settle your customer payments within 10 seconds as soon your account is activated, even during holidays.
                    </p>
                </div>

                <a href="" className='group-hover:text-blue-400 text-xl pb-1 border-b-2 border-black group-hover:border-blue-400 font-bold '> Learn more<i className='bi rounded-lg ms-3 group-hover:text-yellow-400 bi-arrow-up-right'></i></a>
                {/* <img src={BgImg} className='absolute hidden group-hover:block blur-[0.3rem] right-[-3rem] bottom-[-2rem]' alt="" /> */}

            </div>
            <div className='col-span-12 group md:col-span-6 h-80 lg:col-span-4 relative bg-slate-100 p-7 border-blue-400 hover:border rounded-xl overflow-hidden'>
                <div className='h-14 w-14 rounded-full bg-blue-600 opacity-90 flex justify-center items-center'>
                    <i class="bi bi-megaphone text-white  text-3xl"></i>
                </div>
                <p className='text-2xl  pb-1 py-3'>
                    Instant Settlements
                </p>
                <div className='text-gray-700 mb-10'>
                    <p className=''>
                        Settle your customer payments within 10 seconds as soon your account is activated, even during holidays.
                    </p>
                </div>

                <a href="" className='group-hover:text-blue-400 text-xl pb-1 border-b-2 border-black group-hover:border-blue-400 font-bold '> Learn more<i className='bi rounded-lg ms-3 group-hover:text-yellow-400 bi-arrow-up-right'></i></a>
                {/* <img src={BgImg} className='absolute hidden group-hover:block blur-[0.3rem] right-[-3rem] bottom-[-2rem]' alt="" /> */}

            </div>


        </div>
        {/* five page end */}

        <section class="bg-blue-600 clipFeature w-full py-44 "  >

            <div class="h-full" >
                {/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-blue-500"> */}
                <div class="col-span-4 ">
                    <h2 class="text-3xl text-white font-bold mb-4 text-center">Features</h2>
                    <p class="mb-4 text-center text-white">Empower your business with all the right tools to accept online payments and provide the best customer experience</p>
                    <p class="text-center text-white mt-2">online payments and provide the best customer experience</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-20 gap-6">
                        <div class="p-4 rounded-md">
                            <img width="44" height="44" alt="" src="https://razorpay.com/build/browser/static/instant-activation.6f975aa6.svg" loading="lazy" class="mb-2" />
                            <h3 class="text-xl font-bold mb-2 text-white">Instant Activation</h3>
                            <p class="text-white">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
                        </div>
                        <div class="p-4 rounded-md">
                            <img width="44" height="44" alt="" src="https://razorpay.com/build/browser/static/easy-integration.18651e2f.svg" loading="lazy" class="mb-2" />
                            <h3 class="text-xl font-bold mb-2  text-white">Easy Integration</h3>
                            <p class="text-white">With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.</p>
                        </div>
                        <div class="p-4 rounded-md">
                            <img width="44" height="44" alt="" src="https://razorpay.com/build/browser/static/api-driven.207572da.svg" loading="lazy" class="mb-2" />
                            <h3 class="text-xl font-bold mb-2  text-white">Easy Integration</h3>
                            <p class="text-white">With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.</p>
                        </div>
                        <div class="p-4 rounded-md">
                            <img width="44" height="44" alt="" src="https://razorpay.com/build/browser/static/payment-modes.da25e039.svg" loading="lazy" class="mb-2" />
                            <h3 class="text-xl font-bold mb-2  text-white">Easy Integration</h3>
                            <p class="text-white">With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.</p>
                        </div>
                        {/* <!-- Repeat the above structure for the remaining items --> */}
                    </div>



                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-20 gap-6">
                        <div class="p-4 rounded-md">
                            <img width="44" height="44" alt="" src="https://razorpay.com/build/browser/static/simple-pricing.dc58cdbb.svg" loading="lazy" class="mb-2" />
                            <h3 class="text-xl font-bold mb-2  text-white">Instant Activation</h3>
                            <p class="text-white">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
                        </div>
                        <div class="p-4 rounded-md">
                            <img width="44" height="44" alt="" src="https://razorpay.com/build/browser/static/support.714ccbce.svg" loading="lazy" class="mb-2" />
                            <h3 class="text-xl font-bold mb-2  text-white">Easy Integration</h3>
                            <p class="text-white">With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.</p>
                        </div>
                        <div class="p-4 rounded-md">
                            <img width="44" height="44" alt="" src="https://razorpay.com/build/browser/static/dashboard-reporting.15590378.svg" loading="lazy" class="mb-2" />
                            <h3 class="text-xl font-bold mb-2  text-white">Easy Integration</h3>
                            <p class="text-white">With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.</p>
                        </div>
                        <div class="p-4 rounded-md">
                            <img width="44" height="44" alt="" src="https://razorpay.com/build/browser/static/secure.742a33ac.svg" loading="lazy" class="mb-2" />
                            <h3 class="text-xl font-bold mb-2  text-white">Easy Integration</h3>
                            <p class="text-white">With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.</p>
                        </div>
                        {/* <!-- Repeat the above structure for the remaining items --> */}
                    </div>
                </div>
                {/* </div> */}

            </div>


        </section>


    </>
}

export default Navbar