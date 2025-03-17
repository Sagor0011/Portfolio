/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #f8f9fa;
    transition: 0.5s ease-in-out;
}

/* Dark Mode */
.dark-mode {
    background-color: #222;
    color: white;
}

/* Header */
header {
    background-color: #343a40;
    color: white;
    padding: 20px;
}

button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}

/* Navigation */
nav {
    background-color: #444;
    padding: 10px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* Content Sections */
.container {
    background: white;
    margin: 20px auto;
    padding: 20px;
    max-width: 700px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.dark-mode .container {
    background: #333;
}

/* Profile Image */
.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

/* Skills List */
.skills-list {
    list-style: none;
    padding: 0;
}

.skills-list li {
    background: #007BFF;
    color: white;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    font-size: 16px;
}

/* Contact Section */
.container a {
    text-decoration: none;
    color: #007BFF;
    font-weight: bold;
}

/* Footer */
footer {
    background-color: #343a40;
    color: white;
    padding: 15px;
    margin-top: 20px;
}
