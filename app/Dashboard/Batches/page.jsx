//public route

import dummyData from "./dummy"

export default function Batches() {

    return(
            dummyData.map((items, index)=> {
                return (
                    <div key={index} className="text-black bg-amber-100 rounded-3xl mx-auto opacity-80 hover:opacity-95 w-60 h-60 text-center
                    box-shadow:rgba(0,_0,_0,_0.25)_0px_54px_55px,_rgba(0,_0,_0,_0.12)_0px_-12px_30px,_rgba(0,_0,_0,_0.12)_0px_4px_6px,_rgba(0,_0,_0,_0.17)_0px_12px_13px,_rgba(0,_0,_0,_0.09)_0px_-3px_5px">
                        <div className="p-5">
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