import { AddRemoveItemProps } from "./AddRemoveItem.types";
import "./AddRemoveItem.scss";

const AddRemoveItem: React.FC<AddRemoveItemProps> = ({ add, addDisabled }) => {
  return (
    <div className="add-remove-btn-group">
      <span onClick={() => add(-1)}>-</span>
      <span className={addDisabled ? 'disabled' : ''} onClick={() => add(1)}>
        +
      </span>
    </div>
  );
};

export default AddRemoveItem;
