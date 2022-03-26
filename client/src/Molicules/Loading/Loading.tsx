import ReactDOM from "react-dom";
import "./Loading.scss";
const Loading = () => {
  return (
    <div className="loading-comp">
      <span></span>
    </div>
  );
};

ReactDOM.createPortal(<Loading />, document.getElementsByTagName("body")[0]);

export default Loading;
