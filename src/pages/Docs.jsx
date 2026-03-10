import { useEffect } from "react";

const Docs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen">Docs</div>;
};

export default Docs;
