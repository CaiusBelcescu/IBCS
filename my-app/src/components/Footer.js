import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
  ContactMail,
  LocalPhone,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 20px;
`;
const Right = styled.div`
  flex: 1;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ marginLeft: "30px" })}
`;
const Payment = styled.img`
  width: 50%;
  ${mobile({ marginLeft: "30px" })}
`;

const Center = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Footer = () => {
  const navigate = useNavigate();
  const handleHome = (e) => {
    navigate("/");
  };
  const handleCart = (e) => {
    navigate("/cart");
  };
  return (
    <Container>
      <Left>
        <Logo>IBCS Design</Logo>
        <Desc>This description needs to be completed by the owner</Desc>
        <SocialContainer>
          <SocialIcon color="#e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#3b5999">
            <Facebook />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem onClick={handleHome}>Home</ListItem>
          <ListItem onClick={handleCart}>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Strada Sinaia nr4, Timisoara, Romania
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} />
          +40724 779 232
        </ContactItem>
        <ContactItem>
          <ContactMail style={{ marginRight: "10px" }} />
          IBCSDesign@design.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
