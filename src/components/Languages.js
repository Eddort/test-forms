import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"sm-display": "grid",
	"height": "220px",
	"width": "80px",
	"min-width": "80px",
	"max-width": "80px",
	"max-height": "220px",
	"min-height": "220px",
	"display": "flex",
	"flex-direction": "column",
	"align-items": "center",
	"background": "white"
};
const overrides = {
	"link": {
		"kind": "Link",
		"props": {
			"href": "/en",
			"target": "_self",
			"width": "80px",
			"min-width": "80px",
			"max-width": "80px",
			"display": "flex",
			"text-decoration-line": "initial",
			"justify-content": "center"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "0px 5px 0px 5px",
			"align-items": "center",
			"justify-content": "space-between",
			"align-content": "space-between",
			"width": "60px",
			"min-width": "60px",
			"max-width": "60px"
		}
	},
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
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/en",
			"target": "_self",
			"width": "80px",
			"min-width": "80px",
			"max-width": "80px",
			"display": "flex",
			"text-decoration-line": "initial",
			"justify-content": "center"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "0px 5px 0px 5px",
			"align-items": "center",
			"justify-content": "space-between",
			"align-content": "space-between",
			"width": "60px",
			"min-width": "60px",
			"max-width": "60px"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"width": "35px",
			"height": "30px",
			"src": "https://uploads.quarkly.io/5fae65a979530b001fd266bb/images/555417.svg?v=2021-06-03T17:12:09.571Z"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "--dark",
			"children": "EN"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/en",
			"target": "_self",
			"width": "80px",
			"min-width": "80px",
			"max-width": "80px",
			"display": "flex",
			"text-decoration-line": "initial",
			"justify-content": "center"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "0px 5px 0px 5px",
			"align-items": "center",
			"justify-content": "space-between",
			"align-content": "space-between",
			"width": "60px",
			"min-width": "60px",
			"max-width": "60px"
		}
	},
	"image2": {
		"kind": "Image",
		"props": {
			"width": "35px",
			"height": "30px",
			"src": "https://uploads.quarkly.io/5fae65a979530b001fd266bb/images/555417.svg?v=2021-06-03T17:12:09.571Z"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"color": "--dark",
			"children": "EN"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "/en",
			"target": "_self",
			"width": "80px",
			"min-width": "80px",
			"max-width": "80px",
			"display": "flex",
			"text-decoration-line": "initial",
			"justify-content": "center"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "0px 5px 0px 5px",
			"align-items": "center",
			"justify-content": "space-between",
			"align-content": "space-between",
			"width": "60px",
			"min-width": "60px",
			"max-width": "60px"
		}
	},
	"image3": {
		"kind": "Image",
		"props": {
			"width": "35px",
			"height": "30px",
			"src": "https://uploads.quarkly.io/5fae65a979530b001fd266bb/images/555417.svg?v=2021-06-03T17:12:09.571Z"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"color": "--dark",
			"children": "EN"
		}
	}
};

const Languages = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Link {...override("link")}>
			<Box {...override("box")}>
				<Image {...override("image")} />
				<Text {...override("text")} />
			</Box>
		</Link>
		<Link {...override("link1")}>
			<Box {...override("box1")}>
				<Image {...override("image1")} />
				<Text {...override("text1")} />
			</Box>
		</Link>
		<Link {...override("link2")}>
			<Box {...override("box2")}>
				<Image {...override("image2")} />
				<Text {...override("text2")} />
			</Box>
		</Link>
		<Link {...override("link3")}>
			<Box {...override("box3")}>
				<Image {...override("image3")} />
				<Text {...override("text3")} />
			</Box>
		</Link>
		{children}
	</Box>;
};

Object.assign(Languages, { ...Box,
	defaultProps,
	overrides
});
export default Languages;