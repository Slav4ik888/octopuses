import * as React from 'react';

const App = () => {

  const handleClick = () => {
    console.log(`CLICK`);
  }

  return (
    <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, flexDirection: `column`, height: `100vh`}}>
      <div>Hello, my new partner!</div>
      
      <button
        style={{backgroundColor: `#ccc`, cursor: `pointer` }}
        onClick={handleClick}
      >
        Click here
      </button>
    </div>
  )
};

export default App;