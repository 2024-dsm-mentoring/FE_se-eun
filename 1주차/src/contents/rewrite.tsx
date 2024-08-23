import styled from "styled-components";
import InputField from "./components/input";
import Button from "./components/button";
const Body = styled.div`
  text-align: center;
`;

const Title = styled.div`
  display: block;
  margin-left: -1000px;
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
        <Check> 게시물 수정</Check>
      </Title>
      <InputField
        type="text"
        placeholder="제목제목"
        label="제목"
        height="50px"
      ></InputField>
      <InputField
        label="내용"
        height="400px"
        type="text"
        placeholder="내용내용"
      ></InputField>
      <Button width="1215px" backgroundColor="#3D8AFF">
        올리기
      </Button>
    </Body>
  );
};
export default Write;
