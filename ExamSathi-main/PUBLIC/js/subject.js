// Load subjects for selected course
document.addEventListener('DOMContentLoaded', () => {
    const selectedCourse = sessionStorage.getItem('selectedCourse');
    
    if (!selectedCourse) {
        window.location.href = 'course.html';
        return;
    }
    
    const course = courseData[selectedCourse];
    const courseTitle = document.getElementById('courseTitle');
    const courseSubtitle = document.getElementById('courseSubtitle');
    const subjectCards = document.getElementById('subjectCards');
    
    courseTitle.textContent = `${selectedCourse} - Choose Your Subject`;
    courseSubtitle.textContent = `Select a subject from ${selectedCourse} to continue`;
    
    // Generate subject cards
    Object.keys(course.subjects).forEach(subjectName => {
        const subject = course.subjects[subjectName];
        
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => selectSubject(subjectName);
        
        card.innerHTML = `
            <div class="card-icon">${subject.icon}</div>
            <div class="card-title">${subjectName}</div>
            <div class="card-description">${subject.fullName}</div>
        `;
        
        subjectCards.appendChild(card);
    });
});

function selectSubject(subjectName) {
    sessionStorage.setItem('selectedSubject', subjectName);
    window.location.href = 'unit.html';
}
