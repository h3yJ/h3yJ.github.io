const profile = {
  name: "Jason Yang",
  title: "Machine Learning + Data Science",
  phone: "(859) 489-3932",
  email: "jason.yang859@gmail.com",
  linkedin: "https://www.linkedin.com/in/jyang24/",
  resume: "Jason_Yang_Resume_Oct2025.pdf",
  summary:
    "Graduate student focused on machine learning and scalable data systems, with hands-on experience in analytics, full-stack applications, and research leadership.",
};

const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "M.S. in Computer Science",
    date: "August 2025 - Present",
    details: ["Specialization in Machine Learning", "Relevant Coursework: Machine Learning"],
  },
  {
    school: "Purdue University",
    degree: "B.S. in Data Science",
    date: "July 2021 - December 2024",
    details: [
      "Minor in Biological Sciences and Computer Science",
      "Relevant Coursework: Object-oriented Programming, Foundations of Computer Science, Python Programming, Statistics for Data Science, Probability, Data Structures and Algorithms, Statistical Theory, Applied Regression Analysis, Introduction to Artificial Intelligence, Data Mining and Machine Learning, Large Scale Data Analytics, Statistical Programming and Data Management, Programming in C, Software Engineering I, Information Systems, Intro Bioinformatics",
    ],
  },
];

const skills = [
  {
    label: "Programming Languages",
    items: ["Python", "Java", "R", "SQL", "SAS", "C", "C++", "JavaScript"],
  },
  {
    label: "Web Application Development",
    items: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    label: "Data Analysis & Machine Learning",
    items: ["Numpy", "Pandas", "Matplotlib", "Scikit-learn", "Statsmodels", "SciPy", "Hadoop", "Spark"],
  },
  {
    label: "Databases & Platforms",
    items: ["SQL", "MongoDB", "Neo4j", "Google Cloud"],
  },
];

const experience = [
  {
    role: "Research Assistant",
    org: "Purdue University",
    date: "May 2024 - August 2025",
    bullets: [
      "Contributing to publication of four papers on educational pathways and decision-making among engineering and engineering technology students under Dr. Anne Lucietto.",
      "Analyzed survey data from ~150 students using Python, Pandas, and Matplotlib in Jupyter (VS Code) for cleaning, visualization, and insights.",
      "Supervised two research assistants by delegating tasks and running regular check-ins.",
    ],
  },
  {
    role: "Horizons Tutor",
    org: "Purdue University",
    date: "October 2023 - May 2024",
    bullets: [
      "Tutored first-generation college students in chemistry with personalized sessions.",
      "Coordinated with faculty and mentors to reinforce study habits and time management.",
    ],
  },
  {
    role: "Biomedical Informatics Mentee",
    org: "University of Kentucky",
    date: "October 2020 - June 2021",
    bullets: [
      "Built a Python RESTful API for UniProtKB data retrieval and documented usage for the research team.",
      "Partnered with Dr. Hunter Moseley on project design to improve research efficiency and accessibility.",
    ],
  },
];

const projects = [
  {
    title: "Arena God Tracker",
    date: "July 2025 - October 2025",
    bullets: [
      "React web app for tracking League of Legends arena god challenge progress.",
      "Responsive UI with dynamic search and filtering using React, JavaScript, CSS, and HTML.",
    ],
  },
  {
    title: "Predictive Stock Analysis",
    date: "August 2024 - December 2024",
    bullets: [
      "Classified stock trends using Linear SVM, Logistic Regression, Random Forest, and Decision Trees.",
      "Performed time series analysis, grid search hyperparameter tuning, and resampling; achieved 60% accuracy with Random Forest on 100k data points.",
    ],
  },
  {
    title: "CoreNet Global Academic Challenge Finalists",
    date: "September 2024 - November 2024",
    bullets: [
      "Top 3 placement for proposing AI solutions in corporate real estate.",
      "Consulted with industry experts on AI-driven predictive analytics and optimization.",
    ],
  },
  {
    title: "Investagram",
    date: "January 2024 - May 2024",
    bullets: [
      "Built a social platform for investment enthusiasts using Node.js, React, Next.js, and MongoDB with Talk.js messaging.",
      "Served as scrum master, leading sprints and stand-ups to deliver milestones.",
    ],
  },
  {
    title: "Statistical Analysis of Ford Used Car Prices",
    date: "January 2024 - May 2024",
    bullets: [
      "Analyzed 100,000 UK used Ford cars with R to identify pricing trends and significant factors.",
      "Used regression and hypothesis testing to study multicollinearity and derive insights.",
    ],
  },
  {
    title: "Mock Brightspace",
    date: "April 2022 - May 2022",
    bullets: [
      "Java-based forum platform with improved concurrency using multithreading.",
      "Designed a Swing GUI for streamlined navigation and interaction.",
    ],
  },
];

function Section({ title, children }) {
  return (
    <section className="section">
      <div className="section-title">{title}</div>
      {children}
    </section>
  );
}

function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-card">
          <div className="kicker">Resume</div>
          <h1 className="name">{profile.name}</h1>
          <p className="subtitle">{profile.title}</p>
          <div className="contact">
            <div>
              <span>Phone</span> {profile.phone}
            </div>
            <div>
              <span>Email</span> {profile.email}
            </div>
            <div>
              <span>LinkedIn</span> {profile.linkedin}
            </div>
          </div>
          <div className="actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button" href={profile.resume}>
              Download PDF
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div className="kicker">Focus</div>
          <h2 className="name">Building useful data products.</h2>
          <p className="subtitle">{profile.summary}</p>
          <div className="badges">
            <span className="badge">Machine Learning</span>
            <span className="badge">Full-Stack Apps</span>
            <span className="badge">Research</span>
            <span className="badge">Leadership</span>
          </div>
        </div>
      </header>

      <Section title="Education">
        <div className="grid">
          {education.map((item) => (
            <article className="card" key={item.school}>
              <h3>{item.school}</h3>
              <div className="meta">{item.degree}</div>
              <div className="meta">{item.date}</div>
              <ul className="list">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="grid">
          {skills.map((skill) => (
            <article className="card" key={skill.label}>
              <h3>{skill.label}</h3>
              <div className="badges">
                {skill.items.map((item) => (
                  <span className="badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <div className="grid">
          {experience.map((item) => (
            <article className="card" key={`${item.org}-${item.role}`}>
              <h3>{item.role}</h3>
              <div className="meta">{item.org}</div>
              <div className="meta">{item.date}</div>
              <ul className="list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="grid">
          {projects.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <div className="meta">{item.date}</div>
              <ul className="list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <div className="footer">Last updated 2025 · Built with React + GitHub Pages</div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);