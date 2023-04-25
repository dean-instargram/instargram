import { PostCard, RecommendFollow } from '@/components';
import styled from 'styled-components';

export default function Main() {
  return (
    <MainContainer>
      <MenuSection>메뉴바</MenuSection>
      <PostSection>
        <PostCard />
        <PostCard />
      </PostSection>
      <RecommendFollow />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuSection = styled.section`
  background-color: beige;
  width: 20%;
`;

const PostSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;