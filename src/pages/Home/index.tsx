import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/overview");
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center m-auto w-full h-[80vh]">
      <div className="flex my-5 cursor-pointer" onClick={handleNavigate}>
        <span></span>
        <h1 className="base-text text-[40px]"> {"->"}Go to: Overview</h1>
      </div>
    </div>
  );
}
