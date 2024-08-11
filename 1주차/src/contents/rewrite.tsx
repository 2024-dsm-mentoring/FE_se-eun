import styled from "styled-components";
const Body = styled.div`
  text-align: center;
`;
const TitleInput = styled.input`
  width: 1189px;
  height: 50px;
  background-color: #eeeeee;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid #eeeeee;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 10px;
  padding: 0 10px;
  text-align: left;
  line-height: 30px;
`;
const Title = styled.div`
  display: block;
  margin-left: -1000px;
  margin-top: 50px;
`;
const TextInput = styled.input`
  width: 1189px;
  height: 400px;
  background-color: #eeeeee;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid #eeeeee;
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  padding-top: 10px;
  padding: 0 10px;
  text-align: left;
  line-height: 20px;
`;
const Button = styled.button`
  background-color: #3d8aff;
  color: #ffffff;
  width: 1215px;
  height: 48px;
  border: 1px solid #3d8aff;
  border-radius: 5px;
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
const Text = styled.p`
  font-size: 14px;
  color: #555555;
  font-weight: 400;
  margin-right: 1150px;
  margin-bottom: -25px;
`;
const Content = styled.p`
  font-size: 14px;
  color: #555555;
  font-weight: 400;
  margin-right: 1150px;
  margin-bottom: -30px;
`;

const Write = () => {
  return (
    <Body>
      <Title>
        <List>게시글 목록 {">"} </List>
        <Check> 게시물 수정</Check>
      </Title>
      <Text>제목</Text>
      <TitleInput type="text" placeholder="제목제목"></TitleInput>
      <Content>내용</Content>
      <TextInput type="text" placeholder="내용내용"></TextInput>
      <Button>올리기</Button>
    </Body>
  );
};
export default Write;
