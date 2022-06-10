import React from 'react';
import ReactECharts from 'echarts-for-react';

const Scatterplot = () => {
  const dataAll = [
    [
      [5.64,1.04],[4.38,1.05],[5.68,1.03],[7.8,.86],[4.32,1.04],[6.75,1.05],[5.25,1.02],
      [5.05,1.06],[5.2,1.08],[7.22,1.01],[5.75,1.25],[5,1.17],[5.6,1.15],[5.4,1.25],[7.5,1.2],
      [7.3,1.28],[6.2,1.07],[6.6,1.13],[8.7,1.23],[5.1,.96],[5.65,1.09],[4.5,1.03],[3.8,1.11],
      [3.93,1.09],[3.52,1.12],[3.58,1.13],[4.8,.92],[3.95,1.02],[4.5,1.25],[4.7,1.04],[5.7,1.19]
    ],
    [
      [1.95,1.05],[3.27,1.25],[5.75,.98],[3.8,1.23],[4.45,1.22],[2.95,1.45],[4.6,1.19],
      [5.3,1.12],[4.68,1.12],[3.17,1.02],[2.85,1.28],[3.05,.906],[3.38,1.36],[3.74,.98],
      [3.35,1.31],[3.21,.99],[3.8,1.23],[4.6,1.19],[2.65,.96],[3.4,1.06]

    ],
    [
      [4.1,.76],[5.4,.74],[5.7,.66],[5,.78],[5.45,.75],[7.1,.73],[3.85,.75],[5,.82],
      [5.7,.81],[4.92,.89],[4.6,.77],[5.6,.7],[4.35,.89],[4.4,.91],[8.21,0.55],[4,.6],
      [4.9,.58],[7.65,.54],[6.42,.55],[9.40,.57],[8.60,.59],[10.8,.48],[7.1,.61],
      [10.52,.56],[7.6,.58],[7.9,.6],[9.01,.57],[7.5,.67],[13,.57],[11.75,.57]
    ]
  ];
  
  const options = {
    title: {
      
      left: 'center',
      top: 0
    },
    grid: [
      { left: '5%', top: '7%', width: '38%', height: '38%' },
      { right: '5%', top: '7%', width: '38%', height: '38%' },
      { left: '30%', bottom: '2%', width: '38%', height: '38%' }
    ],
    tooltip: {
      formatter: 'Class {a}: ({c})'
    },
    xAxis: [
      
      { gridIndex: 0, min: 0, max: 10 },
      { gridIndex: 1, min: 0, max: 6 },
      { gridIndex: 2, min: 0, max: 14 },
       
    ],
    yAxis: [
      { gridIndex: 0, min: 0, max: 2 },
      { gridIndex: 1, min: 0, max: 2 },
      { gridIndex: 2, min: 0, max: 1 }
    ],
    series: [
      {
        name: 'I',
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataAll[0]
        
      },
      {
        name: 'II',
        type: 'scatter',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: dataAll[1]
        
      },
      {
        name: 'III',
        type: 'scatter',
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: dataAll[2]
        
      }
    ]
  };


  return <ReactECharts option={options} />;
};

export default Scatterplot;