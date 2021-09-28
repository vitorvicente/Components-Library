import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	background-color: #1a252f;
	font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
	font-size: 25px;
	color: #fff;
	align-items: center;
	justify-content: center;
	text-align: center;
	display: flex;
	flex-direction: row;
	padding: 30px;
	position:relative;
	left:0;
	bottom:0;
	right:0;
`;

export const VtrFooter = () => (
  <StyledDiv>
      <small>Copyright &copy; Grandmen123 {new Date().getFullYear()}</small>
  </StyledDiv>
);

VtrFooter.propTypes = {};

VtrFooter.defaultProps = {};