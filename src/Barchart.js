import React from 'react';
import ReactECharts from 'echarts-for-react';

const Barchart= () => {
  const options = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Class-1','CLass-2','Class-3'],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            symbol: 'arrow',
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
        }
      ],
      series: [
        {
          name: 'Malc Acid',
          type: 'bar',
          barWidth: '60%',
          data: [13.51, 12.81, 10.95]
        }
      ]
  };

  return <ReactECharts option={options} />;
};

export default Barchart;



