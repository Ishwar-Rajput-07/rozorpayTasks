import React from 'react'


const Footer = () => {
    return <>
        <div className="bg-gray-50" >

            <div className='grid grid-cols-12  mx-12 mt-20 pb-24 gap-8'>
                <div className='col-span-12 pb-10 md:col-span-6 lg:col-span-3 border-b md:border-b-0 lg:border-b-0'>
                    <img height={150} width={150} src="https://razorpay.com/build/browser/static/razorpay-logo.5cdb58df.svg" alt="" />
                    <p className='my-8'>
                        Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
                    </p>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-yellow-400 hover:text-black rounded-full px-2 py-1 me-1 bi-facebook'></i>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-yellow-400 hover:text-black rounded-full px-2 py-1 m-1 bi-instagram'></i>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-yellow-400 hover:text-black rounded-full px-2 py-1 m-1 bi-google'></i>
                    <i className='bi text-xl bg-gray-400 text-gray-600 hover:bg-yellow-400 hover:text-black rounded-full px-2 py-1 m-1 bi-twitter'></i>
                </div>

                <div className='col-span-12 md:col-span-6 lg:col-span-3  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-xl font-bold'>BANKING PLUS</p>
                    <p className='text-lg text-blue-800 mt-3 lg:mt-4 my-1'>RazorpayX</p>
                    <p className='text-lg text-blue-800 my-1'>Current Accounts</p>
                    <p className='text-lg text-blue-800 my-1'>Payouts</p>
                    <p className='text-lg text-blue-800 my-1'>Corporate Credit Card</p>
                    <p className='text-lg text-blue-800 my-1'>View Live Demo NEW</p>
                    <p className='text-lg text-blue-800 my-1 mb-6'>Payout Links</p>

                    <p className='text-xl font-bold'>LENDING</p>
                    <p className='text-lg text-blue-800 mt-3 lg:mt-4 my-1'>
                        Razorpay Capital
                    </p>
                    <p className='text-lg text-blue-800 my-1'>Instant Settlements</p>
                    <p className='text-lg text-blue-800 my-1'>Line of Credit</p>
                    <p className='text-lg text-blue-800 my-1 '>
                        Working Capital Loans</p>
                    <p className='text-lg text-blue-800 my-1 mb-6'>
                        Marketplace Instant Settlements
                    </p>


                </div>

                <div className='col-span-12 md:col-span-6 lg:col-span-3  border-b md:border-b-0 lg:border-b-0'>
                    <p className='text-xl font-bold'>ACCEPT PAYMENTS</p>
                    <p className='text-lg text-blue-800 my-1 mt-3 lg:mt-4 '>
                        Payment Gateway
                    </p>
                    <p className='text-lg text-blue-800 my-1'>Payment Pages</p>
                    <p className='text-lg text-blue-800 my-1'>Payment Links</p>
                    <p className='text-lg text-blue-800 my-1'>Razorpay POS NEW</p>
                    <p className='text-lg text-blue-800 my-1'>QR Codes</p>
                    <p className='text-lg text-blue-800 my-1'>Subscriptions</p>
                    <p className='text-lg text-blue-800 my-1'>Smart Collect</p>
                    <p className='text-lg text-blue-800 my-1 mb-6'>Optimizer</p>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-3 '>

                    <p className='text-xl font-bold'>COMPANY</p>
                    <p className='text-lg text-blue-800 mt-3 lg:mt-4 my-1'> About Us</p>
                    <p className='text-lg text-blue-800 my-1'>Careers</p>
                    <p className='text-lg text-blue-800 my-1'>Payouts</p>
                    <p className='text-lg text-blue-800 my-1'>Terms of Use</p>
                    <p className='text-lg text-blue-800 my-1'>Privacy Policy</p>
                    <p className='text-lg text-blue-800 my-1 mb-6'>Corporate Information</p>

                    <p className='text-xl font-bold'>REGD. OFFICE ADDRESS:</p>
                    <p className='text-lg my-1 mt-3 lg:mt-4'>Razorpay Software Private Limited,
                        1st Floor, SJR Cyber,
                        22 Laskar Hosur Road, Adugodi,
                        Bengaluru, 560030,
                        Karnataka, India
                        CIN: U72200KA2013PTC097389
                    </p>
                </div>
            </div>
            <div className='text-center  border-t text-xl  p-5'>
                Copyright © 2023 – All Rights Reserved. Made by Rajput Ishwar
            </div>
        </div >
    </>
}

export default Footer