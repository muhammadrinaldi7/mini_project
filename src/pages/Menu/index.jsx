import { useEffect, useState } from "react"
import { CardMenu } from "../../components/Card"
import { getAllMenu } from "../../services/MenuService"

export const Menu = () => {
  const [menu, setMenu] = useState([])
  const [pageMenu, setPageMenu] = useState([])
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
    getAllMenu(pagination.page,pagination.perPage,(res) => {
      setMenu(res.data?.Data)
      setPageMenu(res.data)
      console.log(res.data)
    })
  }, [pagination.page])
    return (
      <div className="py-6">
        <div className="flex flex-col items-center justify-center gap-4 py-2 lg:flex-row">
          {menu.map((item) => (
            <CardMenu key={item.id} img={item.imageUrl} title={item.name} desc={item.description} />
          ))}
        </div>
        <div className="flex justify-center py-3 join">
          <button onClick={handlePreviousPage} disabled={pageMenu.previousPage === 0} className="join-item btn">«</button>
          <button  className="join-item btn">{pagination.page}</button>
          <button onClick={handleNextPage} disabled={pageMenu.nextPage === 0} className="join-item btn">»</button>
        </div>
      </div>
    )
}