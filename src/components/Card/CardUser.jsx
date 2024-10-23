export const CardUser = (props) => {
    const { img, firstName, lastName, email} = props
    return (
        <a
       
        className="relative flex w-full gap-4 p-4 overflow-hidden border border-gray-100 rounded-lg "
        >
        <span
            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-300 via-red-500 to-red-600"
        ></span>
          <div className="">
            <img
                alt=""
                src={img}
                className="object-cover rounded-lg drop-shadow-md size-20"
            />
            </div>
        <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
               {firstName} {lastName}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">{email}</p>
            </div>

        </div>

        </a>
    )
}