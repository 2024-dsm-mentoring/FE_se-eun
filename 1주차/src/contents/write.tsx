import styled from "styled-components";
import Button from "./components/button"; // Import the reusable Button component
import InputField from "./components/input";

const Body = styled.div`
  text-align: center;
`;

const Title = styled.div`
  display: block;
  margin-left: -980px;
  margin-top: 50px;
`;

const List = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #999999;
`;

const Check = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const Write = () => {
  return (
    <Body>
      <Title>
        <List>게시글 목록 {">"} </List>
        <Check> 게시글 상세 확인</Check>
      </Title>
      <InputField
        label="제목"
        type="text"
        placeholder="제목을 입력해주세요."
        height="50px"
      />
      <InputField
        label="내용"
        type="text"
        placeholder="내용을 입력해주세요"
        height="400px"
      ></InputField>
      <Button width="1215px" backgroundColor="#3D8AFF">
        올리기
      </Button>
    </Body>
  );
};

export default Write;
