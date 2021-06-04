import React from "react";
import { useOverrides } from "@quarkly/components";
import EmbedHTML from "./EmbedHTML";
const defaultProps = {};
const overrides = {};

const Payment = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <EmbedHTML {...rest}>
		{children}
	</EmbedHTML>;
};

Object.assign(Payment, { ...EmbedHTML,
	defaultProps,
	overrides
});
export default Payment;