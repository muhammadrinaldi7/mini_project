export const Footer = () => {
    return (
        <>
        <footer className="bg-white">
        <div className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24">
            <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
                className="inline-block p-2 text-white transition bg-red-700 rounded-full shadow hover:bg-red-600 sm:p-3 lg:p-4"
                href="#main"
            >
                <span className="sr-only">Back to top</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                />
                </svg>
            </a>
            </div>

            <div className="lg:flex lg:items-end lg:justify-between">
            <div>
                <div className="flex justify-center lg:justify-start">
                <div className="text-xl font-medium"><h1>Mudo<span className="text-[#FF0000] italic">Genkz</span></h1></div>
                </div>

                <p className="max-w-md px-8 mx-auto mt-6 leading-relaxed text-justify text-gray-500 lg:px-0 ">
                Temukan cita rasa asli kuliner Indonesia yang memadukan kelezatan bumbu rempah-rempah tradisional dengan sentuhan lokal di setiap hidangan. Dari makanan khas Jawa yang manis hingga pedasnya masakan Sumatera, kami hadir untuk memanjakan lidah Anda dengan kekayaan rasa Nusantara. Mari bersantap dan nikmati hidangan Indonesia terbaik yang kami sajikan dengan penuh cinta.
                </p>
            </div>

            <ul
                className="flex flex-wrap justify-center gap-6 mt-12 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
            >
                <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#main"> Home </a>
                </li>

                <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#menu"> Category </a>
                </li>

            </ul>
            </div>

            <p className="mt-12 text-sm text-center text-gray-500 lg:text-right">
            Copyright &copy; Rinaldi 2024 . All rights reserved.
            </p>
        </div>
        </footer>
        </>
    )
}