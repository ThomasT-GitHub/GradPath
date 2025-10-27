# GradPath - UCF Academic Planning Prototype

A web-based academic planning tool designed for UCF students to visualize their degree progress, plan semesters, and explore course options.

## 🎓 About

GradPath is a **CAP 4102 – Web and User Experience (UX)** course project that transforms complex academic audit data into an intuitive, interactive interface.

### Key Features

- **📊 Dashboard** - Visual degree roadmap with prerequisite connections
- **📅 Planner** - Drag-and-drop semester planning
- **📚 Catalog** - Searchable course database with filters
- **🔮 What-If Tool** - Compare different major timelines
- **📈 Progress Tracker** - Real-time degree completion visualization
- **💾 Saved Courses** - Bookmark courses for future semesters
- **📜 History** - View past semester grades and performance
- **❓ Help** - Contextual guidance for all features

## 🚀 Live Demo

**GitHub Pages URL:** `https://[YOUR-USERNAME].github.io/GradPath/`

*(Replace with your actual GitHub Pages URL after deployment)*

## 📁 Project Structure

```
GradPath/
├── index.html          # Splash screen (entry point)
├── login.html          # Sign-in page
├── dashboard.html      # Degree roadmap
├── planner.html        # Semester planner
├── catalog.html        # Course catalog
├── progress.html       # Progress overview
├── saved.html          # Saved courses
├── whatif.html         # What-If major explorer
├── history.html        # Course history
├── help.html           # Help & support
├── styles.css          # Global styles
├── app.js              # JavaScript functionality
├── CLAUDE.md           # AI context document
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with UCF branding
- **Vanilla JavaScript** - No frameworks, pure JS
- **LocalStorage API** - Persistent saved courses
- **SVG** - Prerequisite connection visualization
- **Drag & Drop API** - Interactive semester planning

## 🎨 Design System

### UCF Branding
- **Primary:** UCF Gold (`#FFC904`)
- **Secondary:** UCF Black (`#000000`)
- **Accent:** White (`#FFFFFF`)

### Typography
- **Font Family:** Inter, system fonts

## 📦 Deployment to GitHub Pages

### Step 1: Initialize Git Repository (if not already done)

```bash
cd /Users/thomas/Repos/GradPath
git init
git add .
git commit -m "Initial commit: GradPath prototype"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **"New Repository"**
3. Name it **`GradPath`**
4. **Do NOT** initialize with README (you already have one)
5. Click **"Create Repository"**

### Step 3: Connect Local to GitHub

```bash
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/GradPath.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top navigation)
3. Click **"Pages"** (left sidebar)
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://YOUR-USERNAME.github.io/GradPath/`

### Step 5: Verify Deployment

Visit your GitHub Pages URL and test:
- ✅ Splash screen appears and transitions to login
- ✅ All navigation links work
- ✅ Drag-and-drop functions on Planner page
- ✅ Search works on Catalog page
- ✅ Course details overlay opens/closes
- ✅ Saved courses persist across page reloads

## 🔧 Local Development

To run locally, simply open `index.html` in a browser:

```bash
open index.html
# or
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📝 Usage Guide

### Dashboard
- Click any course node to view details
- Green = completed, Yellow = in-progress, White = available
- Lines show prerequisite relationships

### Planner
- Drag courses from left panel into semester columns
- Credit counts update automatically
- Alerts appear if plan delays graduation

### Catalog
- Use search bar to find courses
- Filter by category (CS, Math, Gen Ed)
- Click any course card for details

### What-If Tool
- Select different majors from dropdown
- See impact on graduation timeline
- Orange text indicates delays

### Saved Courses
- Bookmark courses from catalog or dashboard
- Persists using browser localStorage
- Quick access to add to planner

## 🎯 Requirements Mapping

This prototype demonstrates:

- **FR-1:** Login interface (simulated)
- **FR-2:** Interactive degree path visualization
- **FR-3:** Drag-and-drop semester planner
- **FR-4:** Course catalog integration (mocked data)
- **FR-5:** Progress visualizer with rings/bars
- **FR-6:** Course search functionality
- **FR-7:** Alerts for off-track plans
- **FR-8:** Save/bookmark courses
- **FR-9:** What-If major comparison tool
- **FR-10:** Past courseload history view

- **NFR-1:** Fast loading (< 2s splash screen)
- **NFR-3:** Mobile-responsive design
- **NFR-6:** Tooltips and help section
- **NFR-7:** UCF branding throughout

## 👥 Team

**Team GradPath** - UCF CAP 4102, Fall 2025
Primary Developer: Thomas Triviño

## 📄 License

This is an educational project for UCF CAP 4102.

## 🐛 Known Limitations

- **No Backend** - All data is mocked/static
- **No Real Authentication** - Sign-in is simulated
- **No Persistence** - Only saved courses use localStorage
- **No API Integration** - Course data is hardcoded
- **Prototype Only** - Not production-ready

## 🔮 Future Enhancements

- React/Next.js conversion for real interactivity
- UCF course catalog API integration
- User authentication via UCF SSO
- Database for persistent semester plans
- Email/SMS alerts for registration
- Mobile app version
- Accessibility improvements (WCAG 2.1 AA)

## 📧 Contact

For questions about this project, contact UCF Academic Advising or visit the Student Success Center.

---

**🎓 Made with Claude Code for UCF CAP 4102**
