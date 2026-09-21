const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSchzYzmsE4dpr6USNOnSKZHxhz5GrHaJWGpYjAxac6X30rcWw/viewform?usp=sharing&ouid=116238858447953983246";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    price: "Starting at $250",
    text: "Modern, responsive websites designed to help small businesses and creators build a strong online presence.",
    color: "purple",
  },
  {
    icon: "🛠️",
    title: "Website Fixes",
    price: "Starting at $75",
    text: "Fix bugs, broken layouts, responsiveness issues, and other problems on existing websites.",
    color: "blue",
  },
  {
    icon: "📱",
    title: "React / React Native",
    price: "Starting at $200",
    text: "Custom features, interfaces, and mobile experiences built with modern JavaScript and React.",
    color: "green",
  },
  {
    icon: "🤖",
    title: "AI Integrations",
    price: "Custom Pricing",
    text: "Add AI-powered features and automation to websites and applications based on your needs.",
    color: "orange",
  },
];

const projects = [
  {
    title: "ALLTHINGSFITNESS",
    tag: "Fitness • Community • Mobile",
    text: "A fitness community application combining food tracking, recipes, social content, clubs, and fitness features.",
    color: "green",
  },
  {
    title: "Job Copilot",
    tag: "AI • Productivity • Web",
    text: "An AI-powered job application assistant designed to help users analyze jobs and tailor application materials.",
    color: "blue",
  },
  {
    title: "Personal AI Assistant",
    tag: "AI • Automation • Web",
    text: "An AI assistant concept focused on helping users automate tasks and interact with useful tools from one place.",
    color: "pink",
  },
];

const technologies = [
  "Python",
  "JavaScript",
  "React",
  "React Native",
  "Node.js",
  "Git & GitHub",
  "Java",
  "C++",
];

function GoogleFormButton({ children, className = "" }) {
  return (
    <a
      className={className}
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function App() {
  return (
    <div className="site">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span>CN</span>
          <strong>Chimnemerem Nwala</strong>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>

        <GoogleFormButton className="nav-button">
          Contact Me
        </GoogleFormButton>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span></span>
            Freelance • Available Now
          </div>

          <h1>
            Chimnemerem
            <br />
            <span>Nwala</span>
          </h1>

          <h2>WEB & AI DEVELOPER</h2>

          <p>
            I build modern websites, applications, and AI-powered tools for
            businesses, creators, and entrepreneurs.
          </p>

          <div className="hero-buttons">
            <GoogleFormButton className="primary-button">
              ✈ Start a Project
            </GoogleFormButton>

            <a className="secondary-button" href="#projects">
              View My Projects →
            </a>
          </div>

          <div className="benefits">
            <span>⚡ Fast Delivery</span>
            <span>🛡️ Clean Code</span>
            <span>★ Client Focused</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="glow-orb"></div>

          <div className="code-card">
            <div className="window-buttons">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <div className="code-line purple-line">
              &lt;Developer /&gt;
            </div>

            <div className="code-line blue-line">
              build<span>()</span>
            </div>

            <div className="code-line pink-line">
              create<span>()</span>
            </div>

            <div className="code-line green-line">
              innovate<span>()</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-label">✦ MY SERVICES</div>

        <h2 className="section-title">
          What I Can Do <span>For You</span>
        </h2>

        <p className="section-description">
          Development services designed to help turn your ideas into useful
          digital products.
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <article
              className={`service-card ${service.color}`}
              key={service.title}
            >
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <strong>{service.price}</strong>

              <p>{service.text}</p>

              <GoogleFormButton>
                Get Started →
              </GoogleFormButton>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-label">✦ FEATURED PROJECTS</div>

        <h2 className="section-title">
          Real Projects. <span>Real Impact.</span>
        </h2>

        <p className="section-description">
          Some of the digital products I've built and am working on.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.color}`}
              key={project.title}
            >
              <div className="project-visual">
                <div className="project-glow"></div>

                <div className="project-window">
                  <div className="mini-dot"></div>
                  <div className="mini-dot"></div>
                  <div className="mini-dot"></div>

                  <div className="fake-interface">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <small>{project.tag}</small>

                <h3>{project.title}</h3>

                <p>{project.text}</p>

                <GoogleFormButton>
                  Discuss a Similar Project →
                </GoogleFormButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="section tech-section" id="about">
        <div className="section-label">✦ TECH STACK</div>

        <h2 className="section-title">
          Tools I Work <span>With</span>
        </h2>

        <p className="section-description">
          Modern technologies for building fast, scalable, and reliable
          digital experiences.
        </p>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <div className="tech-card" key={tech}>
              <span>◆</span>
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-section" id="contact">
        <div>
          <div className="contact-icon">✉</div>
        </div>

        <div className="contact-text">
          <h2>
            Let's Work <span>Together</span>
          </h2>

          <p>
            Have a website, application, or AI idea? Tell me what you're
            building and I'll help you figure out the next step.
          </p>
        </div>

        <GoogleFormButton className="primary-button">
          Start Your Project →
        </GoogleFormButton>
      </section>

      {/* FOOTER */}
      <footer>
        <strong>CN</strong>

        <span>Chimnemerem Nwala</span>

        <span>Web & AI Developer</span>

        <span className="footer-right">
          Build • Create • Innovate
        </span>
      </footer>
    </div>
  );
}

export default App;