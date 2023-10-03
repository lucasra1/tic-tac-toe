import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">TicTacToe Web Application</h1>
        <p className="text-lg">Welcome to the TicTacToe web application. Engage in a classic game of TicTacToe right within your browser.</p>
      </header>

      <div className="flex flex-col space-y-4">
        <Link
          to="/test"
          className="bg-blue-600 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log("Play vs Bot")}
        >
          Solo Play (vs Bot)
        </Link>
        <Link
          to="/test2"
          className="bg-blue-600 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log("Local vs Player")}
        >
          Local Multiplayer
        </Link>
        <Link
          to="/test3"
          className="bg-blue-600 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log("Online vs Player")}
        >
          Online Multiplayer (WebRTC)
        </Link>
      </div>
    </div>
  );
}
