import { Rating } from "@material-tailwind/react";
 
export function DefaultRating({rating,className,numberOfReviews=98}) {
//   return <Rating value={rating} />;
return <div className="container w-60 flex items-center justify-between "> 
<Rating unratedColor="red" ratedColor="red" value={rating} className={className} readonly />
<h1 className="mt-6">{numberOfReviews} reviews</h1>
</div> 

}