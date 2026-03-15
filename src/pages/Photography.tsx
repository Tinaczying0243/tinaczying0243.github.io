import "./Photography.css";

// Photography grid items — placeholders linking to the ReadyMag multimedia project
// which features photography from the Fulbright project
const photoItems = [
  {
    id: 1,
    caption: "Fulbright scholars gather at the University of Alabama — a group portrait from Tina's multimedia investigation into the Fulbright funding freeze.",
    category: "Multimedia Reporting",
    year: "2025",
    url: "https://readymag.website/u1929452997/5452467/",
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
    emoji: "👥",
  },
  {
    id: 2,
    caption: "Community storytelling: documentary photography from Oakland business and community reporting at Oakland North.",
    category: "Community Documentary",
    year: "2024",
    url: "https://oaklandnorth.net/2024/12/16/oakland-east-bay-booksellers-reopens-after-fire/",
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
    emoji: "📚",
  },
  {
    id: 3,
    caption: "Visual journalism from the UC Berkeley Media Anthropology Conference — curating exhibitions from visually impaired photographers.",
    category: "Exhibition / Curation",
    year: "2023",
    url: "https://readymag.website/u1929452997/5452467/",
    gradient: "linear-gradient(135deg, #F97316, #FBBF24)",
    emoji: "🎨",
  },
  {
    id: 4,
    caption: "Election night live coverage — documentary photography tracking candidates and voters across San Francisco precincts.",
    category: "News Photography",
    year: "2024",
    url: "https://missionlocal.org/2024/11/election-2024-live-updates-from-across-san-francisco-november-races/",
    gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
    emoji: "🗳️",
  },
  {
    id: 5,
    caption: "Bay Area street photography capturing the Labubu toy craze — documenting how pop culture becomes local entrepreneurship.",
    category: "Street / Culture",
    year: "2025",
    url: "https://www.mercurynews.com/2025/07/22/labubu-craze-creativity-bay-area-businesses/",
    gradient: "linear-gradient(135deg, #EC4899, #8B5CF6)",
    emoji: "🪆",
  },
  {
    id: 6,
    caption: "Data visualization and graphic reporting — combining photography with charts and maps for interactive data storytelling.",
    category: "Data Journalism",
    year: "2025",
    url: "https://edisonyzwu.github.io/interactive/",
    gradient: "linear-gradient(135deg, #1D4ED8, #8B5CF6)",
    emoji: "📊",
  },
];

export default function Photography() {
  return (
    <main className="page-enter">
      {/* Header */}
      <section className="page-hero page-hero--photography">
        <div className="container">
          <p className="section-eyebrow">Portfolio</p>
          <h1 className="heading-xl">Photography</h1>
          <p className="page-hero__desc">
            Documentary and photojournalism work spanning community events, election night
            coverage, multimedia investigations, and visual storytelling across the Bay Area.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="section">
        <div className="container">
          <div className="photo-grid">
            {photoItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="photo-card card"
              >
                <div
                  className="photo-card__image"
                  style={{ background: item.gradient }}
                >
                  <span className="photo-card__emoji">{item.emoji}</span>
                  <div className="photo-card__overlay">
                    <span>View Story →</span>
                  </div>
                </div>
                <div className="photo-card__info">
                  <div className="photo-card__meta">
                    <span className="tag tag-orange">{item.category}</span>
                    <span className="photo-card__year">{item.year}</span>
                  </div>
                  <p className="photo-card__caption">{item.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Curation note */}
      <section className="section-sm photo-note-section">
        <div className="container">
          <div className="photo-note">
            <div className="photo-note__icon">📷</div>
            <div className="photo-note__text">
              <h3>Exhibition Curation</h3>
              <p>
                In June 2023, Tina curated a non-visual photography exhibition at the
                3rd Media Anthropology Conference in Zhuhai, showcasing works from
                visually impaired photographers and exploring the idea of "photos of
                emotions" as an ethnographic method.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
