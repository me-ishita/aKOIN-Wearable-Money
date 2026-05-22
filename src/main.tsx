
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import akoinLogo from "./assets/akoin-logo.png";

  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

if (link) {
  link.href = akoinLogo;
}

  createRoot(document.getElementById("root")!).render(<App />);
  