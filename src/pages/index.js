import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Input, Button, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Menu, Override, StackItem, Stack, GoogleMap } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box display="flex">
			<Menu width="80%" display="inline-flex" />
		</Box>
		<Components.QuarklycommunityKitMobileSidePanel>
			<Box>
				<Components.LangSwitcherFlag position="absolute" right="80px" top={0}>
					<Override slot="Languages-close" display="none" />
					<Override slot="Languages" position="absolute" top="50px" right={0} />
				</Components.LangSwitcherFlag>
				<Link
					href="#"
					visited-color="#000000"
					color="#000000"
					padding="10px 10px 10px 10px"
					text-decoration-line="initial"
				>
					Some text
				</Link>
			</Box>
			<Components.LanguageSwitcher position="absolute" top="10px" right="20px" />
		</Components.QuarklycommunityKitMobileSidePanel>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Components.Flatmenu />
			<Section>
				<Text>
					Formspree
				</Text>
				<Components.QuarklycommunityKitFormspree endpoint="https://formspree.io/f/mbjqowvw" margin="20px 0px 50px 0px">
					<Box>
						<Components.Dropdown selectId="dropdown1" selectName="choices" />
						<Components.Checkbox value="testvalue" id="testid">
							Hello
						</Components.Checkbox>
						<Input
							name="email"
							required
							placeholder="name"
							as="input"
							type="text"
						/>
						<Input
							name="name"
							required
							placeholder="email"
							as="input"
							type="email"
						/>
						<Button>
							Send
						</Button>
					</Box>
				</Components.QuarklycommunityKitFormspree>
				<Text>
					Netlify
				</Text>
				<Components.NetlifyForm display="flex" flex-direction="row" formName="my-form2">
					{" "}
					<Stack gap="16px">
						{"  "}
						<StackItem width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"      "}
							<Text font="--base" margin="0 0 4px 0">
								{"    "}Name{"\n   "}
							</Text>
							{"   "}
							<Input max-width="400px" width="100%" name="name" required />
							{"  "}
						</StackItem>
						{"  "}
						<StackItem width="50%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"      "}
							<Text font="--base" margin="0 0 4px 0">
								{"    "}Email{"\n   "}
							</Text>
							{"   "}
							<Input
								max-width="400px"
								width="100%"
								type="email"
								name="email"
								required
							/>
							{"  "}
						</StackItem>
						{"  "}
						<StackItem width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							{"      "}
							<Text font="--base" margin="0 0 4px 0">
								{"    "}Message{"\n   "}
							</Text>
							{"   "}
							<Input
								as="textarea"
								rows="4"
								width="100%"
								name="message"
								required
							/>
							{"  "}
						</StackItem>
						{"  "}
						<StackItem width="100%">
							{"   "}
							<Button>
								{"    "}Send{"\n   "}
							</Button>
							{"  "}
						</StackItem>
						{" "}
					</Stack>
				</Components.NetlifyForm>
			</Section>
			<Section display="none">
				<Override slot="SectionContent" align-items="center" width="400px" />
				<Stack gap="16px" width="100%">
					<Text as="h3" font="--headline3" margin="0 0 20px 0" color="#000000">
						Leave us a message
					</Text>
					<StackItem width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text font="--base" margin="0 0 4px 0" color="#000000">
							Name
						</Text>
						<Input max-width="400px" width="100%" name="name" placeholder="Enter your name" />
					</StackItem>
					<StackItem width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text font="--base" margin="0 0 4px 0" color="#000000">
							Email
						</Text>
						<Input
							max-width="400px"
							width="100%"
							type="email"
							name="email"
							placeholder="Enter your e-mail"
						/>
					</StackItem>
					<StackItem width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						<Text font="--base" margin="0 0 4px 0" color="#000000">
							Message
						</Text>
						<Input
							as="textarea"
							rows="4"
							width="100%"
							name="message"
							max-width="400px"
							placeholder="Please describe your question"
						/>
					</StackItem>
					<StackItem width="100%">
						<Button>
							Send
						</Button>
					</StackItem>
				</Stack>
			</Section>
			<Section id="first">
				<GoogleMap />
				<Text
					as="p"
					font="--lead"
					margin="20px 0 0 0"
					display="block"
					table-layout="fixed"
				>
					Hey there
					<br />
				</Text>
				<Box>
					<Text
						as="ol"
						font="--base"
						margin="20px 0 0 0"
						display="list-item"
						table-layout="fixed"
					>
						Test1
					</Text>
					<Text
						as="ol"
						font="--base"
						display="list-item"
						table-layout="fixed"
						margin="0px 0px 0px 0px"
					>
						Test2
					</Text>
					<Text
						as="ol"
						font="--base"
						display="list-item"
						table-layout="fixed"
						margin="0px 0px 0px 0px"
					>
						Test3
						<br />
					</Text>
					<Text
						as="ol"
						font="--base"
						display="list-item"
						table-layout="fixed"
						margin="0px 0px 0px 0px"
					>
						Test3
						<br />
					</Text>
					<Text
						as="ol"
						font="--base"
						display="list-item"
						table-layout="fixed"
						margin="0px 0px 0px 0px"
					>
						Test3
						<br />
					</Text>
				</Box>
			</Section>
			<Box width="100%">
				<Text>
					Some text
				</Text>
				<Components.Languages />
				<Box
					sm-display="grid"
					height="200px"
					width="100px"
					min-width="100px"
					max-width="100px"
					max-height="200px"
					min-height="200px"
					display="flex"
					flex-direction="column"
					align-items="center"
				>
					<Link
						href="/en"
						target="_self"
						width="80px"
						min-width="80px"
						max-width="80px"
						display="flex"
						text-decoration-line="initial"
						justify-content="center"
					>
						<Box
							display="flex"
							padding="0px 5px 0px 5px"
							align-items="center"
							justify-content="space-between"
							align-content="space-between"
							width="60px"
							min-width="60px"
							max-width="60px"
						>
							<Image width="35px" height="30px" src="https://uploads.quarkly.io/5fae65a979530b001fd266bb/images/555417.svg?v=2021-06-03T17:12:09.571Z" />
							<Text color="--dark">
								EN
							</Text>
						</Box>
					</Link>
					<Link
						href="/en"
						target="_self"
						width="80px"
						min-width="80px"
						max-width="80px"
						display="flex"
						text-decoration-line="initial"
						justify-content="center"
					>
						<Box
							display="flex"
							padding="0px 5px 0px 5px"
							align-items="center"
							justify-content="space-between"
							align-content="space-between"
							width="60px"
							min-width="60px"
							max-width="60px"
						>
							<Image width="35px" height="30px" src="https://uploads.quarkly.io/5fae65a979530b001fd266bb/images/555417.svg?v=2021-06-03T17:12:09.571Z" />
							<Text color="--dark">
								EN
							</Text>
						</Box>
					</Link>
					<Link
						href="/en"
						target="_self"
						width="80px"
						min-width="80px"
						max-width="80px"
						display="flex"
						text-decoration-line="initial"
						justify-content="center"
					>
						<Box
							display="flex"
							padding="0px 5px 0px 5px"
							align-items="center"
							justify-content="space-between"
							align-content="space-between"
							width="60px"
							min-width="60px"
							max-width="60px"
						>
							<Image width="35px" height="30px" src="https://uploads.quarkly.io/5fae65a979530b001fd266bb/images/555417.svg?v=2021-06-03T17:12:09.571Z" />
							<Text color="--dark">
								EN
							</Text>
						</Box>
					</Link>
					<Link
						href="/en"
						target="_self"
						width="80px"
						min-width="80px"
						max-width="80px"
						display="flex"
						text-decoration-line="initial"
						justify-content="center"
					>
						<Box
							display="flex"
							padding="0px 5px 0px 5px"
							align-items="center"
							justify-content="space-between"
							align-content="space-between"
							width="60px"
							min-width="60px"
							max-width="60px"
						>
							<Image width="35px" height="30px" src="https://uploads.quarkly.io/5fae65a979530b001fd266bb/images/555417.svg?v=2021-06-03T17:12:09.571Z" />
							<Text color="--dark">
								EN
							</Text>
						</Box>
					</Link>
				</Box>
				<Components.LangSwitcherFlag />
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