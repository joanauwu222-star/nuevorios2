(function() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let selectedDay = null;
    
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    const weekDays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    
    const monthNameElement = document.getElementById("monthName");
    const yearDisplayElement = document.getElementById("yearDisplay");
    const daysGridElement = document.getElementById("daysGrid");
    const prevBtn = document.getElementById("prevMonthBtn");
    const nextBtn = document.getElementById("nextMonthBtn");
    
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
    
    function getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }
    
    function isTodayDate(year, month, day) {
        const today = new Date();
        return (year === today.getFullYear() && month === today.getMonth() && day === today.getDate());
    }
    
    function formatDate(year, month, day) {
        return `${day.toString().padStart(2, '0')}/${(month + 1).toString().padStart(2, '0')}/${year}`;
    }
    
    function renderCalendar() {
        const daysInMonth = getDaysInMonth(currentYear, currentMonth);
        const firstDayWeek = getFirstDayOfMonth(currentYear, currentMonth);
        
        let prevMonthYear = currentYear;
        let prevMonthIndex = currentMonth - 1;
        if (prevMonthIndex < 0) {
            prevMonthIndex = 11;
            prevMonthYear = currentYear - 1;
        }
        const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonthIndex);
        
        let nextMonthYear = currentYear;
        let nextMonthIndex = currentMonth + 1;
        if (nextMonthIndex > 11) {
            nextMonthIndex = 0;
            nextMonthYear = currentYear + 1;
        }
        
        const cells = [];
        
        for (let i = 0; i < firstDayWeek; i++) {
            const prevMonthDay = daysInPrevMonth - firstDayWeek + i + 1;
            cells.push({
                type: 'empty',
                dayNumber: prevMonthDay,
                year: prevMonthYear,
                month: prevMonthIndex,
                day: prevMonthDay,
                isCurrentMonth: false
            });
        }
        
        for (let d = 1; d <= daysInMonth; d++) {
            cells.push({
                type: 'current',
                dayNumber: d,
                year: currentYear,
                month: currentMonth,
                day: d,
                isCurrentMonth: true
            });
        }
        
        const totalCellsNeeded = 42;
        const remainingCells = totalCellsNeeded - cells.length;
        
        for (let i = 1; i <= remainingCells; i++) {
            cells.push({
                type: 'empty',
                dayNumber: i,
                year: nextMonthYear,
                month: nextMonthIndex,
                day: i,
                isCurrentMonth: false
            });
        }
        
        daysGridElement.innerHTML = '';
        
        cells.forEach(cell => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day-cell';
            
            if (!cell.isCurrentMonth) {
                dayDiv.classList.add('empty');
            }
            
            const isToday = isTodayDate(cell.year, cell.month, cell.day);
            if (isToday) {
                dayDiv.classList.add('today');
            }
            
            if (selectedDay && 
                selectedDay.year === cell.year && 
                selectedDay.month === cell.month && 
                selectedDay.day === cell.day) {
                dayDiv.classList.add('selected');
            }
            
            dayDiv.textContent = cell.dayNumber;
            
            const fullDate = formatDate(cell.year, cell.month, cell.day);
            dayDiv.setAttribute('data-date', fullDate);
            dayDiv.setAttribute('data-year', cell.year);
            dayDiv.setAttribute('data-month', cell.month);
            dayDiv.setAttribute('data-day', cell.day);
            
            if (cell.isCurrentMonth) {
                dayDiv.addEventListener('click', (function(year, month, day, element) {
                    return function() {
                        document.querySelectorAll('.day-cell.selected').forEach(el => {
                            el.classList.remove('selected');
                        });
                        element.classList.add('selected');
                        selectedDay = { year: year, month: month, day: day };
                    };
                })(cell.year, cell.month, cell.day, dayDiv));
            }
            
            daysGridElement.appendChild(dayDiv);
        });
        
        monthNameElement.textContent = monthNames[currentMonth];
        yearDisplayElement.textContent = currentYear;
    }
    
    function goToPreviousMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        selectedDay = null;
        renderCalendar();
    }
    
    function goToNextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        selectedDay = null;
        renderCalendar();
    }
    
    function goToCurrentMonth() {
        const today = new Date();
        currentYear = today.getFullYear();
        currentMonth = today.getMonth();
        selectedDay = null;
        renderCalendar();
    }
    
    prevBtn.addEventListener('click', goToPreviousMonth);
    nextBtn.addEventListener('click', goToNextMonth);
    
    renderCalendar();
    
    const style = document.createElement('style');
    style.textContent = `
        .day-cell {
            user-select: none;
        }
        .day-cell.selected {
            background: #48b8b8;
            color: white;
            font-weight: 700;
        }
    `;
    document.head.appendChild(style);
})();