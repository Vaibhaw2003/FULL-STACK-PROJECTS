# ExamSathi - Your Exam Partner 📚

**Tagline:** Study Smart, Not Hard.

## 🎯 Overview

ExamSathi is a multi-page educational website designed for college students preparing for exams. It provides organized, exam-focused study material including unit-wise notes, curated YouTube videos, book references, and an AI chatbot assistant.

## ✨ Features

- **Course Selection**: Choose from B.Tech, MCA, MBA, B.Sc, BBA, M.Tech
- **Subject-wise Organization**: Navigate through subjects specific to your course
- **Unit-wise Study Materials**: Access structured content organized by units
- **Read-only Notes**: Study notes with copy/download protection
- **Video Lectures**: Embedded YouTube videos for visual learning
- **Book References**: Recommended books with author information
- **AI Chatbot**: Get instant help with your questions (Gemini API ready)
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Clean Modern UI**: Easy-to-use interface with smooth navigation

## 📁 Project Structure

```
ExamSathi/
├── index.html          # Homepage
├── course.html         # Course selection page
├── subject.html        # Subject selection page
├── unit.html          # Unit selection page
├── material.html      # Study material page
├── about.html         # About page
├── contact.html       # Contact page
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   ├── data.js        # Course data structure
│   ├── course.js      # Course page logic
│   ├── subject.js     # Subject page logic
│   ├── unit.js        # Unit page logic
│   ├── material.js    # Material page logic
│   └── contact.js     # Contact form logic
└── assets/            # Images and other assets

```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required for basic functionality

### Installation

1. Open the project folder
2. Open `index.html` in your web browser
3. Start exploring!

**OR** use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📖 Usage

1. **Homepage**: Click "Start Learning" to begin
2. **Select Course**: Choose your course (e.g., B.Tech, MCA)
3. **Select Subject**: Pick a subject from the available options
4. **Select Unit**: Choose the unit you want to study
5. **Study Material**: Access notes, videos, books, and chatbot help

## 🎨 Features in Detail

### Notes Protection
- Text selection disabled
- Right-click disabled
- Copy/paste shortcuts blocked
- Students can only read, not download

### Chatbot Integration
The chatbot UI is ready. To integrate Google Gemini API:

1. Get your API key from Google AI Studio
2. Open `js/material.js`
3. Uncomment the `callGeminiAPI` function
4. Add your API key
5. Replace the placeholder `getBotResponse` function

Example API integration is provided in comments in `material.js`.

### Adding Content

To add more courses, subjects, or units:

1. Open `js/data.js`
2. Follow the existing data structure
3. Add your content in the `courseData` object
4. Add notes in HTML format
5. Add YouTube video IDs
6. Add book references

Example structure:
```javascript
"Subject Name": {
    icon: "🔗",
    fullName: "Full Subject Name",
    units: {
        "Unit 1": {
            name: "Unit Title",
            notes: `<h3>HTML content here</h3>`,
            videos: [
                {
                    title: "Video Title",
                    videoId: "YouTube_Video_ID"
                }
            ],
            books: [
                {
                    title: "Book Title",
                    author: "Author Name"
                }
            ]
        }
    }
}
```

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #8b5cf6;
    /* ... more colors */
}
```

### Course Icons
Change emoji icons in `js/data.js` for courses, subjects, etc.

## 🔮 Future Enhancements

- Backend integration for user authentication
- Progress tracking for students
- Quiz and assessment features
- Discussion forums
- Downloadable PDF notes (with authentication)
- Advanced search functionality
- Bookmark favorite topics
- Dark mode toggle
- Multiple language support

## 🛠️ Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Interactivity and functionality
- **YouTube API**: Video embedding
- **Google Gemini API**: AI chatbot (ready to integrate)

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🤝 Contributing

To add more content or improve the website:

1. Add more courses in `data.js`
2. Enhance UI/UX in `style.css`
3. Add new features in respective JS files
4. Test thoroughly before deploying

## 📄 License

This project is open for educational purposes.

## 👨‍💻 Developer Notes

- All data is currently stored in `js/data.js` (frontend only)
- Session storage is used to track user navigation
- No backend required for basic functionality
- Contact form currently shows success message (no actual email sent)
- Chatbot uses placeholder responses (integrate Gemini API for real functionality)

## 🎓 For Students

ExamSathi helps you:
- Find exam-focused content quickly
- Study organized material unit-wise
- Watch relevant video lectures
- Get book recommendations
- Ask questions to AI assistant
- Stay focused during exam time

## 📞 Support

For questions or feedback, use the Contact page on the website.

---

**Built with ❤️ for students preparing for exams**

*Study Smart, Not Hard!*
