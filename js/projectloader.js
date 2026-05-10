async function load() {
    const response = await fetch("/data/projects.json");
    const projects = await response.json();
    const container = document.getElementById("projects");

    projects.forEach(project => {
        const div = document.createElement("div");
        div.className = "project";
        div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        `;
        div.onclick = () => {
            redirect(project.id);
        };
        container.appendChild(div);
    });
}
load();