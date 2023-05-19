import React from 'react';
import warning from '../images/exclamation-image.webp';

const NotFound = () => {
  return (
    <div className="danger">
      <p>The page you requested has not been found </p>
      <img src={warning} className="App-small" alt="Warning icon" />
    </div>
  );
}

export default NotFound;
