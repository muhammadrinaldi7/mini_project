export const Homepage = () => {
    return (
        <>
        <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen lg:items-center">
            <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
                Understand User Flow.
                <strong className="font-extrabold text-red-700 sm:block"> Increase Conversion. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                numquam ea!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
                >
                Get Started
                </a>

                <a
                className="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
                >
                Learn More
                </a>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}