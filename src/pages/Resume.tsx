import { journalist, resumeData } from "../data/portfolioData";
import "./Resume.css";

export default function Resume() {
  return (
    <main className="page-enter resume-page">
      {/* Header */}
      <section className="resume-header">
        <div className="container resume-header__inner">
          <div className="resume-header__info">
            <p className="section-eyebrow">Curriculum Vitae</p>
            <h1 className="heading-xl">{journalist.name}</h1>
            <p className="resume-header__subtitle">Multimedia Journalist · Business & Tech Reporter · Data Storyteller</p>
            <div className="resume-header__contacts">
              <a href={`mailto:${journalist.email}`} className="resume-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {journalist.email}
              </a>
              <a href={`tel:${journalist.phone}`} className="resume-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.9a16 16 0 0 0 6.14 6.14l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {journalist.phone}
              </a>
              <span className="resume-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {journalist.location}
              </span>
            </div>
          </div>
          <div className="resume-header__avatar">
            <div className="resume-avatar">TC</div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container resume-body">

          {/* Sidebar */}
          <aside className="resume-sidebar">

            {/* Skills */}
            <div className="resume-block">
              <h2 className="resume-block__title">Skills</h2>
              {resumeData.skills.map((skillGroup) => (
                <div key={skillGroup.category} className="skill-group">
                  <h4 className="skill-group__label">{skillGroup.category}</h4>
                  <div className="skill-group__items">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="resume-block">
              <h2 className="resume-block__title">Education</h2>
              {resumeData.education.map((edu) => (
                <div key={edu.institution} className="edu-item">
                  <span className="edu-item__period">{edu.period}</span>
                  <h3 className="edu-item__institution">{edu.institution}</h3>
                  <p className="edu-item__degree">{edu.degree}</p>
                  <p className="edu-item__location">{edu.location}</p>
                  {edu.details.map((d) => (
                    <p key={d} className="edu-item__detail">🏅 {d}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Research */}
            <div className="resume-block">
              <h2 className="resume-block__title">Research & Publications</h2>
              {resumeData.research.map((r) => (
                <div key={r.title} className="research-item">
                  <span className="research-item__date">{r.date} · {r.location}</span>
                  <h4 className="research-item__title">{r.title}</h4>
                  <p className="research-item__desc">{r.description}</p>
                  {r.url && (
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="research-item__link">
                      DOI →
                    </a>
                  )}
                </div>
              ))}
            </div>

          </aside>

          {/* Main content */}
          <div className="resume-main">
            <div className="resume-block">
              <h2 className="resume-block__title">Work Experience</h2>
              {resumeData.experience.map((exp, index) => (
                <div key={exp.company} className={`exp-item ${index < resumeData.experience.length - 1 ? "exp-item--bordered" : ""}`}>
                  <div className="exp-item__header">
                    <div className="exp-item__left">
                      <h3 className="exp-item__company">{exp.company}</h3>
                      <p className="exp-item__title">{exp.title}</p>
                    </div>
                    <div className="exp-item__right">
                      <span className="exp-item__period">{exp.period}</span>
                      <span className="exp-item__location">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="exp-item__bullets">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Download hint */}
      <section className="section-sm resume-download-section">
        <div className="container">
          <div className="resume-download">
            <div>
              <h3>Want a PDF copy?</h3>
              <p>Use your browser's print function (Ctrl/Cmd + P) to save or print this resume.</p>
            </div>
            <a href={`mailto:${journalist.email}`} className="btn btn-primary">
              Contact Tina
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
