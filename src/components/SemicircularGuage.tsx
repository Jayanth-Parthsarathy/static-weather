import GaugeChart from 'react-gauge-chart'


const SemiCircularGauge = ({ value }) => {
  return (
    <div style={{ width: '200px', height: '150px' }}>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={20}
        arcPadding={0.1}
        cornerRadius={3}
        percent={value / 100}
        textColor="#333"
        needleColor="#FF5722"
        arcColor={['#FFC107', '#FF9800', '#FF5722']}
        hideText
      />
      <div style={{ textAlign: 'center', marginTop: '-90px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{value}%</span>
      </div>
    </div>
  );
};

export default SemiCircularGauge;



