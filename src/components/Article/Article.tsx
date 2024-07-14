import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../data/articles";
import { ArticleContainer } from "./Article.styles";

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <ArticleContainer>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </ArticleContainer>
  );
};

export default Article;
