import React, { useState, useCallback } from 'react';
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
import Languages from "./Languages";
const defaultProps = {
	"display": "flex",
	"padding": "0px 5px 0px 5px",
	"align-items": "center",
	"justify-content": "space-between",
	"align-content": "space-between",
	"width": "60px",
	"min-width": "60px",
	"max-width": "60px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "35px",
			"height": "30px",
			"src": "https://uploads.quarkly.io/5fae65a979530b001fd266bb/images/555417.svg?v=2021-06-03T17:12:09.571Z"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--dark",
			"children": "EN"
		},
		"LangSwitcherLinks-open": {
			"props": {
				"sm-display": "grid",
				"display": "grid"
			}
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
	}
};

const LangSwitcherFlag = props => {
	const [isOpen, setOpen] = useState(false);
	const handlerOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});
	return <Box {...rest}>
		              
		<Image {...override('image', `image-${isOpen ? 'open' : 'close'}`)} onPointerDown={handlerOpen} />
		              
		<Text {...override('text', `text-${isOpen ? 'open' : 'close'}`)} onPointerDown={handlerOpen} />
		              
		<Languages {...override('Languages', `Languages-${isOpen ? 'open' : 'close'}`)} />
	</Box>;
};

Object.assign(LangSwitcherFlag, { ...Box,
	defaultProps,
	overrides
});
export default LangSwitcherFlag;