import React from 'react';

import Vant, { Button } from 'vant-react';
import 'vant-react/dist/index.css';

const App = () => {
  return (
    <div>
      <Vant.Button text={"Vant is awesome"} />
      <Button text={"Vant is awesome"} />
    </div>
  );
};

export default App;
