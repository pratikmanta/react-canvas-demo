import React, { useState } from 'react';
import CanvasBox from '../canvas/CanvasBox';
import './App.css';

const App = () => {
	const [score, setScore] = useState({
		player: 0,
		bot: 0
	});

	return (
		<div className='App'>
			<div className='score-sheet text-style'>
				<h3>Matt : {score.player}</h3>
				<h3>{score.bot} : Quinn</h3>
			</div>
			<CanvasBox className={'canvas-box'} />
			<div className='text-box text-style'>
				<h4>Try to beat Quinn while we analyse your resume</h4>
				<h5>Use arrow keys</h5>
			</div>
		</div>
	);
};

export default App;
