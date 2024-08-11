import styled from "styled-components";
import img from "./FE_mentoring_img/visibility_FILL0_wght400_GRAD0_opsz48 3.png";
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
const Body = styled.body`
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
const Id = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-left: 10px;
`;
const Pw = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-left: 10px;
`;
const TextInput = styled.input`
  width: 100%;
  height: 46px;
  margin-bottom: 10px;
  padding-right: 40px;
  background-position: right 10px center;
  background-repeat: no-repeat;
  border-radius: 4px;
  border: 1px solid #999999;
  box-sizing: border-box;
`;
const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #b1d0ff;
  color: #ffffff;
  border: 1px solid #b1d0ff;
  border-radius: 4px;
  box-sizing: border-box;
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
const Inputs = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
const Labels = styled.div`
  margin-top: -15px;
`;
const Account = styled.p`
  line-height: 26px;
`;
const TextInputPW = styled.input`
  width: 100%;
  height: 46px;
  margin-bottom: 10px;
  padding-right: 40px;
  background-position: right 10px center;
  background-repeat: no-repeat;
  border-radius: 4px;
  border: 1px solid #999999;
  box-sizing: border-box;
  background-image: url(${img});
`;

const Login = () => {
  return (
    <Body>
      <LoginContainer>
        <LoginTitle>로그인</LoginTitle>
        <Line></Line>
        <Inputs>
          <Id>아이디</Id>
          <TextInput
            type="text"
            placeholder="아이디를 입력해주세요"
          ></TextInput>
          <Pw>비밀번호</Pw>
          <TextInputPW
            type="text"
            placeholder="비밀번호를 입력해주세요."
          ></TextInputPW>
        </Inputs>
        <Labels>
          <Label>
            <Checkbox type="checkbox"></Checkbox>아이디 저장
          </Label>
        </Labels>
        <Button>로그인</Button>
        <Account>
          계정이 없으신가요? <Link href="#">회원가입</Link>
        </Account>
      </LoginContainer>
    </Body>
  );
};
export default Login;
/* 클릭하면 눈깔 꺼짐 */
