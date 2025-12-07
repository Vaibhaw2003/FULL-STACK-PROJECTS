// Load study materials for selected unit
document.addEventListener('DOMContentLoaded', () => {
    const selectedCourse = sessionStorage.getItem('selectedCourse');
    const selectedSubject = sessionStorage.getItem('selectedSubject');
    const selectedUnit = sessionStorage.getItem('selectedUnit');
    
    if (!selectedCourse || !selectedSubject || !selectedUnit) {
        window.location.href = 'course.html';
        return;
    }
    
    const unit = courseData[selectedCourse].subjects[selectedSubject].units[selectedUnit];
    
    // Update page title
    const materialTitle = document.getElementById('materialTitle');
    const materialSubtitle = document.getElementById('materialSubtitle');
    const backLink = document.getElementById('backLink');
    
    materialTitle.textContent = `${selectedSubject} - ${selectedUnit}`;
    materialSubtitle.textContent = unit.name;
    backLink.href = 'unit.html';
    
    // Load notes PDF
    loadNotesPdf(unit.notesPdf);
    
    // Load videos
    loadVideos(unit.videos);
    
    // Load books
    loadBooks(unit.books);
    
    // Initialize chatbot
    initializeChatbot();
});

function loadNotesPdf(pdfPath) {
    const notesContent = document.getElementById('notesContent');
    
    if (!pdfPath) {
        notesContent.innerHTML = '<p style="text-align: center; color: #6b7280;">No PDF notes available for this unit yet.</p>';
        return;
    }
    
    // Create PDF embed
    notesContent.innerHTML = `
        <iframe 
            src="${pdfPath}" 
            width="100%" 
            height="600px" 
            style="border: none; border-radius: 8px;"
            title="PDF Notes Viewer">
            <p>Your browser does not support PDFs. 
            <a href="${pdfPath}" target="_blank">Download the PDF</a> to view.</p>
        </iframe>
    `;
}

function loadVideos(videos) {
    const videosContainer = document.getElementById('videosContainer');
    
    if (!videos || videos.length === 0) {
        videosContainer.innerHTML = '<p>No video lectures available yet.</p>';
        return;
    }
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        
        videoCard.innerHTML = `
            <div class="video-embed">
                <iframe 
                    src="https://www.youtube.com/embed/${video.videoId}" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-title">${video.title}</div>
        `;
        
        videosContainer.appendChild(videoCard);
    });
}

function loadBooks(books) {
    const booksContainer = document.getElementById('booksContainer');
    
    if (!books || books.length === 0) {
        booksContainer.innerHTML = '<p>No book references available yet.</p>';
        return;
    }
    
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
        `;
        
        booksContainer.appendChild(bookCard);
    });
}

// Chatbot functionality
function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotBody = document.getElementById('chatbotBody');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotHeader = document.getElementById('chatbotHeader');
    
    // Toggle chatbot
    chatbotToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        chatbotBody.classList.toggle('hidden');
        chatbotToggle.textContent = chatbotBody.classList.contains('hidden') ? '+' : '−';
    });
    
    chatbotHeader.addEventListener('click', () => {
        chatbotBody.classList.toggle('hidden');
        chatbotToggle.textContent = chatbotBody.classList.contains('hidden') ? '+' : '−';
    });
    
    // Send message
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function sendMessage() {
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const message = chatbotInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = message;
    chatbotMessages.appendChild(userMessage);
    
    // Clear input
    chatbotInput.value = '';
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Simulate bot response (replace with actual Gemini API call)
    setTimeout(() => {
        addBotMessage(getBotResponse(message));
    }, 1000);
}

function addBotMessage(message) {
    const chatbotMessages = document.getElementById('chatbotMessages');
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.textContent = message;
    chatbotMessages.appendChild(botMessage);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    // This is a placeholder. Replace with actual Gemini API integration
    const responses = [
        "That's a great question! Let me help you understand that concept better.",
        "Based on the study material, here's what I can tell you...",
        "I can help clarify that topic for you. Would you like more details?",
        "That's an important concept in this unit. Let me explain...",
        "Good question! This relates to the main topics we're studying."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

// Note: To integrate Google Gemini API, you would need to:
// 1. Add your API key
// 2. Make API calls to Gemini endpoint
// 3. Handle responses and display them in the chatbot
// 
// Example API integration (add this when ready):
// 
// async function callGeminiAPI(message) {
//     const API_KEY = 'YOUR_GEMINI_API_KEY';
//     const API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';
//     
//     try {
//         const response = await fetch(`${API_URL}?key=${API_KEY}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 contents: [{
//                     parts: [{
//                         text: message
//                     }]
//                 }]
//             })
//         });
//         
//         const data = await response.json();
//         return data.candidates[0].content.parts[0].text;
//     } catch (error) {
//         console.error('Error calling Gemini API:', error);
//         return 'Sorry, I encountered an error. Please try again.';
//     }
// }
