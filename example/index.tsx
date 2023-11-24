import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DsButton from '../src/components/DsButton';

const App = () => {
  return (
    <div>
      <DsButton>Olá mundo</DsButton>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
