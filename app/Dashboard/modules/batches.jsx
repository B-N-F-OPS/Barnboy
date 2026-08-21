//public route
'use client'

import { Button } from "../Components/UI/button"
import{ dataBatch } from "../Components/supabase/supabase"
import { useState } from "react"
import edit from "../../../public/edit.png"
import trash from "../../../public/trash.png"
import Image from "next/image" 
import Form from "next/form"
import { supabase } from "../Components/supabase/supabase"


export default function BatchPage() {
    const [showForm, setShowForm] = useState(false)

    function formClick() {
        console.log("form clicked")
        setShowForm(prev => !prev)
    }

    async function submitBatchEntries(formData) {

        setShowForm(false)

        const quantityLoaded = formData.get("quantityLoaded")
        const loadDate = formData.get("loadDate")
        const hatchingDate = formData.get("hatchingDate")
        const breeds = formData.get("breeds")


        const { error } = await supabase
            .from('hatchery')
            .insert([
                {
                    "quantity_loaded": quantityLoaded,
                    "date_loaded": loadDate,
                    "hatching_date": hatchingDate,
                    "breeds": breeds
                }
            ])
        
        console.log(error)
    }

    function handleEdit() {
        setShowForm(true)
        

    }

    const handleDelete = async (id) => {
        const { error } = await supabase
            .from('hatchery')
            .delete()
            .eq('id', id)
            console.log(error)
            alert("Batch has been Deleted successfully")
    }

    return(
        <>
            <div className="w-full flex">
                <h1 className="text-4xl font-bold ml-4">Batches</h1>
                <Button variant="outline" onClick={formClick}
                    className="bg-amber-500 text-white hover:bg-amber-600 ml-auto mr-10 mt-5">
                    Add New Batch
                </Button>
            </div>

            {/* from here */}
               { dataBatch.map((items, index) => {
            return (
                <div key={items.id} className="flex flex-col gap-5 mx-auto relative">

                    <div className="text-black bg-amber-100 rounded-3xl mx-auto
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
                        <div className="flex bottom-0 justify-center gap-2 pb-2">
                            <Button variant="outline" size="icon" onClick={handleEdit} >
                                <Image src={edit} width={20} height={20} alt="edit"/>
                            </Button>
                            
                            <Button variant="outline" size="icon" onClick={() => handleDelete(items.id)}>
                                <Image src={trash} width={20} height={20} alt="delete"/>
                            </Button>
                        </div>
                    </div>
                </div>
                    )
                })}
            {/* to here */}

            {/* form from here */}

           {showForm &&
                <Form action={submitBatchEntries} className="absolute m-auto left-0 right-0 top-0 bottom-0
                bg-amber-100 w-fit h-fit flex flex-col p-17 rounded-2xl gap-7 shadow-xl/50">

                    <label htmlFor="quantityLoaded" className="text-black">Quantity</label>
                    <input
                        className="bg-amber-50 p-3 rounded-2xl placeholder:italic text-l"
                        required
                        type="number"
                        placeholder="300"
                        name="quantityLoaded"
                    />


                    <label htmlFor="loadDate" className="text-black">Loading Date</label>
                        <input
                            className="bg-amber-50 p-3 rounded-2xl placeholder:italic text-l"
                            required
                            type="date"
                            name="loadDate"
                            />

                    <label htmlFor="hatchingDate" className="text-black">Hatching Date</label>
                    <input
                        className="bg-amber-50 p-3 rounded-2xl placeholder:italic text-l"
                        required
                        type="date"
                        name="hatchingDate"
                    />

                    <label htmlFor="breeds" className="text-black">Breeds</label>
                    <input
                        className="bg-amber-50 p-3 rounded-2xl placeholder:italic text-l"
                        required
                        type="text"
                        placeholder="e.g Kenbro"
                        name="breeds"
                    />

                    <Button variant="destructive" type="submit">
                        Submit
                    </Button>

                </Form>}
            {/* form to here */}

        </>
    )
}