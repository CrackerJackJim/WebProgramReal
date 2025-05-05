module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  const express = require('express');
const app = express();

app.use('/images', express.static('images'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Professional Webpage</title>
      <script src="https://kit.fontawesome.com/YOUR_KIT_ID.js" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="font-sans bg-gray-50 text-gray-800">

      <header class="bg-white shadow p-4">
        <nav class="max-w-7xl mx-auto flex justify-between">
          <h1 class="text-xl font-bold">My Portfolio</h1>
          <ul class="flex space-x-4">
            <li><a href="/" class="hover:text-blue-500">Home</a></li>
            <li><a href="/projects" class="hover:text-blue-500">Projects</a></li>
            <li><a href="/education" class="hover:text-blue-500">Education</a></li>
            <li><a href="/skills" class="hover:text-blue-500">Skills</a></li>
            <li><a href="/contact" class="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main class="flex justify-center items-center min-h-screen px-4">
        <div class="bg-white rounded-2xl shadow-lg p-8 max-w-xl text-center">
          <img src="/images/profile.jpg" alt="Profile" class="w-32 h-32 rounded-full mx-auto mb-4 shadow object-cover">
          <h2 class="text-3xl font-bold mb-2">Landon Boyd</h2>
          <p class="text-gray-600 mb-4">Aspiring Game Designer and Programmer | Passionate Video Games and UI design</p>
          <div class="flex justify-center space-x-4">
            <a href="https://github.com/CrackerJackJim" target="_blank" class="text-gray-700 hover:text-black">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </main>

      <footer class="bg-gray-100 text-center text-sm p-4">
        <p>&copy; ${new Date().getFullYear()} Landon Boyd. All rights reserved.</p>
      </footer>

    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
