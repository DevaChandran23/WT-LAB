document.addEventListener("DOMContentLoaded", fetchStudents);

function fetchStudents() {
    fetch("http://localhost:5000/students")
        .then(response => response.json())
        .then(data => displayStudents(data))
        .catch(error => console.error("Error fetching students:", error));
}

function displayStudents(students) {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";

    students.forEach(student => {
        const row = `<tr>
            <td>${student.name}</td>
            <td>${student.rollNo}</td>
            <td>${student.class}</td>
            <td>${student.email}</td>
            <td>${student.personalMail}</td>
            <td>${student.mobile}</td>
            <td>${student.whatsapp}</td>
            <td>${student.parentName}</td>
            <td>${student.parentNumber}</td>
            <td>${student.sslcMarks}</td>
            <td>${student.hscMarks}</td>
            <td>${student.sem1GPA}</td>
            <td>${student.sem1CGPA}</td>
            <td><a href="${student.github}" target="_blank">GitHub</a></td>
            <td><a href="${student.leetcode}" target="_blank">LeetCode</a></td>
            <td>${student.leetcodeProblems}</td>
            <td>
                <button onclick="deleteStudent('${student._id}')">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function deleteStudent(studentId) {
    fetch(http://localhost:5000/students/delete/${studentId}, { method: "DELETE" })
        .then(() => fetchStudents())
        .catch(error => console.error("Error deleting student:", error));
}