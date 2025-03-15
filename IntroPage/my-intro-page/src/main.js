import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind styles

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Landon Boyd</h1>
        <p className="text-gray-600">I.T. Student - Junior</p>
      </header>
      
      {/* Profile Picture */}
      <img
        src="IntroPage\my-intro-page\IMG_20250123_191320582.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
      />

      {/* About Section */}
      <section className="my-8 text-center max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700">About Me</h2>
        <p className="text-gray-600 mt-2">
          Brief introduction about yourself. Customize this text to describe your
          background, interests, and goals.
        </p>
      </section>
      
      {/* Education Section */}
      <section className="my-8 text-center max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700">Education</h2>
        <p className="text-gray-600 mt-2">Arkansas Tech University, I.T. Associates Degree. Currently Aiming For Bachelors.</p>
        <p className="text-gray-600 mt-2">Bryant High School, Graduated with 4.2 GPA</p>
      </section>

      {/* Contact Section */}
      <section className="my-8 text-center max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700">Contact</h2>
        <p className="text-gray-600 mt-2">Email: <a href="mailto:lboyd11@atu.edu" className="text-blue-500">lboyd11@atu.edu</a></p>
        <p className="text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/landon-boyd-998080295/" className="text-blue-500">My LinkedIn Profile</a></p>
      </section>
    </div>
  );
};

export default App;
