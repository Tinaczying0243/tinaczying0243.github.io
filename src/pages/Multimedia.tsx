import { works } from "../data/portfolioData";
import "./Multimedia.css";

const multimediaWorks = works.filter((w) => w.category === "multimedia");

export default function Multimedia() {
  return (
    <main className="page-enter">
      {/* Page Header */}
      <section className="page-hero page-hero--multimedia">
        <div className="container">
          <p className="section-eyebrow">Portfolio</p>
          <h1 className="heading-xl">Multimedia Projects</h1>
          <p className="page-hero__desc">
            Interactive stories, data visualizations, and immersive multimedia packages
            that bring complex topics to life through technology and reporting.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container">
          <div className="mm-grid">
            {multimediaWorks.map((item) => (
              <div key={item.id} className="mm-feature-item">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mm-feature-card card"
                >
                  <div className="mm-feature-card__accent" data-id={item.id} />
                  <div className="mm-feature-card__body">
                    <div className="mm-feature-card__meta">
                      {item.type && (
                        <span className="tag tag-violet">{item.type}</span>
                      )}
                      <span className="mm-feature-card__outlet">{item.outlet}</span>
                      <span className="mm-feature-card__date">{item.date}</span>
                    </div>

                    <h2 className="mm-feature-card__title">{item.title}</h2>
                    <p className="mm-feature-card__desc">{item.description}</p>

                    <div className="mm-feature-card__tags">
                      {item.tags.map((tag, i) => {
                        const colors = ["tag-blue", "tag-teal", "tag-orange", "tag-emerald"];
                        return (
                          <span key={tag} className={`tag ${colors[i % colors.length]}`}>
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    <div className="mm-feature-card__cta">
                      <span className="btn btn-primary" style={{ pointerEvents: "none" }}>
                        View Project →
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Multimedia Work */}
      <section className="section mm-about-section">
        <div className="container">
          <div className="mm-about">
            <div className="mm-about__text">
              <p className="section-eyebrow">Approach</p>
              <h2 className="heading-md">Where Data Meets Story</h2>
              <div className="section-divider" />
              <p>
                Tina Chen's multimedia journalism combines rigorous data analysis with
                compelling narrative structure. Each project is built around a central
                question: what do the numbers mean for real people?
              </p>
              <p>
                From interactive scrollytelling to ReadyMag multimedia packages, her work
                uses technology to make complex systems — immigration economics, university
                funding, housing — accessible to general audiences.
              </p>
            </div>
            <div className="mm-about__stats">
              <div className="mm-stat">
                <span className="mm-stat__number text-gradient">100K+</span>
                <span className="mm-stat__label">Page Views Generated</span>
              </div>
              <div className="mm-stat">
                <span className="mm-stat__number text-gradient">3+</span>
                <span className="mm-stat__label">Outlets Published</span>
              </div>
              <div className="mm-stat">
                <span className="mm-stat__number text-gradient">2</span>
                <span className="mm-stat__label">Multimedia Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
