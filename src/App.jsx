import { HomePage } from "./components";
import { Roma } from "./components/roma";
import "./App.scss";

function App() {
  return (
    <div className="appContainer">
      <h1> React + Leaflet</h1>
      <details name="details" open={true}>
        <summary>
          <strong>Salerno</strong>
        </summary>
        <HomePage />
      </details>
      <details name="details" open={true}>
        <summary>
          <strong>Roma</strong>
        </summary>
        <Roma />
      </details>
    </div>
  );
}

export default App;
