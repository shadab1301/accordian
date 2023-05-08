import { lazy } from 'react';
import './App.css';
import Accordian from './Components/Accordian';
const Accordian2 = lazy(() => import('./Components/Accordian2'));

const AccordianData = [
  { title: 'A', content: 'Title for A' },
  { title: 'B', content: 'Title for B' },
  { title: 'C', content: 'Title for C' },
  { title: 'D', content: 'Title for D' },
];

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        margin: '0px auto',
      }}
    >
      <div>
        <h6>Accordian - 1</h6>
        {AccordianData.map(({ title, content }) => {
          return <Accordian title={title} content={content} />;
        })}
      </div>

      <div>
        <h6>Accordian - 2</h6>
        <Accordian2 />
      </div>
    </div>
  );
}

export default App;
