export const CardMenu = (props) => {
    const {img,alt,title,desc} = props;
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }
    
    return (
        <div className="shadow-xl hover:scale-105 card card-compact bg-base-100 w-96">
            <figure className="">
                <img className="object-cover w-full h-48"
                src={img}
                alt={alt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{truncateText(desc, 60)}</p>
                <div className="justify-end card-actions">
                <button className="btn btn-primary">Detail</button>
                </div>
            </div>
        </div>
    )
}