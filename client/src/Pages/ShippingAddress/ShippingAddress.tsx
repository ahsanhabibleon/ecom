import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Molicules/Button";
import Input from "../../Molicules/Input";
import { errorTypes } from "../SignIn/SignIn.types";

const ShippingAddress: React.FC = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const postalCodeRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState({} as errorTypes);

  return (
    <form>
      <h1>Shipping Address</h1>
      <Input
        type="text"
        label="Full Name"
        id="full-name"
        name="full-name"
        ref={fullNameRef}
        required
        placeholder="Enter Full Name"
        error={error}
      />

      <Input
        type="text"
        label="Address"
        id="address"
        name="address"
        ref={addressRef}
        required
        placeholder="Enter Address"
        error={error}
      />
      <Input
        type="text"
        label="City"
        id="city"
        name="city"
        ref={cityRef}
        required
        placeholder="Enter City"
        error={error}
      />
      <Input
        type="number"
        label="Postal Code"
        id="postal-code"
        name="postal-code"
        ref={postalCodeRef}
        required
        placeholder="Enter Postal Code"
        error={error}
      />
      <Input
        type="text"
        label="Country"
        id="country"
        name="country"
        ref={countryRef}
        required
        placeholder="Enter Country"
        error={error}
      />
      <div className="form-group">
        <Button type="submit" text="Continue to Payment" large full />
      </div>
      <div>
        Don't wanna proceed? <Link to="/">Browse products</Link>
      </div>
    </form>
  );
};

export default ShippingAddress;
