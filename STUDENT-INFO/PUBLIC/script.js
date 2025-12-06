document.getElementById("studentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const studentData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value
    };

    const res = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData)
    });

    const data = await res.json();
    alert(data.message);

    loadStudents();
});

async function loadStudents() {
    const res = await fetch("http://localhost:5000/api/students");
    const students = await res.json();

    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(stu => {
        const li = document.createElement("li");
        li.textContent = `${stu.name} - ${stu.email} - ${stu.course}`;
        list.appendChild(li);
    });
}

// Load on page start
loadStudents();
