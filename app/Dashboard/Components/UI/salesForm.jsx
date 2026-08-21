export default function Form() {
    return (
        <>
            <h1>Sales</h1>
            <section>
                <button>Add Entry</button>
            </section>

            <form>
                <p>X</p>

                <label htmlFor="QuantityHatchedy">Quantity Hatched</label>
                <input type='number' placeholder='e.g 300' name="QuantityHatched" required/>

                <label htmlFor="chicksSold">Chicks sold</label>
                <input type='number' placeholder='e.g 250' name="chicksSold" required/>

                <label htmlFor="unsoldChicks">Unsold Chicks</label>
                <input type='number' placeholder='e.g 50' name="unsoldChicks" required/>

                <label htmlFor="totalRevenue">Total revenue</label>
                <input type='number' placeholder='e.g 2,500' name="totalRevenue" required/>

                <button>SUBMIT</button>
            </form>
        </>
    )
}