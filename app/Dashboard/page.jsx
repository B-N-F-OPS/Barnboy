// Dashboard page where the main sidebar and wrappers nest

import Image from 'next/image'
import logo from '../../public/profile.jpg'
import BatchPage from './modules/batches'
import { Suspense, use, useState } from 'react'
import Summary from './modules/summary'
import Expenses from './modules/expenses'
import Sales from './modules/sales'

export default function DashboardHome() {
    
    const [batchDisplay, setBatchDisplay] = useState(true);
    const [summaryDisplay, setSummaryDisplay] = useState(false);
    const [expensesDisplay, setExpensesDisplay] = useState(false);
    const [salesDisplay, setSalesDisplay] = useState(false)

    function handleBatches() {
        setBatchDisplay(true)
        setSummaryDisplay(false)
        setExpensesDisplay(false)
        setSalesDisplay(false)
    }

    function handleSummary() {
        setSummaryDisplay(true)
        setBatchDisplay(false)
        setExpensesDisplay(false)
        setSalesDisplay(false)
    }

    function handleExpenses() {
        setExpensesDisplay(true)
        setBatchDisplay(false)
        setSummaryDisplay(false)
        setSalesDisplay(false)
    }

    function handleSales() {
        setSalesDisplay(true)
        setExpensesDisplay(false)
        setBatchDisplay(false)
        setSummaryDisplay(false)
    }


    return (
        <>
        {/* outer layer */}
        <div className='flex bg-black w-dvw h-dvh mx-auto gap-7 p-10'>

        {/* inner layer */}
            <div className='p-5 text-amber-50 mr-15'>

                    <Image
                        loading="eager"
                        className="border-0 rounded-2xl ml-8"
                        alt="profile"
                        src={logo}
                        width={65}
                        height={65}/>

                    <h1 className='text-2xl font-semibold opacity-90 ml-8'>Brian</h1>
                    <h2 className='opacity-90 ml-8'>brianKuria@email.com</h2>

                <ul className='text-4xl mt-25 opacity-55 ml-8 cursor-pointer bold'>
                    <li className='mb-9' onClick={handleSummary}>Summary</li>
                    <li className='mb-9 ' onClick={handleBatches}>Batches</li>
                    <li className='mb-9 ' onClick={handleSales}>Sales</li>
                    <li className="" onClick={handleExpenses}>Expenses</li>
                    <li className='border-0 bg-amber-950 absolute px-7 py-5 bottom-15 text-xl rounded-3xl'>
                        <p>Accounts</p>
                        <p>settings</p>
                    </li>
                </ul>
            
            </div>

            <div className='bg-amber-50 w-full h-full rounded-4xl overflow-auto scrollbar-none flex flex-wrap py-5 gap-5
            box-shadow:rgb(255_255_255_/_56%)_0px_22px_70px_4px'>
                {/* static container */}
                <Suspense>
                    {batchDisplay && <BatchPage fallback="Loading batch records..." />}
                    {summaryDisplay && <Summary fallback="Loading summary records..."/>}
                    {expensesDisplay && <Expenses fallback="Loading Expenses records..."/>}
                    {salesDisplay && <Sales fallback="Loading Sales records..." />}
                </Suspense>

            </div>
                {/* AI chatbot section */}
                <div className='w-1/3 bg-amber-100 rounded-3xl'>

                </div>
        </div>

        </>
    )
}
