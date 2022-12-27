import React from 'react';

const HandleClick = () => {
  console.log('Evento pego');
};

const Event = () => {
  return <button onClick={HandleClick}>Dispare</button>;
};

export default Event;
