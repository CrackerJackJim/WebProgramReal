app.get('/education', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Education - Professional Webpage</title>
        <script src="https://kit.fontawesome.com/YOUR_KIT_ID.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body class="bg-gray-50 font-sans text-gray-800">
  
        <header class="bg-white shadow p-4">
          <nav class="max-w-7xl mx-auto flex justify-between">
            <h1 class="text-xl font-bold">My Portfolio</h1>
            <ul class="flex space-x-4">
              <li><a href="/" class="hover:text-blue-500">Home</a></li>
              <li><a href="/projects" class="hover:text-blue-500">Projects</a></li>
              <li><a href="/education" class="text-blue-700 font-semibold">Education</a></li>
              <li><a href="/skills" class="hover:text-blue-500">Skills</a></li>
              <li><a href="/contact" class="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        </header>
  
        <main class="max-w-3xl mx-auto mt-12 px-4">
          <h2 class="text-3xl font-bold text-center mb-6">Education</h2>
          
          <div class="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 class="text-xl font-semibold mb-1">Bachelor of Information Technology</h3>
            <p class="text-gray-700">Arkansas tech University</p>
            <p class="text-gray-600 text-sm">Expected Graduation: May 2026</p>
            <ul class="list-disc list-inside mt-2 text-gray-700">
              <li>Specialization in Database Management</li>
              <li>Relevant Coursework: Hardware/Components, Game Design, Database Managment, Computer Programming</li>
              <li>GPA: 3.72 / 4.0</li>
            </ul>
          </div>
  
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-xl font-semibold mb-1">High School Diploma</h3>
            <p class="text-gray-700">Bryant High School</p>
            <p class="text-gray-600 text-sm">Graduated: May 2022</p>
            <ul class="list-disc list-inside mt-2 text-gray-700">
              <li>Honor Roll Student</li>
              <li>Quiz Bowl Member</li>
              <li>TV Journalism Anchor</li>
            </ul>
          </div>
        </main>
  
        <footer class="bg-gray-100 text-center text-sm p-4 mt-12">
          <p>&copy; ${new Date().getFullYear()} Landon Boyd. All rights reserved.</p>
        </footer>
  
      </body>
      </html>
    `);
  });
  