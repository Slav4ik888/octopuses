import React from 'react';

const App = () => {

  const handleClick = () => {
    console.log(`CLICK`);
  }

  return (
    <>
      <div
        style={{backgroundColor: `#ccc`, cursor: `pointer` }}
        onClick={handleClick}
      >
        Click here
      </div>
    </>
  )
};

export default App;