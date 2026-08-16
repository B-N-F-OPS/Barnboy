//public route
'use client'

import { Button } from "../Components/button"
import{ GetBatchRecords } from "./batches"
import { useEffect } from "react"


export default function BatchPage() {

    return(
        <>
            <Button variant="outline" className="bg-amber-500 text-white hover:bg-amber-600 ml-auto mr-10 mt-5">
                Add Batch
            </Button>
            {useEffect(()=> {
                < GetBatchRecords />
            }, [])}


        </>
    )
}