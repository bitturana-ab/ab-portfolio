export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-600 text-white p-10 text-center shadow-lg">
      <img
        src="https://avatars.githubusercontent.com/u/190331092?v=4"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg"
      />
      <h1 className="text-5xl font-bold mt-4">Bittu Rana</h1>
      <p className="text-xl mt-2">Full Stack Developer</p>
      <button className="mt-5 px-6 py-2 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-blue-100 transition">
        Download Resume
      </button>
    </header>
  );
}
