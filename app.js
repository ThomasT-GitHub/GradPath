// ===== GradPath Prototype JavaScript =====

// Course Data
const coursesData = {
    COP3502: { code: 'COP 3502', name: 'Programming I', credits: 3, prereqs: [], category: 'CS', description: 'Introduction to programming using C.' },
    COP3503: { code: 'COP 3503', name: 'Programming II', credits: 3, prereqs: ['COP3502'], category: 'CS', description: 'Object-oriented programming concepts.' },
    COP3530: { code: 'COP 3530', name: 'Data Structures', credits: 3, prereqs: ['COP3503'], category: 'CS', description: 'Study of data structures and algorithms.' },
    COP4520: { code: 'COP 4520', name: 'Parallel Computing', credits: 3, prereqs: ['COP3530'], category: 'CS', description: 'Parallel programming techniques.' },
    COT3100: { code: 'COT 3100', name: 'Discrete Math', credits: 3, prereqs: [], category: 'MATH', description: 'Discrete mathematical structures.' },
    COT4210: { code: 'COT 4210', name: 'Algorithms', credits: 3, prereqs: ['COP3530', 'COT3100'], category: 'CS', description: 'Algorithm design and analysis.' },
    MAC2311: { code: 'MAC 2311', name: 'Calculus I', credits: 4, prereqs: [], category: 'MATH', description: 'Differential calculus.' },
    STA3032: { code: 'STA 3032', name: 'Statistical Methods', credits: 3, prereqs: ['MAC2311'], category: 'MATH', description: 'Probability and statistics.' },
    CDA3103: { code: 'CDA 3103', name: 'Computer Organization', credits: 3, prereqs: ['COP3502'], category: 'CS', description: 'Computer architecture fundamentals.' },
    EEL4768: { code: 'EEL 4768', name: 'Computer Architecture', credits: 3, prereqs: ['CDA3103'], category: 'CS', description: 'Advanced computer architecture.' },
    ENC1101: { code: 'ENC 1101', name: 'Composition I', credits: 3, prereqs: [], category: 'GenEd', description: 'Writing fundamentals.' },
    AMH2010: { code: 'AMH 2010', name: 'US History', credits: 3, prereqs: [], category: 'GenEd', description: 'American history survey.' },
    PSY2012: { code: 'PSY 2012', name: 'General Psychology', credits: 3, prereqs: [], category: 'GenEd', description: 'Introduction to psychology.' }
};

// State Management (using localStorage)
function getSavedCourses() {
    const saved = localStorage.getItem('savedCourses');
    return saved ? JSON.parse(saved) : ['STA3032', 'EEL4768', 'COT4210'];
}

function setSavedCourses(courses) {
    localStorage.setItem('savedCourses', JSON.stringify(courses));
}

let savedCourses = getSavedCourses();

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    // Draw prerequisite connections (dashboard only)
    if (document.getElementById('connection-svg')) {
        setTimeout(drawConnections, 100);
    }

    // Initialize catalog (catalog page only)
    if (document.getElementById('catalog-grid')) {
        populateCatalog();
    }

    // Initialize saved courses (saved page only)
    if (document.getElementById('saved-courses-list')) {
        populateSavedCourses();
    }

    // Setup drag and drop (planner page only)
    if (document.querySelector('.planner-content')) {
        setupDragAndDrop();
    }
});

// Draw prerequisite connection lines
function drawConnections() {
    const svg = document.getElementById('connection-svg');
    if (!svg) return;

    const connections = [
        { from: 'COP3502', to: 'COP3503' },
        { from: 'COP3503', to: 'COP3530' },
        { from: 'COP3530', to: 'COP4520' },
        { from: 'COP3530', to: 'COT4210' },
        { from: 'COT3100', to: 'COT4210' },
        { from: 'MAC2311', to: 'STA3032' }
    ];

    connections.forEach(conn => {
        const fromNode = document.querySelector(`[data-course="${conn.from}"]`);
        const toNode = document.querySelector(`[data-course="${conn.to}"]`);

        if (fromNode && toNode) {
            const fromRect = fromNode.getBoundingClientRect();
            const toRect = toNode.getBoundingClientRect();
            const svgRect = svg.getBoundingClientRect();

            const x1 = fromRect.left - svgRect.left + fromRect.width / 2;
            const y1 = fromRect.top - svgRect.top + fromRect.height / 2;
            const x2 = toRect.left - svgRect.left + toRect.width / 2;
            const y2 = toRect.top - svgRect.top + toRect.height / 2;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', '#BDBDBD');
            line.setAttribute('stroke-width', '2');
            svg.appendChild(line);
        }
    });
}

