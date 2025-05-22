const glossary = [
    { term: "Wicket", description: "A set of stumps and bails used as a target by the bowler." },
    { term: "Over", description: "A set of six legal deliveries bowled by one player." },
    { term: "All-rounder", description: "A player who excels at both batting and bowling." },
    { term: "LBW", description: "Leg Before Wicket — a rule where the batter is out if the ball hits their leg in front of the stumps." },
    { term: "Century", description: "When a batsman scores 100 runs in a single innings." }
];

const main = document.getElementById("creating-a-glossary");

const heading = document.createElement("h1");
heading.textContent = "Glossary";
main.appendChild(heading);

const dl = document.createElement("dl");
glossary.forEach(entry => {
    const dt = document.createElement("dt");
    dt.textContent = entry.term;

    const dd = document.createElement("dd");
    dd.textContent = entry.description;

    dl.appendChild(dt);
    dl.appendChild(dd);
});
main.appendChild(dl);
