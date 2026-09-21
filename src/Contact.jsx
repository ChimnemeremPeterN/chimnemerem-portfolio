import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const business = form.get("business");
    const projectType = form.get("projectType");
    const budget = form.get("budget");
    const timeline = form.get("timeline");
    const website = form.get("website");
    const description = form.get("description");
    const features = form.get("features");
    const contactMethod = form.get("contactMethod");

    const subject = encodeURIComponent(
      `New Project Inquiry — ${name}`
    );

    const body = encodeURIComponent(`
NEW PROJECT INQUIRY

Name:
${name}

Email:
${email}

Business / Company:
${business || "Not provided"}

Project Type:
${projectType}

Budget:
${budget}

Desired Timeline:
${timeline}

Existing Website / App:
${website || "Not provided"}

Preferred Contact Method:
${contactMethod}

PROJECT DESCRIPTION:
${description}

FEATURES / SERVICES NEEDED:
${features || "Not provided"}
    `);

    /*
      Replace YOUR_EMAIL_HERE with the email address
      where you want project inquiries sent.
    */

    window.location.href =
      `mailto:YOUR_EMAIL_HERE?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <div className="contact-page">

      <nav className="contact-nav">
        <Link to="/" className="contact-logo">
          <span>CN</span>
          Chimnemerem Nwala
        </Link>

        <Link to="/" className="back-link">
          ← Back to Portfolio
        </Link>
      </nav>

      <main className="contact-container">

        <div className="contact-heading">
          <div className="section-label">
            ✦ START A PROJECT
          </div>

          <h1>
            Let's Build Something{" "}
            <span>Great.</span>
          </h1>

          <p>
            Tell me about your project, what you're trying to accomplish,
            and what you need help with. I'll review the details and get
            back to you.
          </p>
        </div>

        <form
          className="project-form"
          onSubmit={handleSubmit}
        >

          <div className="form-section">
            <h2>👋 Tell Me About You</h2>

            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="name">
                  Your Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group full">
                <label htmlFor="business">
                  Business / Company Name
                </label>

                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Your business or brand"
                />
              </div>

            </div>
          </div>


          <div className="form-section">
            <h2>🚀 What Do You Need?</h2>

            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="projectType">
                  Project Type *
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Website Fix">
                    Website Fix / Redesign
                  </option>

                  <option value="React Application">
                    React Application
                  </option>

                  <option value="Mobile Application">
                    React Native Mobile App
                  </option>

                  <option value="AI Integration">
                    AI Integration
                  </option>

                  <option value="Automation">
                    AI / Business Automation
                  </option>

                  <option value="Other">
                    Something Else
                  </option>
                </select>
              </div>


              <div className="form-group">
                <label htmlFor="budget">
                  Estimated Budget *
                </label>

                <select
                  id="budget"
                  name="budget"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a range
                  </option>

                  <option value="Under $250">
                    Under $250
                  </option>

                  <option value="$250 - $500">
                    $250 - $500
                  </option>

                  <option value="$500 - $1,000">
                    $500 - $1,000
                  </option>

                  <option value="$1,000 - $2,500">
                    $1,000 - $2,500
                  </option>

                  <option value="$2,500+">
                    $2,500+
                  </option>

                  <option value="Not sure yet">
                    I'm not sure yet
                  </option>
                </select>
              </div>


              <div className="form-group full">
                <label htmlFor="timeline">
                  When would you like to start? *
                </label>

                <select
                  id="timeline"
                  name="timeline"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>

                  <option value="As soon as possible">
                    As soon as possible
                  </option>

                  <option value="Within 1-2 weeks">
                    Within 1–2 weeks
                  </option>

                  <option value="Within 1 month">
                    Within 1 month
                  </option>

                  <option value="1-3 months">
                    1–3 months
                  </option>

                  <option value="Just exploring">
                    Just exploring for now
                  </option>
                </select>
              </div>

            </div>
          </div>


          <div className="form-section">
            <h2>💡 Tell Me About Your Project</h2>

            <div className="form-group">
              <label htmlFor="website">
                Existing Website / App
              </label>

              <input
                id="website"
                name="website"
                type="url"
                placeholder="https://yourwebsite.com"
              />
            </div>


            <div className="form-group">
              <label htmlFor="description">
                What are you trying to build? *
              </label>

              <textarea
                id="description"
                name="description"
                rows="6"
                placeholder="Tell me about your idea, business, problem you're trying to solve, or what you want the website/app to do..."
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="features">
                Features or Services You Need
              </label>

              <textarea
                id="features"
                name="features"
                rows="5"
                placeholder="Example: online payments, booking system, user accounts, AI chatbot, dashboard, mobile app, etc."
              />
            </div>

          </div>


          <div className="form-section">
            <h2>📬 How Should I Contact You?</h2>

            <div className="form-group">
              <label htmlFor="contactMethod">
                Preferred Contact Method *
              </label>

              <select
                id="contactMethod"
                name="contactMethod"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>

                <option value="Email">
                  Email
                </option>

                <option value="Phone">
                  Phone
                </option>

                <option value="Text">
                  Text
                </option>

                <option value="Either Email or Phone">
                  Either Email or Phone
                </option>
              </select>
            </div>
          </div>


          <button
            className="submit-project"
            type="submit"
          >
            Send Project Request →
          </button>

          {submitted && (
            <p className="form-note">
              Your email application should open with your project
              information filled in.
            </p>
          )}

          <p className="privacy-note">
            🔒 Your information is only used to discuss your project.
          </p>

        </form>

      </main>

    </div>
  );
}

export default Contact;