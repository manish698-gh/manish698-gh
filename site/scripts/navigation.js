// navigation.js

// Create <nav> element
const nav = document.createElement("nav");

// Create <ul> for nav items
const navList = document.createElement("ul");

// Navigation items as [text, href] pairs
const navItems = [
    ["Home", "index.html"],
    ["Links", "links.html"],
    ["Glossary", "glossary.html"]
];

// Loop through items
navItems.forEach(([text, href]) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    li.appendChild(a);
    navList.appendChild(li);
});

// Add list to nav
nav.appendChild(navList);

// Inject nav into the header with id="top"
const header = document.getElementById("top");
header.appendChild(nav);
