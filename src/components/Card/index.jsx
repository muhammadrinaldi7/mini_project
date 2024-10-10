import { Link } from "react-router-dom";

export const CardMenu = (props) => {
    const {img,id,alt,title,desc} = props;
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }
    
    return (
        <div className="shadow-xl h-[22rem] hover:scale-105 card card-compact bg-base-100 w-96">
        <figure className="h-1/2">
          <img className="object-cover w-full h-48" src={img} alt={alt} />
        </figure>
        <div className="flex flex-col justify-between card-body h-1/2">
          <h2 className="card-title">{title}</h2>
          <p className="overflow-hidden text-base">{truncateText(desc, 30)}</p>
          <div className="justify-end card-actions">
            <Link to={`/menu/${id}`} className="text-white bg-red-700 btn">Detail</Link>
          </div>
        </div>
      </div>
      
    )
}