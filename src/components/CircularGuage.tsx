import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface Props {
   value: number;
}
const CircularGauge = ({ value }:Props) => {
  return (
    <div className="w-32">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: `#0000FF`,
          textColor: '#1f2937',
          trailColor: '#d1d5db',
        })}
      />
    </div>
  );
};

export default CircularGauge;

