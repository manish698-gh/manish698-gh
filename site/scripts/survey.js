// survey.js

const formContainer = document.getElementById("creating-a-web-form");

const form = document.createElement("form");
form.action = "https://formspree.io/f/mdkzgbno";
form.method = "post";

// Helper to create labeled input fields
function addInput(labelText, type, id, required = false, min = null, step = null) {
    const p = document.createElement("p");

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerHTML = labelText + (required ? ' <abbr title="required" aria-label="required">*</abbr>' : '');

    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = id;
    if (required) input.required = true;
    if (min) input.min = min;
    if (step) input.step = step;

    p.appendChild(label);
    p.appendChild(input);
    form.appendChild(p);
}

// Name
addInput("What is your name?", "text", "name_field", true);

// Email
addInput("What is your email?", "email", "email_field", true);

// Number
addInput("Which whole number is best?", "number", "best_whole_number", false, 0, 1);

// Date
addInput("Which day is best?", "date", "best_day");

// Dropdown for best bear
const pBear = document.createElement("p");
const bearLabel = document.createElement("label");
bearLabel.setAttribute("for", "best_bear");
bearLabel.innerHTML = 'Which bear is best? <abbr title="required" aria-label="required">*</abbr>';
const select = document.createElement("select");
select.id = "best_bear";
select.name = "best_bear";
select.required = true;

["", "Black", "Brown", "Care", "Panda", "Polar", "Teddy"].forEach(val => {
    const option = document.createElement("option");
    option.value = val.toLowerCase();
    option.textContent = val || "\u00A0";
    if (val === "") option.selected = true;
    select.appendChild(option);
});
pBear.appendChild(bearLabel);
pBear.appendChild(select);
form.appendChild(pBear);

// Radio buttons
const fieldset = document.createElement("fieldset");
const legend = document.createElement("legend");
legend.textContent = "Do you like radio buttons?";
fieldset.appendChild(legend);

const radioOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "None of your business", value: "?", checked: true }
];

const ul = document.createElement("ul");
radioOptions.forEach(opt => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "enjoys_radio_buttons";
    input.value = opt.value;
    if (opt.checked) input.checked = true;
    label.appendChild(input);
    label.append(` ${opt.label}`);
    li.appendChild(label);
    ul.appendChild(li);
});
fieldset.appendChild(ul);
form.appendChild(fieldset);

// Textarea
const pText = document.createElement("p");
const textLabel = document.createElement("label");
textLabel.setAttribute("for", "life_meaning");
textLabel.innerHTML = "What is the meaning of life?";
const textarea = document.createElement("textarea");
textarea.id = "life_meaning";
textarea.name = "life_meaning";
textarea.rows = 5;
textarea.cols = 50;
textarea.placeholder = "Enter the correct answer here";
pText.appendChild(textLabel);
pText.appendChild(document.createElement("br"));
pText.appendChild(textarea);
form.appendChild(pText);

// Submit button
const pSubmit = document.createElement("p");
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Send";
pSubmit.appendChild(submitBtn);
form.appendChild(pSubmit);

// Append form to container
formContainer.appendChild(form);
