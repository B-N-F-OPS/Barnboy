
import edit from "../../../public/edit.png"
import trash from "../../../public/trash.png"
import Image from "next/image"

export default function CrudBtns() {
    return(
        <div className="flex flex-col bottom-0 mx-auto gap-2 pb-2">
            <button className="bg-white text-black self-center px-10 py-1 rounded-xl shadow-xl/20 hover:opacity-80">
                <Image src={edit} width={20} height={20} alt="edit"/>
            </button>

            <button className="bg-red-400 text-white self-center px-10 py-1 rounded-xl shadow-xl/20 hover:opacity-80">
                <Image src={trash} width={20} height={20} alt="delete"/>
            </button>
        </div>
    )
}