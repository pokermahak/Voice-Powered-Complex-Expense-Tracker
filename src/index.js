import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from './context/context'; 
import {SpeechProvider} from '@speechly/react-client';


ReactDOM.render(
  <SpeechProvider appId=" a3d38a80-b9e9-4253-a4e6-f059ea71ff1c" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);