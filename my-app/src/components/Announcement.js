import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 30px;
  background-color: #b3cf9a;
  color: #396a75;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const New = styled.div`
  height: 30px;
  background-color: #b3cf9a;
  color: #396a75;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-left: 2px;
`;
const Announcement = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      New Merch available now{" "}
      {user ? <New>{user.username}</New> : <New>{user.username}</New>}
    </Container>
  );
};

export default Announcement;
