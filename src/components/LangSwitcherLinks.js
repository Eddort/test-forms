import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"sm-display": "grid",
	"children": <>
		<Link href="https://google.com" target="_parent">
			PL
		</Link>
		<Link href="https://kursin.com" target="_parent">
			CZ
		</Link>
		<Link href="https://kursin.eu" target="_parent">
			NL
		</Link>
	</>
};
const overrides = {};

const LangSwitcherLinks = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(LangSwitcherLinks, { ...Box,
	defaultProps,
	overrides
});
export default LangSwitcherLinks;