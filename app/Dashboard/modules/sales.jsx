// public route
'use client'

import { dataSales } from "../Components/supabase/supabase"
import { Button } from "../Components/UI/button"
import edit from "../../../public/edit.png"
import trash from "../../../public/trash.png"
import Image from "next/image"
import Form from "next/form"
import { useState } from "react"
import { supabase } from "../Components/supabase/supabase"


export default function Sales() {
    const [displayForm, setDisplayForm] = useState(false)

    function formClick() {
        setDisplayForm(prev=> !prev)
    }

    async function submitSalesEntries(formData) {
        setDisplayForm(false)

        const chicksHatched = formData.get("chicksHatched")
        const chicksSold = formData.get("chickSold")
        const unsoldChicks = formData.get("unsoldChicks")
        const totalRevenue = formData.get("totalRevenue")


        const { error } = await supabase
            .from('sales')
            .insert([
                {
                    "chicks_hatched": Number(chicksHatched),
                    "chicks_sold": Number(chicksSold),
                    "unsold_chicks": Number(unsoldChicks),
                    "total_revenue": Number(totalRevenue)
                }
            ])
        
        console.log(error)
    }

    const handleDelete = async(id) => {
        const { error } = await supabase
            .from('sales')
            .delete()
            .eq('id', id)
            console.log(error)
        alert("Sale record has been Deleted successfully")
    }


    return(
        <>
            <div className="w-full flex">
                <h1 className="text-4xl font-bold ml-4">Sales</h1>
                <Button variant="outline" onClick={formClick}
                    className="bg-amber-500 text-white hover:bg-amber-600 ml-auto mr-10 mt-5">
                    Add Sales Entry
                </Button>
            </div>

                {/* from here */}
            {dataSales.map( (items, index)=> {
                return (
                    <div key={items.id} className="flex flex-col gap-5 mx-auto relative">

                        <div className="text-black bg-amber-100 rounded-3xl mx-auto
                            w-60 h-66 shadow-xl/20 scrollbar-none">
                            <div className="p-5">
                                <p className="font-bold">Batch No:{index +1}</p>
                                <div className="shadow-xl/10 h-1/3 p-3 text-sm flex flex-col justify-evenly gap-2 truncate overflow-auto scrollbar-none rounded-1xl">
                                    <p>Chicks Hatched: {items.chicks_hatched}</p>
                                    <p>Chicks Sold: {items.chicks_sold}</p>
                                    <p>Total Revenue: {items.total_revenue}</p>
                                    <p>Unsold Chicks: {items.unsold_chicks}</p>
                                </div>
                            </div>

                            {/* CRUD btns here */}
                            <div className="flex bottom-0 justify-center gap-2 pb-2">
                                <Button variant="outline" size="icon" >
                                    <Image src={edit} width={20} height={20} alt="edit"/>
                                </Button>
                                
                                <Button variant="outline" size="icon" onClick={()=> handleDelete(items.id)}>
                                    <Image src={trash} width={20} height={20} alt="delete"/>
                                </Button>
                            </div>
                            {/* Crud Btns end here */}
                        </div>
                    </div>
                )
            })}
            {/* to here */}

            {/* form from here */}
            {displayForm && <Form action={submitSalesEntries}
            className="absolute m-auto left-0 right-0 top-0 bottom-0
                bg-amber-100 w-fit h-fit flex flex-col p-17 rounded-2xl gap-7 shadow-xl/50" >

                    <label htmlFor="chicksHatched" className="text-black">Chicks hatched</label>
                    <input
                        className="bg-amber-50 p-3 rounded-2xl placeholder:italic text-l"
                        required
                        type="number"
                        placeholder="e.g 300"
                        name="chicksHatched"
                    />


                    <label htmlFor="chickSold" className="text-black">Chicks Sold</label>
                        <input
                            className="bg-amber-50 p-3 rounded-2xl placeholder:italic text-l"
                            required
                            placeholder="e.g 250"
                            type="number"
                            name="chickSold"
                            />

                    <label htmlFor="unsoldChicks" className="text-black">Unsold Chicks</label>
                    <input
                        className="bg-amber-50 p-3 rounded-2xl placeholder:italic text-l"
                        required
                        placeholder="e.g 50"
                        type="number"
                        name="unsoldChicks"
                    />

                    <label htmlFor="totalRevenue" className="text-black">Total Revenue</label>
                    <input
                        className="bg-amber-50 p-3 rounded-2xl placeholder:italic text-l"
                        required
                        placeholder="e.g 2500"
                        type="number"
                        name="totalRevenue"
                    />

                    <Button variant="destructive" type="submit">
                        Submit
                    </Button>

                </Form>}
            {/* form to here */}
        </>
    )
}