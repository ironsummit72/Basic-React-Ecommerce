import { Rating } from "@material-tailwind/react";
 
export function DefaultRating({rating,className}) {
//   return <Rating value={rating} />;
return <Rating unratedColor="red" ratedColor="red" value={rating} className={className} readonly />
}