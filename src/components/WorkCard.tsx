import type { WorkItem } from "../data/portfolioData";
import "./WorkCard.css";



interface WorkCardProps {
  item: WorkItem;
  variant?: "default" | "horizontal";
}

export default function WorkCard({ item, variant = "default" }: WorkCardProps) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`work-card card ${variant === "horizontal" ? "work-card--horizontal" : ""}`}
    >
      <div className="work-card__color-bar" data-category={item.category} />
      <div className="work-card__body">
        <div className="work-card__meta">
          {item.type && (
            <span className="work-card__type">
              {item.type}
            </span>
          )}
          <span className="work-card__outlet">{item.outlet}</span>
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
    </a>
  );
}