// Course Details Overlay
function showCourseDetails(courseId) {
    const course = coursesData[courseId];
    if (!course) return;

    const overlay = document.getElementById('overlay');
    const overlayBody = document.getElementById('overlay-body');

    const prereqsText = course.prereqs.length > 0
        ? course.prereqs.map(p => coursesData[p]?.code || p).join(', ')
        : 'None';

    const isSaved = savedCourses.includes(courseId);

    overlayBody.innerHTML = `
        <h2>${course.code}</h2>
        <h3 style="color: #616161; margin-bottom: 24px;">${course.name}</h3>
        <div class="course-detail-section">
            <div class="course-detail-label">Description</div>
            <div class="course-detail-value">${course.description}</div>
        </div>
        <div class="course-detail-section">
            <div class="course-detail-label">Credits</div>
            <div class="course-detail-value">${course.credits}</div>
        </div>
        <div class="course-detail-section">
            <div class="course-detail-label">Prerequisites</div>
            <div class="course-detail-value">${prereqsText}</div>
        </div>
        <div class="overlay-actions">
            <button class="btn-primary" onclick="window.location.href='planner.html'">Add to Planner</button>
            <button class="btn-primary btn-save" onclick="toggleSaveCourse('${courseId}')">${isSaved ? 'Remove from Saved' : 'Bookmark'}</button>
        </div>
    `;

    overlay.classList.add('active');
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

function toggleSaveCourse(courseId) {
    const index = savedCourses.indexOf(courseId);
    if (index > -1) {
        savedCourses.splice(index, 1);
    } else {
        savedCourses.push(courseId);
    }
    setSavedCourses(savedCourses);
    populateSavedCourses();
    showCourseDetails(courseId);
}

// Populate Catalog
function populateCatalog(filter = 'all', searchTerm = '') {
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogGrid) return;

    catalogGrid.innerHTML = '';

    Object.keys(coursesData).forEach(courseId => {
        const course = coursesData[courseId];

        if (filter !== 'all' && course.category !== filter) return;
        if (searchTerm && !course.code.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !course.name.toLowerCase().includes(searchTerm.toLowerCase())) return;

        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.cursor = 'pointer';
        card.onclick = () => showCourseDetails(courseId);

        const prereqsText = course.prereqs.length > 0
            ? 'Prereq: ' + course.prereqs.map(p => coursesData[p]?.code || p).join(', ')
            : 'No prerequisites';

        card.innerHTML = `
            <div class="course-card-header">
                <span class="course-code">${course.code}</span>
                <span class="course-credits">${course.credits} CR</span>
            </div>
            <div class="course-title">${course.name}</div>
            <div class="course-prereqs">${prereqsText}</div>
        `;

        catalogGrid.appendChild(card);
    });
}

function searchCatalog() {
    const searchTerm = document.getElementById('catalog-search').value;
    const activeFilter = document.querySelector('.filter-tag.active')?.textContent.toLowerCase() || 'all';
    const filterMap = { 'all': 'all', 'computer science': 'CS', 'math': 'MATH', 'gen ed': 'GenEd' };
    populateCatalog(filterMap[activeFilter] || 'all', searchTerm);
}

function filterCatalog(category) {
    document.querySelectorAll('.filter-tag').forEach(tag => tag.classList.remove('active'));
    event.target.classList.add('active');
    populateCatalog(category);
}

