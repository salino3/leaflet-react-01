import { HomePage } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="appContainer">
      <h1> React + Leaflet</h1>
      <details open={true}>
        <summary>
          <strong>Paris</strong>
        </summary>
        <HomePage />
      </details>
    </div>
  );
}

export default App;
