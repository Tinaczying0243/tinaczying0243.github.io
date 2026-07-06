import { useNavigate, useParams } from "react-router-dom";
import { getArticle } from "../../content";
import ArticleLayout from "./ArticleLayout";
import { mdxComponents } from "./components/mdxComponents";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) {
    return (
      <main className="page-enter article-page">
        <div className="article-container" style={{ padding: "4rem 1rem" }}>
          <button className="article-back" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <p style={{ marginTop: "2rem" }}>Article not found.</p>
        </div>
      </main>
    );
  }

  const Content = article.Content;

  return (
    <ArticleLayout article={article}>
      {article.paywalled ? (
        <div className="article-paywall">
          <p className="article-p">This article is available to subscribers of {article.outlet}.</p>
          {article.originalUrl && (
            <a href={article.originalUrl} target="_blank" rel="noopener noreferrer" className="article-paywall__link">
              Read the full article at {article.outlet} →
            </a>
          )}
        </div>
      ) : (
        <Content components={mdxComponents} />
      )}
    </ArticleLayout>
  );
}
