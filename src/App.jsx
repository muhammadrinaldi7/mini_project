import { useRoutes } from "react-router-dom"
import { LayoutPage } from "./components/Layout"
import { RouteList } from "./components/ProtectedRoutes/RouteList"

function App() {
  const element = useRoutes(RouteList);
  return (
    <LayoutPage>
      {element}
    </LayoutPage>
  )
}

export default App
