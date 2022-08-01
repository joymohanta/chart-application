import "./App.css";
import BarChart from "./component/BarChart";
import Scatter from "./component/Scatter";

function App() {
  return (
    <div className="App">
      <h3>Here the data visualization is going to start</h3>
      <div className="chart">
        <div>
          <Scatter></Scatter>
          <BarChart></BarChart>
        </div>
      </div>
    </div>
  );
}

export default App;
