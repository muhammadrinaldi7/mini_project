import { Footer } from "../Footer"
import { Navbar } from "../Navbar"

export const LayoutPage = ({ children }) => {
    return (
        <>
        <div className="p-4 bg-gray-50">
            <Navbar />
                <div className="container px-6 mx-auto mt-6 bg-white rounded-lg">
                    {children}
                </div>
        </div>
            <Footer />
        </>
    )
}