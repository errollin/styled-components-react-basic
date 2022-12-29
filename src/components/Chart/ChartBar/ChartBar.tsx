import React from 'react';

import styled from 'styled-components';

type Props = {
  label: string;
  value: number;
  maxValue: number;
};

const ChartBarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChartBarFill = styled.div((props: { height: string }) => ({
  backgroundColor: '#4826b9',
  width: '100%',
  height: props.height,
  transition: 'all 0.3s ease-out',
}));

const ChartBarLabelWrapper = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;

const ChartBar = (props: Props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }

  return (
    <ChartBarWrapper>
      <ChartBarInner>
        <ChartBarFill height={barFillHeight}></ChartBarFill>
      </ChartBarInner>
      <ChartBarLabelWrapper>{props.label}</ChartBarLabelWrapper>
    </ChartBarWrapper>
  );
};

export default ChartBar;
