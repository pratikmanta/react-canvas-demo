import React, { useEffect, useRef } from 'react';
import {
	CANVAS_WIDTH,
	CANVAS_HEIGHT,
	BALL_RADIUS,
	BAT_WIDTH,
	BAT_HEIGHT
} from '../../constants/utils';

const CanvasBox = ({ className }) => {
	const canvasRef = useRef(null);

	var x = CANVAS_WIDTH;
	var y = CANVAS_HEIGHT;

	const renderBall = (ctx) => {
		ctx.beginPath();
		ctx.arc(x / 2, y / 2, BALL_RADIUS, 0, 2 * Math.PI);
		ctx.fillStyle = '#5f9ea0';
		ctx.fill();
		ctx.closePath();
	};

	const renderBat = (ctx) => {
		ctx.beginPath();

		ctx.rect(10, y / 2 - BAT_HEIGHT / 2, BAT_WIDTH, BAT_HEIGHT);
		ctx.fillStyle = '#5f9ea0';
		ctx.fill();

		ctx.rect(480, y / 2 - BAT_HEIGHT / 2, BAT_WIDTH, BAT_HEIGHT);
		ctx.fillStyle = '#5f9ea0';
		ctx.fill();
		ctx.closePath();
	};

	const renderGame = (ctx) => {
		renderBat(ctx);
		renderBall(ctx);
	};

	useEffect(() => {
		const canvasContext = canvasRef.current.getContext('2d');
		renderGame(canvasContext);
	}, []);

	return (
		<canvas
			width={CANVAS_WIDTH}
			height={CANVAS_HEIGHT}
			ref={canvasRef}
			className={className}
		></canvas>
	);
};

export default CanvasBox;
