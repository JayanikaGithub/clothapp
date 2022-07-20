import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/stylish-girl-reading-book_23-2147666421.jpg?w=2000")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const checkout = () => {
  return (
    <Container>
      
      <Wrapper>
      
        <Title></Title>
        <Form>
          <Title>Thank You !</Title>
          <Desc>
          Your Order has been received
          </Desc>
        <Link to={`/home`}>
        <Button>Exit</Button>
          </Link>
        </Form>
      
      </Wrapper>
      
    </Container>
  );
};

export default  checkout;