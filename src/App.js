import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const allowedPaths = ["/SignIn", "/SignIn", "/SignUp"]; // Define your allowed paths here

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePathChange);

    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);
 
  return <Layout  allowedPaths={allowedPaths} currentPath={currentPath}/>;
}

export default App;
