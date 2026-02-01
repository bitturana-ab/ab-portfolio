export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto p-6 bg-white rounded shadow"
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">Projects</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-xl font-bold">Acefx Post Production</h3>
          <p>
            A single workspace for modern post-production. Centralize assets,
            reviews, and approvals in one professional workspace.
          </p>
          <a
            href="https://www.acefx.in/"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            acefx.in
          </a>
        </div>
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-xl font-bold">Fast Food Delivery Platform</h3>
          <p>Fresh, Fast, and Flavorful Delivered hot in 15 minutes!</p>
          <a
            href="https://yotukka.com/"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            yotukka.com
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
            productivity master
          </a>
        </div>
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-xl font-bold">Acefx Contact</h3>
          <p>Contact to Acefx for Post Production Media work Related</p>
          <a
            href="https://acefx-contact-form.vercel.app/"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            contact-acefx
          </a>
        </div>
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-xl font-bold">Libarary Management Web</h3>
          <p>
            Feature-rich task manager using React, local storage, and responsive
            design.
          </p>
          <a
            href="https://ab-library.vercel.app/"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            ab-library
          </a>
        </div>
      </div>
    </section>
  );
}
