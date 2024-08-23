// View.tsx
import styled from "styled-components";
import img from "./FE_mentoring_img/Frame.png";
import Button from "./components/button";
import { FlexContainer, StyledDiv } from "./components/div"; // div 컴포넌트 임포트

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

const New = styled.span`
  font-weight: 400;
  font-size: 20px;
`;

const Title = styled.span`
  font-size: 22px;
`;

const DateView = styled.span`
  font-size: 18px;
  margin-left: auto;
  padding-right: 20px;
`;

const View = () => {
  return (
    <Body>
      <ViewContainer>
        <FeedList>게시글 목록</FeedList>
        <FlexContainer
          width="1100px"
          justifyContent="space-between"
          marginBottom="20px"
        >
          <StyledDiv width="140px" height="44px">
            <img
              src={img}
              alt="Latest"
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
            <New>최신순</New>
          </StyledDiv>
          <Button width="auto" height="48px" backgroundColor="#3D8AFF">
            게시글 작성하기
          </Button>
        </FlexContainer>

        {/* 게시글 목록 */}
        <StyledDiv
          width="1100px"
          height="70px"
          boxShadow="0px 1px 15px rgba(0, 0, 0, 0.1)"
          marginTop="20px"
        >
          <FlexContainer width="100%">
            <Title>첫 번째 게시글 제목</Title>
            <DateView>24/08/10</DateView>
          </FlexContainer>
        </StyledDiv>

        <StyledDiv
          width="1100px"
          height="70px"
          boxShadow="0px 1px 15px rgba(0, 0, 0, 0.1)"
          marginTop="20px"
        >
          <FlexContainer width="100%">
            <Title>두 번째 게시글 제목</Title>
            <DateView>24/08/11</DateView>
          </FlexContainer>
        </StyledDiv>

        <StyledDiv
          width="1100px"
          height="70px"
          boxShadow="0px 1px 15px rgba(0, 0, 0, 0.1)"
          marginTop="20px"
        >
          <FlexContainer width="100%">
            <Title>세 번째 게시글 제목</Title>
            <DateView>24/08/12</DateView>
          </FlexContainer>
        </StyledDiv>

        <StyledDiv
          width="1100px"
          height="70px"
          boxShadow="0px 1px 15px rgba(0, 0, 0, 0.1)"
          marginTop="20px"
        >
          <FlexContainer width="100%">
            <Title>네 번째 게시글 제목</Title>
            <DateView>24/08/13</DateView>
          </FlexContainer>
        </StyledDiv>

        <StyledDiv
          width="1100px"
          height="70px"
          boxShadow="0px 1px 15px rgba(0, 0, 0, 0.1)"
          marginTop="20px"
        >
          <FlexContainer width="100%">
            <Title>다섯 번째 게시글 제목</Title>
            <DateView>24/08/14</DateView>
          </FlexContainer>
        </StyledDiv>
      </ViewContainer>
    </Body>
  );
};

export default View;
