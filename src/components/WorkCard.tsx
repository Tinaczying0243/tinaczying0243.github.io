import { Link } from "react-router-dom";
import type { WorkItem } from "../content";
import "./WorkCard.css";

interface WorkCardProps {
  item: WorkItem;
  variant?: "default" | "horizontal";
}

export default function WorkCard({ item, variant = "default" }: WorkCardProps) {
  const className = `work-card card ${variant === "horizontal" ? "work-card--horizontal" : ""}`;
  const outlet = item.outlet?.trim();
  const type = item.type?.trim();
  const showType = Boolean(type && type.toLowerCase() !== outlet?.toLowerCase());

  const inner = (
    <>
      <div className="work-card__color-bar" data-category={item.category} />
      <div className="work-card__body">
        <div className="work-card__meta">
          {item.featured && (
            <span className="work-card__featured" title="Featured" aria-label="Featured">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
          )}
          {showType && (
            <span className="work-card__type">
              {type}
            </span>
          )}
          {outlet && <span className="work-card__outlet">{outlet}</span>}
          <span className="work-card__date">{item.date}</span>
        </div>

        <h3 className="work-card__title">{item.title}</h3>
        <p className="work-card__desc">{item.description}</p>

        <div className="work-card__footer">
          <div className="work-card__tags">
            {item.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="work-card__tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="work-card__read-more">
            Read →
          </span>
        </div>
      </div>
    </>
  );

  if (item.hosted) {
    return (
      <Link to={item.url} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  );
}
