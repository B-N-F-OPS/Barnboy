//public route

import dummyData from "./dummy"

export default function Batches() {

    return(
            dummyData.map((items, index)=> {
                return (
                    <div key={index} className="text-black bg-amber-100 rounded-3xl mx-auto opacity-80
                        hover:opacity-95 w-60 h-60 text-center shadow-xl/10">
                        <div className="p-5">
                            <p>Batch No:{index +1}</p>
                            <p>{items.quantity}</p>
                            <p>{items.loadDate}</p>
                            <p>{items.hatchDate}</p>
                            <p>{items.breeds.join(' ').toLowerCase(0)}</p>
                        </div>
                    </div>
                )
            })

    )
}