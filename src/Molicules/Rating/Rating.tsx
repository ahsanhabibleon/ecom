import { RatingType } from "./Rating.types";
import "./Rating.scss";
const Rating: React.FC<RatingType> = ({ rate, count }) => {
  return (
    <div className="product-rating">
      <span>Rating: {rate}</span> <span>({count} Reviews)</span>
    </div>
  );
};

export default Rating;
