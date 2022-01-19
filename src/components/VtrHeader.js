import React from "react";
import styled from "styled-components";

import Avatar from "./Assets/avatar.png"
import Background from "./Assets/main-background.jpg"

const MastHead = styled.div`
	margin-bottom:50px;
	background:no-repeat center center;
	background-color:#868e96;
	background-attachment:scroll;
	position:relative;
	background-size:cover;
	background-image: url(${Background});
`;

const Overlay = styled.div`
	position:absolute;
	top:0;
	left:0;
	right:0;
	height:100%;
	width:100%;
	background-color:#212529;
	opacity:.2
`;

const SiteHeading = styled.div`
	padding:200px 0 150px;
	color:#fff;
	text-align: center;
	justify-content: center;
	& h1 {
		font-size:50px;
		margin-top:0
	}
`;

const StyledImage = styled.img`
	display: inline-block;
	align: center;
`;

export const VtrHeader = ({}) => (
  <MastHead>
    <Overlay></Overlay>
    <SiteHeading>
        <StyledImage src={Avatar} alt="logo" width="250" height="250" />
    </SiteHeading>
  </MastHead>
);

VtrHeader.propTypes = {};

VtrHeader.defaultProps = {};