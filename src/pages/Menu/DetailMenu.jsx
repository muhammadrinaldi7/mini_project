import { Link, useParams } from "react-router-dom"
import { getMenuById } from "../../services/MenuService"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const DetailMenu = () => {
    const {id} = useParams();
    const [menuDetail, setMenuDetail] = useState([]);
    const detailMenu = getMenuById(id);
    console.log(detailMenu)
    return (
        <>
        <Link to={"/menu"} className="fixed flex px-4 py-2 text-white bg-red-700 rounded-full top-24 left-6"><FontAwesomeIcon icon={faArrowLeft}/></Link>
        <div className="flex flex-col gap-5 p-6">
            <div className="max-w-md mx-auto shadow-lg rounded-bl-badge sm:p-6 bg-gray-200/90 rounded-tr-3xl lg:p-8">
                <img className="object-cover w-full mx-auto rounded-md drop-shadow-md" src={detailMenu.imageUrl} alt="" />
            </div>
            <div className="flow-root py-3 border border-gray-100 rounded-lg shadow-sm">
            <dl className="-my-3 text-sm divide-y divide-gray-100">
                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Nama Makanan</dt>
                <dd className="text-gray-700 sm:col-span-2">{detailMenu.name}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Type</dt>
                <dd className="text-gray-700 sm:col-span-2">{detailMenu.type}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Harga</dt>
                <dd className="text-gray-700 sm:col-span-2">{detailMenu.priceFormatted}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Deskripsi</dt>
                <dd className="text-gray-700 sm:col-span-2">
                    {detailMenu.description}
                </dd>
                </div>
            </dl>
            </div>
        </div>
        </>
    )
}