import React from "react";
import Barchart from "./Barchart";
import Scatterplot from "./Scatterplot";

function App() {
  return (
    <div className="App">
      <div className="scatter-plot">
        <h1>Scatter Plot</h1>
        <h3>This graph contains <b><i>“Color Intensity”</i></b> on horizontal axis and 
          <b><i>“Hue”</i></b> on vertical axis of wine that divided into 3 types of classes.</h3>
        <Scatterplot />
      </div>
      <div className="bar-chart">
      <h1>Bar Chart</h1>
        <h3>This chart showing the <b><i>“Alcohol”</i></b> category on horizontal axis 
        and average of <b><i>“Malic Acid”</i></b> for all 3 classes of wine on vertical axis</h3>
        <Barchart />
      </div>
    </div>
  );
}

export default App;
