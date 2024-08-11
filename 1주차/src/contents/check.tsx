import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  margin-bottom: 400px;
`;

const Titles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: 800px;
`;

const List = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #999999;
  margin-right: 5px;
`;

const ListCheck = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #555555;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #121212;
  margin-top: 20px;
  margin-right: 740px;
`;

const Dates = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  margin-top: -20px;
  margin-right: 980px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-right: 840px;
`;

const Rewrite = styled.button`
  color: #3d8aff;
  border: 1px solid #3d8aff;
  background-color: white;
  width: auto;
  padding: 10px 20px; /* 패딩을 추가하여 버튼 내부에 텍스트를 더 잘 맞출 수 있게 함 */
  border-radius: 5px;
  &:hover {
    background-color: #3d8aff;
    color: #ffffff;
    border: 1px solid #3d8aff;
  }
`;

const Delete = styled.button`
  color: #ff4646;
  border: 1px solid #ff4646;
  background-color: white;
  width: auto;
  padding: 10px 20px; /* 패딩을 추가하여 버튼 내부에 텍스트를 더 잘 맞출 수 있게 함 */
  border-radius: 5px;
  &:hover {
    background-color: #ff4646;
    color: #ffffff;
    border: 1px solid #ff4646;
  }
`;

const Line = styled.div`
  width: 1100px; /* 부모 컨테이너의 너비에 맞게 설정 */
  height: 1px;
  background-color: #eeeeee;
  margin: 0 auto;
  margin-top: 20px;
`;

const Content = styled.p`
  width: 800px;
  margin: 0 auto;
  text-align: left;
  margin-right: 300px;
  margin-top: 20px;
`;

const Check = () => {
  return (
    <Container>
      <Titles>
        <List>게시글 목록 {">"}</List>
        <ListCheck> 게시글 상세 확인</ListCheck>
      </Titles>
      <Title>게시글 제목이 나옵니다</Title>
      <Dates>22/08/16</Dates>
      <Buttons>
        <Rewrite>수정하기</Rewrite>
        <Delete>삭제하기</Delete>
      </Buttons>
      <Line />
      <Content>
        게시글 내용이 나옵니다. 게시글 내용이 나옵니다. 게시글 내용이 나옵니다.
        게시글 내용이 나옵니다. 게시글 내용이 나옵니다.
      </Content>
    </Container>
  );
};

export default Check;
