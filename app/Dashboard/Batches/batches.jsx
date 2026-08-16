'use server'

// import { cacheLife } from 'next/cache'
import { createClient } from '@supabase/supabase-js'
import edit from "../../../public/edit.png"
import trash from "../../../public/trash.png"
import Image from "next/image" 
import { Button } from "../Components/button"

const supabase_key= process.env.NEXT_PUBLIC_PUBLISHABLE_KEY
const supabase_url= process.env.NEXT_PUBLIC_SUPABASE_URL
const supabase = createClient( supabase_url, supabase_key)

export async function GetBatchRecords() {
    // 'use cache'
    // cacheLife('hours')

    const { data, error } = await supabase
    .from('hatchery')
    .select()

    console.log(error)
    console.log(data)
    return (
        data.map((items, index) => {
            return (
                 <div className="flex flex-col gap-5">

                <div key={items.id} className="text-black bg-amber-100 rounded-3xl mx-auto
                    w-60 h-66 shadow-xl/20 scrollbar-none">
                    <div className="p-5">
                        <p className="font-bold">Batch No:{index +1}</p>
                        <div className="shadow-xl/10 h-1/3 p-3 text-sm flex flex-col justify-evenly gap-2 truncate overflow-auto scrollbar-none rounded-1xl">
                            <p>Quantity: {items.quantity_loaded}</p>
                            <p>Load Date: {items.date_loaded}</p>
                            <p>Hatch Date: {items.hatching_date}</p>
                            <p>Breeds: {(items.breeds.toLowerCase())}</p>
                        </div>
                    </div>

                    {/* CRUD Buttons */}
                    <div className="flex flex-col bottom-0 mx-auto gap-2 pb-2">
                        <Button variant="outline" size="icon">
                            <Image src={edit} width={20} height={20} alt="edit"/>
                        </Button>
                        
                        <Button variant="outline" size="icon">
                            <Image src={trash} width={20} height={20} alt="delete"/>
                        </Button>
                    </div>
                </div>
            </div>
            )
        })
    )
}
