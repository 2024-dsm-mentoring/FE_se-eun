import styled from "styled-components";
import img from "./FE_mentoring_img/Frame.png";

const Body = styled.body`
  margin: 0;
  text-align: center;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 400px;
`;

const FeedList = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #555555;
  margin-bottom: 50px;
  margin-right: auto;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1100px;
  margin-bottom: 20px;
`;

const ViewList = styled.div`
  border: 1px solid #eeeeee;
  width: 140px;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 4px;
  margin-right: 20px;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const New = styled.span`
  font-weight: 400;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #3d8aff;
  border: 1px solid #3d8aff;
  color: #ffffff;
  border-radius: 5px;
  width: auto;
  height: 48px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const ViewContents = styled.div`
  width: 1100px;
  height: 70px;
  border: 1px solid white;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const Title = styled.span`
  font-size: 22px;
`;

const DateView = styled.span`
  font-size: 18px;
  margin-left: auto;
  padding-right: 20px;
`;

const ViewListDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const View = () => {
  return (
    <Body>
      <ViewContainer>
        <FeedList>게시글 목록</FeedList>
        <TopContainer>
          <ViewList>
            <ViewListDiv>
              <Img src={img} alt="Latest" />
              <New>최신순</New>
            </ViewListDiv>
          </ViewList>
          <Button>게시글 작성하기</Button>
        </TopContainer>
        <ViewContents>
          <List>
            <Title>제목이 들어가요</Title>
            <DateView>24/08/10</DateView>
          </List>
        </ViewContents>
        <ViewContents>
          <List>
            <Title>제목이 들어가요</Title>
            <DateView>24/08/10</DateView>
          </List>
        </ViewContents>
        <ViewContents>
          <List>
            <Title>제목이 들어가요</Title>
            <DateView>24/08/10</DateView>
          </List>
        </ViewContents>
        <ViewContents>
          <List>
            <Title>제목이 들어가요</Title>
            <DateView>24/08/10</DateView>
          </List>
        </ViewContents>
        <ViewContents>
          <List>
            <Title>제목이 들어가요</Title>
            <DateView>24/08/10</DateView>
          </List>
        </ViewContents>
      </ViewContainer>
    </Body>
  );
};

export default View;
