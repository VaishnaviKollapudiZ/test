import React from "react";

export default function CustomImage({
	src,
	height,
	width,
	alt,
	styles,
	...rest
}) {
	return (
		<img
			src={src}
			height={height}
			width={width}
			alt={alt}
			style={styles}
			{...rest}
		/>
	);
}
