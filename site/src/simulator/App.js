import * as React from 'react';
import DemoConfig from '../../configs/demo.config';

const App = () => {
  const componentName = window.location.hash.replace('#/api/', '');

  const DemoComponent = DemoConfig[componentName];
  return (
    <DemoComponent key={module.hot ? Math.random() : null} />
  );
}

export default App;
