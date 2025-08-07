// timetable.js

// Data for courses
const courses = [
    { term: "Fall", code: "CSA103", title: "Business Applications I", credit: 4 },
    { term: "Fall", code: "CSD112", title: "Introduction to Web Development", credit: 4 },
    { term: "Fall", code: "CSD121", title: "Programming Concepts I", credit: 4 },
    { term: "Winter", code: "CSD123", title: "Databases I", credit: 4 },
    { term: "Winter", code: "CSD125", title: "Emerging Technology", credit: 3 },
    { term: "Winter", code: "CSD124", title: "System Analysis and Design", credit: 3 },
    { term: "Winter", code: "COM101", title: "Communications I", credit: 3 },
    { term: "Winter", code: "CSD122", title: "Programming Concepts II", credit: 4 },
    { term: "Winter", code: "CSD110", title: "Computer Networking", credit: 3 },
];

// Create table elements
const table = document.createElement("table");
const caption = document.createElement("caption");
caption.textContent = "Table 1. Current Courses";
table.appendChild(caption);

// Create table header
const thead = document.createElement("thead");
thead.innerHTML = `
  <tr>
    <th scope="col">Terms</th>
    <th scope="col">Course Code</th>
    <th scope="col">Course Title</th>
    <th scope="col">Credit Hours</th>
  </tr>
`;
table.appendChild(thead);

// Group courses by term
const tbody = document.createElement("tbody");
const grouped = { Fall: [], Winter: [] };
courses.forEach(course => grouped[course.term].push(course));


Object.keys(grouped).forEach(term => {
    grouped[term].forEach((course, index) => {
        const row = document.createElement("tr");

        if (index === 0) {
            const termCell = document.createElement("th");
            termCell.setAttribute("scope", "rowgroup");
            termCell.setAttribute("rowspan", grouped[term].length);
            termCell.textContent = term;
            row.appendChild(termCell);
        }

        const codeCell = document.createElement("th");
        codeCell.setAttribute("scope", "row");
        codeCell.textContent = course.code;

        const titleCell = document.createElement("td");
        titleCell.textContent = course.title;

        const creditCell = document.createElement("td");
        creditCell.textContent = course.credit;

        row.appendChild(codeCell);
        row.appendChild(titleCell);
        row.appendChild(creditCell);
        tbody.appendChild(row);
    });
});

table.appendChild(tbody);

// Add footer row for total credits
const tfoot = document.createElement("tfoot");
const totalCredits = courses.reduce((sum, c) => sum + c.credit, 0);
tfoot.innerHTML = `
  <tr>
    <th scope="col" colspan="3">Total</th>
    <th>${totalCredits}</th>
  </tr>
`;
table.appendChild(tfoot);

// Inject table into the section
const container = document.getElementById("making-a-table");
container.appendChild(table);
