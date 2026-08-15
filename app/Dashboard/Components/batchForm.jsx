export default function Form() {
    return(
        <>
            <h1>Batches</h1>
            <section>
                <button>Add Batch</button>
            </section>

            <form>
                <p>X</p>

                <label htmlFor="quantity">Quantity loaded</label>
                <input type='number' placeholder='e.g 300...' name='quantity' required/>

                <label htmlFor="loadDate">Loading Date</label>
                <input type='date' name='loadDate' required/>

                <label htmlFor="hatchDate">Hatching Date</label>
                <input type='date' name='hatchDate' required/>

                <label htmlFor="breeds">Breeds</label>
                <input type='text' placeholder='e.g Sasso...' name='breeds' required/>

                <button>SUBMIT</button>
            </form>
        </>
    )
}