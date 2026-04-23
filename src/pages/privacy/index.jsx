import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../constants.jsx";

export const PrivacyPolicy = () => {
  return (
    <HelmetProvider>
      <Container className="legal-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Privacy Policy | {meta.title}</title>
          <meta name="description" content="Privacy Policy for Carlos Padilla's website application." />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Privacy Policy</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="10">
            <p className="legal-effective">
              <strong>Effective date:</strong> 2025-01-01
            </p>

            <p>
              This privacy policy applies to the <strong>Carlos Padilla</strong> website app
              (hereby referred to as "Application") for mobile devices that was created by{" "}
              <strong>Carlos Padilla</strong> (hereby referred to as "Service Provider") as a
              Free service. This service is intended for use <em>"AS IS"</em>.
            </p>

            <h3 className="legal-section-title">Information Collection and Use</h3>
            <p>
              The Application collects information when you download and use it. This information
              may include:
            </p>
            <ul className="legal-list">
              <li>Your device's Internet Protocol address (e.g. IP address)</li>
              <li>
                The pages of the Application that you visit, the time and date of your visit,
                the time spent on those pages
              </li>
              <li>The time spent on the Application</li>
              <li>The operating system you use on your mobile device</li>
            </ul>
            <p>
              The Application does not gather precise information about the location of your
              mobile device.
            </p>
            <p>
              The Application does not use Artificial Intelligence (AI) technologies to process
              your data or provide features.
            </p>
            <p>
              The Service Provider may use the information you provided to contact you from time
              to time to provide you with important information, required notices and marketing
              promotions.
            </p>
            <p>
              For a better experience, while using the Application, the Service Provider may
              require you to provide us with certain personally identifiable information,
              including but not limited to Email, Name, Age, Gender, Birth date, Nationality.
              The information that the Service Provider request will be retained by them and
              used as described in this privacy policy.
            </p>

            <h3 className="legal-section-title">Third Party Access</h3>
            <p>
              Only aggregated, anonymized data is periodically transmitted to external services
              to aid the Service Provider in improving the Application and their service. The
              Service Provider may share your information with third parties in the ways that
              are described in this privacy statement.
            </p>
            <p>
              Please note that the Application utilizes third-party services that have their own
              Privacy Policy about handling data. Below are the links to the Privacy Policy of
              the third-party service providers used by the Application:
            </p>
            <ul className="legal-list">
              <li>
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Js
                </a>
              </li>
              <li>
                <a
                  href="https://www.chatwoot.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chatwoot
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
              </li>
              <li>
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cloudflare
                </a>
              </li>
            </ul>
            <p>
              The Service Provider may disclose User Provided and Automatically Collected
              Information:
            </p>
            <ul className="legal-list">
              <li>
                as required by law, such as to comply with a subpoena, or similar legal process;
              </li>
              <li>
                when they believe in good faith that disclosure is necessary to protect their
                rights, protect your safety or the safety of others, investigate fraud, or
                respond to a government request;
              </li>
              <li>
                with their trusted services providers who work on their behalf, do not have an
                independent use of the information we disclose to them, and have agreed to
                adhere to the rules set forth in this privacy statement.
              </li>
            </ul>

            <h3 className="legal-section-title">Opt-Out Rights</h3>
            <p>
              You can stop all collection of information by the Application easily by
              uninstalling it. You may use the standard uninstall processes as may be available
              as part of your mobile device or via the mobile application marketplace or
              network.
            </p>

            <h3 className="legal-section-title">Data Retention Policy</h3>
            <p>
              The Service Provider will retain User Provided data for as long as you use the
              Application and for a reasonable time thereafter. If you'd like them to delete
              User Provided Data that you have provided via the Application, please contact them
              at{" "}
              <a href="mailto:contact@carlospadilla.co">contact@carlospadilla.co</a> and they
              will respond in a reasonable time.
            </p>

            <h3 className="legal-section-title">Children</h3>
            <p>
              The Service Provider does not use the Application to knowingly solicit data from
              or market to children under the age of 13.
            </p>
            <p>
              The Application does not address anyone under the age of 13. The Service Provider
              does not knowingly collect personally identifiable information from children under
              13 years of age. In the case the Service Provider discover that a child under 13
              has provided personal information, the Service Provider will immediately delete
              this from their servers. If you are a parent or guardian and you are aware that
              your child has provided us with personal information, please contact the Service
              Provider at{" "}
              <a href="mailto:contact@carlospadilla.co">contact@carlospadilla.co</a> so that
              they will be able to take the necessary actions.
            </p>

            <h3 className="legal-section-title">Security</h3>
            <p>
              The Service Provider is concerned about safeguarding the confidentiality of your
              information. The Service Provider provides physical, electronic, and procedural
              safeguards to protect information the Service Provider processes and maintains.
            </p>

            <h3 className="legal-section-title">Changes</h3>
            <p>
              This Privacy Policy may be updated from time to time for any reason. The Service
              Provider will notify you of any changes to the Privacy Policy by updating this
              page with the new Privacy Policy. You are advised to consult this Privacy Policy
              regularly for any changes, as continued use is deemed approval of all changes.
            </p>

            <h3 className="legal-section-title">Your Consent</h3>
            <p>
              By using the Application, you are consenting to the processing of your
              information as set forth in this Privacy Policy now and as amended by us.
            </p>

            <h3 className="legal-section-title">Contact Us</h3>
            <p>
              If you have any questions regarding privacy while using the Application, or have
              questions about the practices, please contact the Service Provider via email at{" "}
              <a href="mailto:contact@carlospadilla.co">contact@carlospadilla.co</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
