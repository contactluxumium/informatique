import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleReload}>Reload Page</button>
    </div>
  );
};

// Fix: Updated to use React 18's createRoot API, as ReactDOM.render is deprecated.
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
