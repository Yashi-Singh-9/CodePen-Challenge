document.addEventListener("DOMContentLoaded", () => {
	const snowContainer = document.createElement("div");
	snowContainer.style.position = "absolute";
	snowContainer.style.top = "0";
	snowContainer.style.left = "0";
	snowContainer.style.width = "100%";
	snowContainer.style.height = "100%";
	document.body.appendChild(snowContainer);

	const createSnowflake = () => {
		const snowflake = document.createElement("div");
		snowflake.className = "snowflake";
		snowflake.textContent = "❄️";
		const size = Math.random() * 1.5 + 0.5; // Random size between 0.5rem and 2rem
		snowflake.style.fontSize = `${size}rem`;
		snowflake.style.left = `${Math.random() * 100}vw`;
		snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed between 5s and 10s
		snowflake.style.setProperty("--wind", `${Math.random() * 20 - 10}vw`); // Random drift left/right
		snowContainer.appendChild(snowflake);

		// Remove snowflake after animation
		snowflake.addEventListener("animationend", () => {
			snowContainer.removeChild(snowflake);
		});
	};

	setInterval(createSnowflake, 100); // Create a snowflake every 100ms
});
