# GradPath - UCF Academic Planning Application

A modern web-based academic planning tool designed for UCF students to visualize their degree progress, plan semesters, and explore course options.

## 🎓 About

GradPath is a **CAP 4102 – Web and User Experience (UX)** course project that transforms complex academic audit data into an intuitive, interactive interface built with React and TypeScript.

### Key Features

- **📊 Dashboard** - Interactive degree roadmap with prerequisite connections using React Flow
- **📅 Planner** - Drag-and-drop semester planning with prerequisite validation
- **📚 Catalog** - Searchable course database with bookmark functionality
- **🔮 What-If Tool** - Compare different major timelines with visual metrics
- **📈 Progress Tracker** - Real-time degree completion visualization
- **💾 Saved Courses** - Bookmark courses with global state management
- **📜 History** - View past semester grades and performance
- **❓ Help** - Contextual guidance with quick navigation to all features
- **👤 Profile Menu** - User profile dropdown with account settings and logout

## 🚀 Live Demo

**GitHub Pages URL:** `https://thomast-github.github.io/GradPath/`

## 📁 Project Structure

```
GradPath/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation with profile dropdown
│   │   └── SavedCoursesContext.tsx # Global saved courses state
│   ├── pages/
│   │   ├── Login.tsx               # Sign-in page
│   │   ├── Dashboard.tsx           # Degree roadmap with React Flow
│   │   ├── Planner.tsx             # Semester planner with drag-and-drop
│   │   ├── Catalog.tsx             # Course catalog with modals
│   │   ├── Progress.tsx            # Progress overview
│   │   ├── Saved.tsx               # Saved courses
│   │   ├── What-If.tsx             # Major comparison tool
│   │   ├── History.tsx             # Course history
│   │   └── Help.tsx                # Help & support
│   ├── App.tsx                     # Main app with routing
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── public/
│   ├── logo.png                    # UCF logo
│   └── aj-pfp.gif                  # Profile picture
├── package.json                    # Dependencies
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── index.html                      # HTML entry point
└── README.md                       # This file
```

## 🛠️ Technologies Used

- **React 19** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite 7** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Utility-first styling
- **@xyflow/react** - Interactive node-based graphs
- **React Icons** - Icon library (IoIcons, BiIcons, HiIcons, MdIcons)
- **Context API** - Global state management for saved courses
- **HTML5 Drag & Drop API** - Interactive semester planning

## 🎨 Design System

### UCF Branding
- **Primary:** UCF Gold (`#FFC904`)
- **Background:** Dark (`#1a1a1a`)
- **Cards:** Medium Dark (`#2d2d2d`)
- **Text:** White with Gray accents

### Typography
- **Font Family:** System fonts (sans-serif)

## 🚀 Getting Started

### Prerequisites
- Node.js v20.17.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ThomasT-GitHub/GradPath.git
cd GradPath

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📦 Deployment to GitHub Pages

### Current Setup

The project is already configured with:
- Repository: `ThomasT-GitHub/GradPath`
- Branch: `aj-gradpath`
- GitHub Pages enabled at root

### To Deploy Updates

```bash
# Build the project
npm run build

# Commit and push changes
git add .
git commit -m "Update: [describe changes]"
git push origin aj-gradpath
```

## 📝 Usage Guide

### Login
- Enter credentials to access the application
- Navigates to Dashboard upon sign-in

### Dashboard
- Interactive node graph showing course roadmap
- Click any course node to view details in a modal
- Shows course description, credits, professor, and semester taken
- Color-coded: Green = completed, Yellow = current, White = planned
- Lines show prerequisite relationships
- Add courses directly to planner from modal

### Planner
- Drag courses from available pool into semester columns
- Credit counts update automatically per semester
- Prerequisite validation with alerts for missing requirements
- Alerts auto-dismiss after 5 seconds
- Add to Planner button navigates from other pages

### Catalog
- Search courses by code or name
- Click any course card to view detailed modal
- Bookmark courses to save for later
- Bookmark button toggles between "Bookmark" and "Remove Saved"
- Saved courses sync with global context

### What-If Tool
- Two-column comparison layout
- Select different majors from dropdown
- Compare graduation timeline, total credits, semesters, and core courses
- Visual indicators (arrows) show increases/decreases
- Color-coded differences (red = increase, green = decrease)
- Info tooltip explains the comparison

### Progress Tracker
- Visual progress rings showing completion percentage
- Category breakdown (Gen Ed, Major Core, Electives)
- Click category cards to navigate to catalog
- Real-time updates as courses are completed

### Saved Courses
- View all bookmarked courses
- Remove courses individually
- Quick "Add to Planner" for each course
- Persists across sessions via Context API

### History
- View past semester grades
- GPA tracking per semester
- Course performance overview

### Help
- 4-column grid layout with all feature cards
- Quick navigation to any page
- Tutorial video placeholder
- UCF contact information link

### Profile Menu
- Click profile picture to open dropdown
- Options: My Profile, Account Settings
- Help resources: FAQs, Help, Terms and Privacy
- Logout returns to login page
- Smooth slide-in animation (200ms)

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

## 📄 License

This is an educational project for UCF CAP 4102.

## 🐛 Known Limitations

- **No Backend** - All data is mocked/static
- **No Real Authentication** - Sign-in is simulated
- **Limited Persistence** - Only saved courses use Context API (session-based)
- **No API Integration** - Course data is hardcoded
- **Prototype Phase** - UI complete, backend integration pending
- **Theme Switcher** - UI exists but not functional

## 🔮 Future Enhancements

- Backend API integration for real course data
- User authentication via UCF SSO
- Database for persistent semester plans and user preferences
- Theme switcher functionality (Light/Dark/Auto modes)
- Email/SMS alerts for registration deadlines
- Download semester plan as PDF/CSV
- Mobile app version
- Accessibility improvements (WCAG 2.1 AA)
- Profile page with user settings
- Social features (connections, course recommendations)

## 📧 Contact

**Project Repository:** [ThomasT-GitHub/GradPath](https://github.com/ThomasT-GitHub/GradPath)

For questions about this project, contact UCF Academic Advising or visit the Student Success Center.

---

**Built with ❤️ for UCF Students**
