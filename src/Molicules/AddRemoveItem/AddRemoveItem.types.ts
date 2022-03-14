export interface AddRemoveItemProps { 
    add: (quantity: 1 | -1) => void;
    addDisabled: boolean;
}