import styled from "styled-components";
import img from "./FE_mentoring_img/visibility_FILL0_wght400_GRAD0_opsz48 3.png";
import InputField from "./components/input"; // InputField 컴포넌트 가져오기
import Button from "./components/button"; // Button 컴포넌트 가져오기

const LoginContainer = styled.div`
  margin: 100px auto;
  width: 480px;
`;

const LoginTitle = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 23px;
  text-align: left;
`;

const Body = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 0;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #3d8aff;
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #3d8aff;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  vertical-align: -5px;
  border: 1px solid #999999;
`;

const Account = styled.p`
  line-height: 26px;
`;

const InputGroup = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Login = () => {
  return (
    <Body>
      <LoginContainer>
        <LoginTitle>로그인</LoginTitle>
        <Line />
        <InputGroup>
          <InputField
            label="아이디"
            type="text"
            placeholder="아이디를 입력해주세요"
            height="45px"
          />
          <InputField
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            backgroundImage={img}
            height="45px"
          />
        </InputGroup>
        <Label>
          <Checkbox type="checkbox" />
          아이디 저장
        </Label>
        <Button width="100%">로그인</Button>
        <Account>
          계정이 없으신가요? <Link href="#">회원가입</Link>
        </Account>
      </LoginContainer>
    </Body>
  );
};

export default Login;
