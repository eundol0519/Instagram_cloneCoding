// *** Header.js ***

import React from "react";
import styled from "styled-components";
import { Grid, Image, Button } from "../elements/index";
import logo from "../logo.png";
import write from "../add.svg";
import myPage from "../person.svg";
import logOut from "../exit.svg";
import PostWrite from "../pages/PostWrite";
import { history } from "../redux/configureStore";
import { Container } from "../elements";
import { withRouter } from "react-router-dom";
import { delToken } from "../shared/token";

const Header = props => {
  const { children } = props;
  const [postWrtieModal, setPostWriteModal] = React.useState(false);
  const [Scroll, setScroll] = React.useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div style={{ paddingTop: "76px" }}>
      <HeaderWeb>
        <Container>
          <Grid is_flex is_fix padding="0.5rem" bg="white">
            <Logo
              src={logo}
              onClick={() => {
                history.push("/");
              }}
            ></Logo>
            <Grid is_flex gap="20px" width="auto">
              <Btn
                src={write}
                onClick={() => {
                  setPostWriteModal(true);
                }}
              ></Btn>
              {postWrtieModal && (
                <PostWrite
                  modal={postWrtieModal}
                  setPostWriteModal={setPostWriteModal}
                ></PostWrite>
              )}
              <Btn
                src={myPage}
                onClick={() => {
                  history.push(`/myPage/${userInfo.userId}`);
                  window.location.reload();
                }}
              ></Btn>
              <Btn
                src={logOut}
                onClick={() => {
                  localStorage.clear();
                  delToken("authorization");
                  history.push("/in/signIn");
                  window.alert("로그아웃 되었습니다.");
                }}
              ></Btn>
            </Grid>
          </Grid>
        </Container>
      </HeaderWeb>
      {children}
      <div></div>
    </div>
  );
};
const HeaderWeb = styled.div`
  background-color: #fff;
  border-bottom: solid rgba(188, 191, 187, 0.93) 1px;
  position: fixed;
  width: 100%;
  left: 0px;
  z-index: 99;
  top: 0px;
`;
const Logo = styled.img`
  width: 150px;
  height: 23%;
  cursor: pointer;
`;

const Btn = styled.img`
  width: 30px;
  cursor: pointer;
`;

export default Header;
