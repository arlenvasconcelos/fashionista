import React from 'react';
import { AlertTriangle } from 'react-feather';

import './Error.scss';

const Error = () => (
  <div className="error">
    <AlertTriangle size={32} />
    <p className="error__message">Error. Por favor, recarregue a página.</p>
  </div>
);

export default Error;
