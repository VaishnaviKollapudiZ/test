import React from "react";
import Typography from "@material-ui/core/Typography";

function CustomTypography({ children, styles, ...rest }) {
	return (
		<Typography style={styles} {...rest}>
			{children}
		</Typography>
	);
}

export default CustomTypography;
