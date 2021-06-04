import React from "react";
import atomize from "@quarkly/atomize";

const Checkbox = ({
	children,
	...rest
}) => {
	return <input {...rest} />;
};

const children = [{
	id: 1,
	value: "Configuration"
}, {
	id: 2,
	value: "Configuration"
}];
export default atomize(Checkbox)({
	name: "Checkbox",
	effects: {
		hover: ":hover"
	},
	description: {
		// paste here description for your component
		en: "Checkbox — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		checked: {
			control: "checkbox"
		},
		value: {
			control: "input"
		},
		id: {
			control: "input"
		}
	}
}, {
	type: "checkbox"
});