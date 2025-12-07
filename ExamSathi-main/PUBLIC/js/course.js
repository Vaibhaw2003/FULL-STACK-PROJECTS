// Load courses dynamically
document.addEventListener('DOMContentLoaded', () => {
    const courseCards = document.getElementById('courseCards');
    
    // Generate course cards
    Object.keys(courseData).forEach(courseName => {
        const course = courseData[courseName];
        
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => selectCourse(courseName);
        
        card.innerHTML = `
            <div class="card-icon">${course.icon}</div>
            <div class="card-title">${courseName}</div>
            <div class="card-description">${course.description}</div>
        `;
        
        courseCards.appendChild(card);
    });
});

function selectCourse(courseName) {
    // Store selected course in sessionStorage
    sessionStorage.setItem('selectedCourse', courseName);
    // Navigate to subject page
    window.location.href = 'subject.html';
}
