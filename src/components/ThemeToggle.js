import React, { useState } from 'react';

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle the theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);

    // Change the background color of the entire body
    document.body.style.backgroundColor = darkMode ? 'white' : '#333';
    document.body.style.color = darkMode ? 'black' : 'white';
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </h1>
        <p className="mb-6">
          Click the button below to switch between dark and light themes.
        </p>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
