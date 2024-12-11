# IS117midterm
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Educational Website</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <!-- Homepage -->
    <header class="header">
        <div class="container">
            <h1>Learn and Grow</h1>
            <p>Your guide to mastering essential tech skills</p>
            <a href="#content" class="cta">Get Started</a>
        </div>
    </header>

    <nav class="navbar">
        <ul>
            <li><a href="#history">History of the Internet</a></li>
            <li><a href="#git">Git</a></li>
            <li><a href="#linux">Linux</a></li>
            <li><a href="#web">Web Technologies</a></li>
        </ul>
    </nav>

    <!-- Content Pages -->
    <main id="content">
        <section id="history" class="content-section">
            <h2>The History of the Internet</h2>
            <p>Explore the origins and evolution of the internet, from ARPANET to the modern web.</p>
        </section>

        <section id="git" class="content-section">
            <h2>Git - Version Control Essentials</h2>
            <p>Learn how to track and manage changes in your projects using Git.</p>
            <a href="resources/git-cheat-sheet.pdf" download>Download Git Cheat Sheet</a>
        </section>

        <section id="linux" class="content-section">
            <h2>Linux - The Power of the Terminal</h2>
            <p>Master the Linux command line and enhance your productivity.</p>
            <a href="resources/linux-commands.pdf" download>Download Linux Commands Guide</a>
        </section>

        <section id="web" class="content-section">
            <h2>Web Technologies</h2>
            <p>Understand the basics of HTML, CSS, and JavaScript to build your own websites.</p>
            <a href="resources/web-dev-basics.pdf" download>Download Web Dev Basics</a>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Educational Website. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
