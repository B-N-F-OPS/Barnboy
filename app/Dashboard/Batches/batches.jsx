import dummyData from "./dummy"
import CrudBtns from "../Components/crud_btn"
import { batchRecords } from "../Components/supabase"

export default function Batches() {

    return(
            batchRecords.map((items, index)=> {
                return (
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

                            <CrudBtns />

                    </div>
                )
            })

    )
}