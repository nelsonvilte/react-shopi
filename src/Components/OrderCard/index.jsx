import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {

    const {id,title, imageUrl, price, handleDelete} = props
     let renderMXMarkIcon
     if(handleDelete){
        renderMXMarkIcon= <XMarkIcon onClick={()=> handleDelete(id)} className="h-5 w-5 text-black cursor-pointer"></XMarkIcon>
     }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className="flex items-center gap-2">
            <figure className="w-24 h-24">
                <img className="h-full w-full rounded-lg object-scale-down" src={imageUrl} alt={title} />
            </figure>
            <p className="text-ellipsis	 text-sm font-light ">{title}</p>
            </div>
            <div  className="flex items-center gap-2">
              <p className="text-lg font-medium">{price}</p>
              {renderMXMarkIcon}
            </div>
           
           
        </div>
    );
};

export default OrderCard;