import { RingLoader } from "react-spinners";
import { CSSProperties } from "react";

const override: CSSProperties = {
  zIndex: "3",
};

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 z-[2] bg-[rgba(0,0,0,0.75)] ">
      <RingLoader color="#36d7b7" cssOverride={override} size={150} />;
    </div>
  );
};

export default Loader;
