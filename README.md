# School Management System

A modern, full-featured school management system built with React, Vite, and TailwindCSS. This application provides comprehensive tools for managing students, teachers, classes, attendance, and grades.

## Features

- **Dashboard**: Overview with statistics and key metrics
- **Student Management**: Add, edit, view, and delete students
- **Teacher Management**: Manage teacher profiles and assignments
- **Class Management**: Organize classes and assign teachers
- **Attendance Tracking**: Daily attendance recording with statistics
- **Grade Management**: Track student grades and calculate averages
- **Data Persistence**: All data is saved to localStorage
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with TailwindCSS

## Tech Stack

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **TailwindCSS**: Styling
- **React Router**: Navigation
- **Lucide React**: Icons
- **localStorage**: Data persistence

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### Dashboard
- View overall statistics for students, teachers, classes, and attendance
- Check academic performance metrics
- See today's attendance summary

### Students
- Add new students with name, email, grade, and class assignment
- Edit existing student information
- Delete students
- Search through the student list

### Teachers
- Add new teachers with name, email, and subject specialization
- Edit teacher information
- Delete teachers
- View which classes each teacher is assigned to

### Classes
- Create new classes with name, teacher assignment, and room number
- Edit class details
- Delete classes
- View student count per class

### Attendance
- Select a date to view or record attendance
- Mark students as Present, Absent, or Late
- View attendance statistics for the selected date
- Save attendance records

### Grades
- Add grades for students with subject, score, and semester
- Edit existing grades
- Delete grades
- View overall and per-student averages
- Color-coded grade display (90+ green, 80+ blue, 70+ yellow, 60+ orange, below 60 red)

## Data Storage

All data is persisted in the browser's localStorage. This means:
- Data persists across browser sessions
- No backend server is required
- Data is specific to each browser/device
- Clearing browser data will reset the application

## Project Structure

```
sm/
├── src/
│   ├── components/      # Reusable components
│   ├── context/         # React context for state management
│   ├── data/           # Mock data
│   ├── pages/          # Page components
│   │   ├── Attendance.jsx
│   │   ├── Classes.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Grades.jsx
│   │   ├── Students.jsx
│   │   └── Teachers.jsx
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Customization

### Adding New Features
The application is built with a modular architecture. To add new features:

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation item in the `navigation` array in `src/App.jsx`
4. Add state management functions in `src/context/AppContext.jsx` if needed

### Styling
The application uses TailwindCSS for styling. Customize the design by:
- Modifying `tailwind.config.js` for theme customization
- Adding custom classes in `src/index.css`
- Using Tailwind utility classes in components

## Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- localStorage API
- CSS Grid and Flexbox

## License

This project is open source and available for educational purposes.
