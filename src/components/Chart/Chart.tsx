import React from 'react';

import styled from 'styled-components';

import { Item } from 'models';
import ChartBar from 'components/Chart/ChartBar/ChartBar';

type Props = {
  dataPoints: Array<Item>;
};

const ChartWrapper = styled.div`
  padding: 1rem 0;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

const Chart = (props: Props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => {
    return +dataPoint.value;
  });

  // const totalMaximum = Math.max(...dataPointValues);

  const totalMaximum = dataPointValues.reduce(
    (previousValue, currentValue, currentIndex, array) => {
      return previousValue + currentValue;
    },
    0
  );

  return (
    <ChartWrapper>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={+dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </ChartWrapper>
  );
};

export default Chart;
