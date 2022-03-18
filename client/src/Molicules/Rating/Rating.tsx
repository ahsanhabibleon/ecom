import { RatingType } from "./Rating.types";
import "./Rating.scss";
const Rating: React.FC<RatingType> = ({ rate, count }) => {
  return (
    <div className="product-rating">
      <div className="rating">
        <span>
          <i
            className={
              rate >= 1
                ? "fas fa-star"
                : rate >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          />
        </span>
        <span>
          <i
            className={
              rate >= 2
                ? "fas fa-star"
                : rate >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          />
        </span>
        <span>
          <i
            className={
              rate >= 3
                ? "fas fa-star"
                : rate >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          />
        </span>
        <span>
          <i
            className={
              rate >= 4
                ? "fas fa-star"
                : rate >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          />
        </span>
        <span>
          <i
            className={
              rate >= 5
                ? "fas fa-star"
                : rate >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          />
        </span>
        <span>({count} Reviews)</span>
      </div>
    </div>
  );
};

export default Rating;
