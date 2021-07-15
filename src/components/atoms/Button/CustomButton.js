import { Button } from "@material-ui/core";
import React from "react";

function CustomButton({ color, label, size }) {
	return (
		<Button color={color} size={size} data-testid="custom-button-test">
			{label}
		</Button>
	);
}

export default CustomButton;
