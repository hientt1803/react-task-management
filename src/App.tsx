import { useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
function App() {
  const router = useNavigate();

  useEffect(() => {
    router("/auth/login");
  }, [router]);

  return <></>;
}

export default App;