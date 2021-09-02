import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div>
			<h1>This is my react playground.</h1>
		</div>
	);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
