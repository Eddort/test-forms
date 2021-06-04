import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"children": <>
		<Link href="#first">
			Some text
		</Link>
		<Link href="#second">
			Some text
		</Link>
		<Link href="#third">
			Some text
		</Link>
	</>
};
const overrides = {};

const Flatmenu = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Flatmenu, { ...Box,
	defaultProps,
	overrides
});
export default Flatmenu;