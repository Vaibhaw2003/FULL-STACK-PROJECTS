# ExamSathi - Quick Start Guide 🚀

## Instant Setup (3 Easy Steps)

### Option 1: Direct Open (Simplest)
1. Navigate to the `ExamSathi` folder
2. Double-click `index.html`
3. Start using the website!

### Option 2: Local Server (Recommended)

**Using Python 3:**
```bash
cd /Users/shantanudwivedi/ExamSathi
python3 -m http.server 8000
```
Then open: http://localhost:8000

**Using Python 2:**
```bash
cd /Users/shantanudwivedi/ExamSathi
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
cd /Users/shantanudwivedi/ExamSathi
npx http-server
```

## ✅ What's Included

- ✅ 7 HTML pages (fully functional)
- ✅ Complete CSS styling (responsive)
- ✅ 6 JavaScript files (all features working)
- ✅ Sample data for 6 courses
- ✅ Multiple subjects per course
- ✅ Study material with notes, videos, books
- ✅ Working chatbot UI (API integration ready)
- ✅ Contact form (frontend ready)
- ✅ Mobile responsive design

## 🎯 File Overview

```
📁 ExamSathi/
│
├── 📄 index.html          ← Start here (Homepage)
├── 📄 course.html         ← Course selection
├── 📄 subject.html        ← Subject selection  
├── 📄 unit.html           ← Unit selection
├── 📄 material.html       ← Study materials page
├── 📄 about.html          ← About ExamSathi
├── 📄 contact.html        ← Contact form
│
├── 📁 css/
│   └── style.css          ← All styling
│
├── 📁 js/
│   ├── data.js            ← All course/subject data
│   ├── course.js          ← Course page logic
│   ├── subject.js         ← Subject page logic
│   ├── unit.js            ← Unit page logic
│   ├── material.js        ← Material page + chatbot
│   └── contact.js         ← Contact form handler
│
├── 📁 assets/             ← Place images here
├── 📄 README.md           ← Full documentation
└── 📄 QUICKSTART.md       ← This file
```

## 🔧 Customization Tips

### 1. Add More Courses
Edit: `js/data.js`
```javascript
courseData = {
    "Your Course": {
        icon: "🎓",
        description: "Course Description",
        subjects: { ... }
    }
}
```

### 2. Change Colors
Edit: `css/style.css`
```css
:root {
    --primary-color: #6366f1;  /* Change this */
}
```

### 3. Add Gemini API
Edit: `js/material.js`
- Uncomment the `callGeminiAPI` function
- Add your API key
- Replace `getBotResponse` with API calls

## 📝 Current Sample Content

**Courses Available:**
- B.Tech (DBMS, OS, Data Structures)
- MCA (Java, Web Development)
- MBA (Marketing, HRM)
- B.Sc (Physics, Mathematics)
- BBA (Business Communication)
- M.Tech (Machine Learning)

## 🎨 Key Features Working

✅ **Navigation Flow:**
Home → Course → Subject → Unit → Study Material

✅ **Notes Protection:**
- No copy/paste
- No right-click
- No text selection
- Read-only mode

✅ **Embedded Videos:**
- YouTube videos load properly
- Responsive video player

✅ **Chatbot:**
- UI fully functional
- Toggle open/close
- Send/receive messages
- Ready for API integration

✅ **Responsive Design:**
- Mobile-friendly
- Tablet-optimized
- Desktop-ready

## 🐛 Troubleshooting

**Videos not loading?**
- Check internet connection
- Verify YouTube video IDs in `data.js`

**Pages not loading?**
- Use a local server instead of double-clicking
- Clear browser cache

**Chatbot not responding?**
- Currently uses placeholder responses
- Integrate Gemini API for real responses

## 🚀 Next Steps

1. **Test the website**: Open `index.html` and navigate through
2. **Add your content**: Edit `js/data.js` with your course materials
3. **Customize design**: Modify `css/style.css` colors and styles
4. **Integrate Gemini API**: Add your API key in `js/material.js`
5. **Deploy**: Host on GitHub Pages, Netlify, or Vercel

## 📞 Need Help?

Check the full `README.md` for detailed documentation.

---

**You're all set! Start by opening `index.html` 🎉**
