import React, { useState, useCallback } from 'react';
import { useOverrides } from "@quarkly/components";
import { Icon, Box } from "@quarkly/widgets";
import LangSwitcherLinks from "./LangSwitcherLinks";
import { FaGlobe } from "react-icons/fa";
const defaultProps = {
	"display": "block",
	"quarkly-title": "Lang",
	"sm-align-self": "center",
	"align-self": "center",
	"md-align-self": "center",
	"md-width": "20px",
	"md-height": "20px",
	"as": "div"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"color": "--white",
			"background": "none",
			"user-select": "none",
			"cursor": "pointer",
			"position": "relative",
			"z-index": "102",
			"md-display": "block",
			"display": "flex",
			"category": "fa",
			"icon": FaGlobe,
			"size": "20px",
			"sm-display": "flex",
			"onPointerDown": undefined
		}
	},
	"langSwitcherLinks": {
		"kind": "LangSwitcherLinks",
		"props": {}
	},
	"LangSwitcherLinks": {
		"props": {
			"sm-display": "none",
			"display": "none"
		}
	},
	"LangSwitcherLinks-open": {
		"props": {
			"sm-display": "grid",
			"display": "grid"
		}
	}
};

const LanguageSwitcher = props => {
	const [isOpen, setOpen] = useState(false);
	const handlerOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});
	return <Box {...rest}>
		      
		<Icon {...override('icon', `icon-${isOpen ? 'open' : 'close'}`)} onPointerDown={handlerOpen} />
		      
		<LangSwitcherLinks {...override('LangSwitcherLinks', `LangSwitcherLinks-${isOpen ? 'open' : 'close'}`)} />
		    
	</Box>;
};

Object.assign(LanguageSwitcher, { ...Box,
	defaultProps,
	overrides
});
export default LanguageSwitcher;