// Load units for selected subject
document.addEventListener('DOMContentLoaded', () => {
    const selectedCourse = sessionStorage.getItem('selectedCourse');
    const selectedSubject = sessionStorage.getItem('selectedSubject');
    
    if (!selectedCourse || !selectedSubject) {
        window.location.href = 'course.html';
        return;
    }
    
    const subject = courseData[selectedCourse].subjects[selectedSubject];
    const subjectTitle = document.getElementById('subjectTitle');
    const subjectSubtitle = document.getElementById('subjectSubtitle');
    const unitCards = document.getElementById('unitCards');
    const backLink = document.getElementById('backLink');
    
    subjectTitle.textContent = `${selectedSubject} - Select the Unit`;
    subjectSubtitle.textContent = `Choose a unit from ${selectedSubject} to access study materials`;
    
    backLink.href = `subject.html`;
    
    // Generate unit cards
    Object.keys(subject.units).forEach(unitName => {
        const unit = subject.units[unitName];
        
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => selectUnit(unitName);
        
        card.innerHTML = `
            <div class="card-icon">📚</div>
            <div class="card-title">${unitName}</div>
            <div class="card-description">${unit.name}</div>
        `;
        
        unitCards.appendChild(card);
    });
});

function selectUnit(unitName) {
    sessionStorage.setItem('selectedUnit', unitName);
    window.location.href = 'material.html';
}
