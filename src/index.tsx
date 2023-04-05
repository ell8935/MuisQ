import App from "./App";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Element with id 'root' not found in the document");
}
