import { useEffect, useState } from "react"
import { CardMenu } from "../../components/Card"
import { getAllMenu } from "../../services/MenuService"

export const Menu = () => {
  const [menu, setMenu] = useState([])
  const [pageMenu, setPageMenu] = useState([])
  const [filterMenu, setFilterMenu] = useState("")
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 5,
    total: 0,
    currentPage: 1,
    previousPage: 0,
    nextPage: 0,
  })
  const handleNextPage = () => {
    setPagination({
      ...pagination,
      page: pagination.page + 1,
    });
  }

  const handlePreviousPage = () => {
    setPagination({
      ...pagination,
      page: pagination.page - 1,
    });
  }
  useEffect(() => {
    getAllMenu(pagination.page,pagination.perPage,filterMenu,(res) => {
      setMenu(res.data?.Data)
      setPageMenu(res.data)
    })
  }, [pagination.page,filterMenu])
  console.log(menu)
    return (
      <div id="menu" className="py-6">
        <h1 className="mb-6 text-3xl font-bold text-center text-red-700">Daftar Menu Makanan</h1>
          <input className="w-[30%] mb-3 input input-bordered" type="text" placeholder="Cari Berdasarkan Nama Makanan" onChange={(e) => setFilterMenu(e.target.value)} />
        <div className="flex flex-col items-center justify-center gap-4 py-2 lg:flex-row">
          {menu?.length > 0 ?
          menu.map((item) => (
            <CardMenu key={item.id} id={item.id} img={item.imageUrl} title={item.name} desc={item.description} />
          )) : ( <div><p>Menu Tidak Ditemukan</p></div> )
          }
        </div>
        <div className="flex justify-center py-3 join">
          <button onClick={handlePreviousPage} disabled={pageMenu.previousPage === 0} className="join-item btn">«</button>
          <button  className="join-item btn">{pagination.page}</button>
          <button onClick={handleNextPage} disabled={pageMenu.nextPage === 0} className="join-item btn">»</button>
        </div>
      </div>
    )
}