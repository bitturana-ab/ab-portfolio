export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">Projects</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-xl font-bold">Portfolio Website</h3>
          <p>
            A modern personal portfolio website built with React and Tailwind
            CSS.
          </p>
          <a
            href="https://git-ab.vercel.app"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            app link
          </a>
        </div>
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-xl font-bold">ToDo App</h3>
          <p>
            Feature-rich task manager using React, local storage, and responsive
            design.
          </p>
          <a
            href="https://todo-ab.vercel.app"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            app link
          </a>
        </div>
      </div>
    </section>
  );
}