// Populate Saved Courses
function populateSavedCourses() {
    const savedList = document.getElementById('saved-courses-list');
    if (!savedList) return;

    savedList.innerHTML = '';
    savedCourses = getSavedCourses();

    if (savedCourses.length === 0) {
        savedList.innerHTML = '<p style="color: #616161; padding: 20px;">No saved courses yet. Browse the catalog to bookmark courses.</p>';
        return;
    }

    savedCourses.forEach(courseId => {
        const course = coursesData[courseId];
        if (!course) return;

        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.cursor = 'pointer';

        card.innerHTML = `
            <div class="course-card-header">
                <span class="course-code">${course.code}</span>
                <span class="course-credits">${course.credits} CR</span>
            </div>
            <div class="course-title">${course.name}</div>
            <div style="margin-top: 12px; display: flex; gap: 8px;">
                <button class="btn-primary btn-sm" onclick="window.location.href='planner.html'">Add to Planner</button>
                <button class="btn-sm" onclick="toggleSaveCourse('${courseId}')">Remove</button>
            </div>
        `;

        savedList.appendChild(card);
    });
}

// Drag and Drop for Planner
function setupDragAndDrop() {
    const draggables = document.querySelectorAll('.draggable');
    const dropZones = document.querySelectorAll('.drop-zone');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            draggable.classList.add('dragging');
            e.dataTransfer.setData('text/plain', draggable.dataset.course);
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');

            const courseId = e.dataTransfer.getData('text/plain');
            const course = coursesData[courseId];

            if (course) {
                const semesterCourses = zone.querySelector('.semester-courses');
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <div class="course-card-header">
                        <span class="course-code">${course.code}</span>
                        <span class="course-credits">${course.credits} CR</span>
                    </div>
                    <div class="course-title">${course.name}</div>
                `;
                semesterCourses.appendChild(card);

                updateCreditCount(zone);

                setTimeout(() => {
                    const alert = document.getElementById('planner-alert');
                    if (alert && Math.random() > 0.7) {
                        alert.classList.remove('hidden');
                    }
                }, 500);
            }
        });
    });
}

function updateCreditCount(zone) {
    const cards = zone.querySelectorAll('.semester-courses .course-card');
    let totalCredits = 0;
    cards.forEach(card => {
        const creditsText = card.querySelector('.course-credits').textContent;
        const credits = parseInt(creditsText);
        totalCredits += credits;
    });

    const maxCredits = zone.dataset.semester.includes('Summer') ? 12 : 15;
    zone.querySelector('.credit-count').textContent = `${totalCredits} / ${maxCredits} CR`;
}

function hideAlert() {
    const alert = document.getElementById('planner-alert');
    if (alert) {
        alert.classList.add('hidden');
    }
}

// What-If Major Comparison
function updateWhatIf() {
    const major = document.getElementById('whatif-major').value;
    const newPlan = document.getElementById('new-plan');

    const majors = {
        CS: { name: 'Computer Science BS', grad: 'Fall 2026', credits: 30, semesters: 2 },
        DS: { name: 'Data Science BS', grad: 'Spring 2027', credits: 45, semesters: 3 },
        CE: { name: 'Computer Engineering', grad: 'Summer 2027', credits: 48, semesters: 4 },
        IT: { name: 'Information Technology BS', grad: 'Fall 2026', credits: 27, semesters: 2 }
    };

    const data = majors[major];
    const isDelayed = data.semesters > 2;

    newPlan.innerHTML = `
        <h3>${data.name}</h3>
        <div class="timeline-item">
            <div class="timeline-label">Expected Graduation</div>
            <div class="timeline-value ${isDelayed ? 'impact' : ''}">${data.grad}</div>
        </div>
        <div class="timeline-item">
            <div class="timeline-label">Remaining Credits</div>
            <div class="timeline-value ${isDelayed ? 'impact' : ''}">${data.credits} credits</div>
        </div>
        <div class="timeline-item">
            <div class="timeline-label">Remaining Semesters</div>
            <div class="timeline-value ${isDelayed ? 'impact' : ''}">${data.semesters} semesters</div>
        </div>
    `;
}

// History Accordion
function toggleSemester(element) {
    element.classList.toggle('expanded');
}
