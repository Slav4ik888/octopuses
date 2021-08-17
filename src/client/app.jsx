import React from 'react';

const App = () => {

  const handleClick = () => {
    console.log(`CLICK`);
  }

  return (
    <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, flexDirection: `column`, height: `100vh`}}>
      <div>Hello, my new partner!</div>

      <div
        style={{backgroundColor: `#ccc`, cursor: `pointer` }}
        onClick={handleClick}
      >
        Click here
      </div>
    </div>
  )
};

export default App;