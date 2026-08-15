//public route

import { Button } from "../Components/button"
import Batches from "./batches"

export default function BatchPage() {
    return (
        <>
            <div className="bg-red-400 p-20">
                <Button variant="outline">ADD BATCH</Button>
            </div>
            <Batches />
        </>
    )
    
}