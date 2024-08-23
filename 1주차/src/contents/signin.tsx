import styled from "styled-components";
import Img from "./FE_mentoring_img/visibility_FILL0_wght400_GRAD0_opsz48 3.png";
import InputField from "./components/input";
import Button from "./components/button";

const LoginContainer = styled.div`
  margin: 80px auto;
  width: 480px;
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
const LoginTitle = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 23px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin-left: 10px;
  margin-top: 5px;
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
  border-radius: 4px;
  border: 1px solid #999999;
`;
const Inputs = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
`;
const Labels = styled.div`
  margin-top: -15px;
  margin-bottom: 27px;
`;
const Account = styled.p`
  line-height: 26px;
`;
const Contents = styled.div`
  margin-bottom: 80px;
`;

const SignIn = () => {
  return (
    <Body>
      <LoginContainer>
        <LoginTitle>회원가입</LoginTitle>
        <Line></Line>
        <Contents>
          <Inputs>
            <InputField
              label="아이디"
              type="text"
              placeholder="아이디를 입력해주세요"
              height="45px"
            />

            <InputField
              label="아이디"
              type="password"
              placeholder="아이디를 입력해주세요"
              backgroundImage={Img}
              height="45px"
            />
            <InputField
              label="비밀번호"
              type="text"
              placeholder="아이디를 입력해주세요"
              height="45px"
            />
          </Inputs>
          <Labels>
            <Label>
              <Checkbox type="checkbox"></Checkbox>아이디 저장
            </Label>
          </Labels>
          <Button width="100%">로그인</Button>
          <Account>
            계정이 없으신가요? <Link href="#">회원가입</Link>
          </Account>
        </Contents>
      </LoginContainer>
    </Body>
  );
};
export default SignIn;
/* 클릭하면 눈깔 꺼짐 */
