import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 20px;
`;

export const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ArticleItem = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  h2 {
    margin: 0 0 10px 0;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #007bff;
    }
  }
`;
