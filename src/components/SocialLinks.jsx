import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

<FaGithub className="text-xl text-gray-700" />;

export default function SocialLinks() {
  return (
    <section
      id="social"
      className="max-w-4xl mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">
        Connect with Me
      </h2>
      <div className="flex space-x-4 text-lg">
        <a
          href="https://github.com/bitturana-ab"
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/bitturana"
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="mailto:bitturana.er@gmail.com"
          className="text-blue-500 hover:underline"
        >
          Email
        </a>
      </div>
    </section>
  );
}
