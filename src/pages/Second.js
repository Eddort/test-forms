import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Box, Text, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import * as Components from "components";
import { FaGlobe } from "react-icons/fa";
import { MdFace, MdAllOut } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"Second"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box display="flex">
			<Menu width="50%" display="inline-flex">
				<Override slot="link" />
				<Override slot="link-404" display="inline" />
				<Override slot="item-404" display="list-item" />
				<Override slot="item" />
				<Override slot="item-index" />
			</Menu>
			<Components.BurgerMenu>
				<Override slot="icon" />
				<Override slot="menu" display="none">
					<Override slot="item" display="list-item" />
					<Override slot="item-index" display="list-item" />
					<Override slot="item-404" display="list-item" />
				</Override>
				<Override slot="icon,icon-close" />
			</Components.BurgerMenu>
			<Box display="none">
				{"      "}
				<Icon
					color="--white"
					background="none"
					user-select="none"
					cursor="pointer"
					position="relative"
					z-index="102"
					md-display="block"
					category="fa"
					icon={FaGlobe}
					size="20px"
					display="block"
				/>
				{"      "}
				<Menu
					md-background="white"
					position="relative"
					z-index="101"
					lg-transform="translateY(0px) translateX(0px)"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-left={0}
					md-top={0}
					md-width="100%"
					md-height="100%"
					padding="8px 0 6px 0"
					exact-active-match
				/>
				{"    "}
			</Box>
		</Box>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Components.Payment />
			<Button font="--lead" margin="20px" type="button">
				Button
			</Button>
			<Box
				display="flex"
				flex-direction="row"
				flex-wrap="nowrap"
				width="200px"
				height="100px"
				background="#f5f5f5"
			>
				<Icon category="md" icon={MdFace} width="50%" align-self="center" />
				<Icon category="md" icon={MdAllOut} width="50%" align-self="center" />
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script src={"https://fast.wistia.com/embed/medias/ivn4prep36.jsonp"} async={true} place={"endOfHead"} rawKey={"6082afa63a4713f997adee91"} />
			<script async={true} src={"https://fast.wistia.com/assets/external/E-v1.js"} place={"endOfHead"} rawKey={"6082afce4152763141179bdf"} />
		</RawHtml>
	</Theme>;
});