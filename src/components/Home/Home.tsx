import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { articles } from "../../data/articles";
import { HomeContainer, ArticleList, ArticleItem } from "./Home.styles";

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ query: event.target.value });
  };

  return (
    <HomeContainer>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ArticleList>
        {filteredArticles.map((article) => (
          <ArticleItem key={article.id}>
            <Link to={`/article/${article.id}`}>
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
            </Link>
          </ArticleItem>
        ))}
      </ArticleList>
    </HomeContainer>
  );
};

export default Home;
