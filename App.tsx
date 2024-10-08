import "./App.css";
import AccordionComponent from "./Accordion";

function App() {
  const language = "ru"; // Primer: "en", "srb", "ru"
  return (
    <div>
      <AccordionComponent language={language} />
    </div>
  );
}

export default App;
