import * as React from 'react';
import './App.css';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <CircularProgressbar value={50} />
    </div>
  );
}

export default App;
