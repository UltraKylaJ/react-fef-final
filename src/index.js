// Lord, I pray that with your help and guidance I make it through this final with the best understanding and I desire to learn more. Thank you for everything, God. I love you. Amen.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductProvider } from './ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
