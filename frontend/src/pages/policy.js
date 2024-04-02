import Navbar from "../components/navbar";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Signup from "../components/Signup";
import Login from "../components/login";

export default function Policy() {
  return (
    <div>
      <Navbar />
      <div className="policyContainer">
        <h1>Privacy Policy for LuckyLk.com</h1>
        <h2>
          Effective Date: March 10, 2024. <br /> Thank you for choosing
          LuckyLk.com. This Privacy Policy outlines the types of information we
          collect, how we use and protect that information, and your choices
          regarding your personal data. <br />
          By using our website, you agree to the terms outlined in this policy.
          <br /> 1. Information We Collect: a. Personal Information: When you
          register on LuckyLk.com, we may collect personal information such as
          your name, email address, and contact details. <br />
          b. Non-Personal Information: We may automatically collect non-personal
          information such as IP addresses, browser type, and device information
          for analytics and to improve our services.
          <br /> 2. How We Use Your Information: <br /> a. Personalization: To
          personalize your experience on LuckyLk.com and provide relevant
          content and services.
          <br /> b. Communication: To communicate with you regarding your
          account, updates, and promotional offers.
          <br /> c. Analytics: To analyze website usage and improve our
          services.
          <br /> d. Security: To protect the security and integrity of our
          website and services.
          <br /> 3. Information Sharing: <br /> a. Third-Party Service
          Providers: We may share your information with trusted third-party
          service providers to assist us in delivering our services.
          <br /> b. Legal Compliance: We may disclose your information as
          required by law or to protect our rights, property, or safety. <br />
          4. Your Choices: a. Opt-Out: You have the option to opt-out of
          receiving promotional communications from us. b. Access and
          Correction: You can access and update your personal information by
          logging into your account on LuckyLk.com. <br />
          5. Security:
          <br /> a. Data Security: We implement industry-standard security
          measures to protect your personal information from unauthorized
          access.
          <br /> 6. Cookies:
          <br /> a. Cookies and Similar Technologies: We use cookies and similar
          technologies to enhance your experience and collect data for analytics
          purposes.
          <br /> 7. Children's Privacy: <br />
          a. Age Consideration: LuckyLk.com is open for users of all ages.{" "}
          <br /> b. Parental Consent: If you are under 13 years old, please seek
          permission from a parent or guardian before using our website. c. No
          Targeting of Children: We do not knowingly collect personal
          information from individuals under the age of 13 without parental
          consent. If you believe we have unintentionally collected such
          information, please contact us at{" "}
          <a href="luckyonoja2020@gmail.com">luckyonoja2020@gmail.com</a>
          so that we can promptly address the issue. By using LuckyLk.com, users
          of all ages are welcome, and we encourage parents to be involved in
          their children's online activities. If you have any questions or
          concerns about the privacy of a child using our platform, please
          contact us.
          <br /> 8. Changes to this Privacy Policy:
          <br /> a. Notification: We may update this Privacy Policy from time to
          time. Any changes will be notified on our website.
          <br /> 9. Contact Us: If you have any questions or concerns about this
          Privacy Policy, please contact us at{" "}
          <a href="luckyonoja2020@gmail.com">luckyonoja2020@gmail.com</a> <br />
          . By using LuckyLk.com, you consent to the terms outlined in this
          Privacy Policy.
        </h2>
      </div>
    </div>
  );
}
