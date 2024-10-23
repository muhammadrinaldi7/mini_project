import { useEffect, useState } from "react"
import { CardUser } from "../../components/Card/CardUser"
import { getAllUsers } from "../../services/UsersService"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export const Pengguna = () => {
    const [userList,setUserList] = useState([])
    const [loading,setLoading] = useState(false)
    const [pagination,setPagination] = useState({
        page: 1,
        perPage: 5,
        total: 0,
        total_pages: 0,
    })
    console.log(userList)
    console.log(pagination)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            getAllUsers(pagination.page, (res) => {
                setUserList(res.data)
                setPagination({
                    ...pagination,
                    page: res.page,
                    total: res.total,
                    total_pages: res.total_pages
                })
            })
            setLoading(false)
        },1500)
    },[pagination.page])
    const handleNext = () => {
        setPagination({
            ...pagination,
            page: pagination.page + 1
        })
    }
    const handlePrevious = () => {
        setPagination({
            ...pagination,
            page: pagination.page - 1
        })
    }
    return (
        <div className="p-6">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-3xl">Pengguna</h1>
                <p className="text-lg">Halaman ini menampilkan tentang pengguna</p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {loading ? <span className="text-red-700 py-36 loading loading-infinity loading-lg"></span> : userList?.length > 0 ?
         userList?.map((item,index) => (
            <CardUser key={index} img={item.avatar} firstName={item.first_name} lastName={item.last_name} email={item.email}/>
        )) : ( <div className="text-black py-36"><p>Menu Tidak Ditemukan</p></div> )
          }
                </div>
                
                <div className="inline-flex items-center justify-center py-1 text-white bg-red-600 rounded">
                <button onClick={handlePrevious} disabled={pagination.page === 1} className="inline-flex items-center justify-center size-8 rtl:rotate-180">
                    <span className="sr-only">Prev Page</span>
                   <FontAwesomeIcon icon={faChevronLeft} className="size-3"/>
                </button>

                <span className="w-px h-4 bg-white/25" aria-hidden="true"></span>

                <div>
                    <label htmlFor="PaginationPage" className="sr-only">Page</label>
                    <div  className="h-8 w-12 flex justify-center items-center rounded border-none bg-transparent p-0 text-center text-sm font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
                    <h1 className="">{pagination.page}</h1>
                    </div>
                </div>

                <span className="w-px h-4 bg-white/25"></span>

                <button onClick={handleNext} disabled={pagination.page === pagination.total_pages} className="inline-flex items-center justify-center size-8 rtl:rotate-180">
                    <span className="sr-only">Next Page</span>
                    <FontAwesomeIcon icon={faChevronRight} className="size-3"/>
                </button>
                </div>
            </div>
        </div>
    )
}