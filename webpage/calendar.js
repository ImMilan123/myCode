const menu_button = document.querySelector(".menu_button");
const side_navigation = document.getElementById("side_navigation");
const empty = document.getElementById("empty");
const calendar_main = document.getElementById("calendar_container");
const month_layout = document.getElementById("month");
const week_layout = document.getElementById("week");
const clock = document.getElementById("currentTime");
const days = [...document.querySelectorAll(".workday, .weekend")];
const lastMonthButton = document.getElementById("lastMonth");
const nextMonthButton = document.getElementById("nextMonth");
const dateDisplay = document.getElementById("activeMonth");
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
const date = new Date();
let month = date.getMonth();
let ThisMonth = date.getMonth();
let ThisYear = date.getFullYear();
let dayOfWeek = date.getDay();
dayOfWeek = dayOfWeek == 0 ? 7 : dayOfWeek;
let year = date.getFullYear();
let today = date.getDate();
let daysInMonth = new Date(year, month + 1, 0).getDate();
let firstDay = new Date(year, month, 1).getDay();
firstDay = firstDay === 0 ? 7 : firstDay;
let daysInNextMonth = 0;

function loadDays() {
  dateDisplay.textContent = `${monthNames[new Date(year, month).getMonth()]} ${year}`;
  days.forEach((day, index) => {
    day.classList.remove("notThisMonth", "today");
    let dayNumber = index + 1;
    let dateNumber = dayNumber - firstDay + 1;
    if (dayNumber < firstDay) {
      day.textContent = `${new Date(year, month, 0).getDate() + dateNumber}`;
      day.classList.add("notThisMonth");
    } else {
      if (dateNumber > daysInMonth) {
        daysInNextMonth++;
        day.textContent = daysInNextMonth;
        day.classList.add("notThisMonth");
      } else {
        day.textContent = dateNumber;  
        if (dateNumber == today && month == ThisMonth && year == ThisYear && !day.classList.contains("notThisMonth")) {
          day.classList.add("today");
        }
      }
}
  });
}



loadDays();

days.forEach(day => {
  day.addEventListener("mousedown", function(event){
    day.classList.add("first_day");  
  });
  day.addEventListener("mouseup", function(event){
    day.classList.add("last_day");
    if (parseInt(day.classList.contains("first_day").textContent) < parseInt(day.classList.contains("last_day").textContent)){
      day.classList.replace("first_day", "last_day");
      day.classList.replace("last_day", "first_day");
      
    }
    if (parseInt(day.classList.containst("first_day").textContent) < parseInt(day.textContent) && parseInt(day.classList.containst("last_day").textContent) > parseInt(day.textContent)){
      day.classList.add("today");
  }
    loadDays();
  });
});
    



function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  clock.textContent = `${hours}:${minutes}`;
}
updateClock();
setInterval(updateClock, 10000);

menu_button.addEventListener("click", function () {
  if (side_navigation.classList.contains("active")) {
    side_navigation.classList.remove("active");
    empty.classList.remove("expanded");
    calendar_main.classList.remove("offset");
    menu_button.classList.add("rotated");
  } else {
    side_navigation.classList.add("active");
    empty.classList.add("expanded");
    calendar_main.classList.add("offset");
    menu_button.classList.remove("rotated");
  }
});

week_layout.addEventListener("click", function() {
  if (week_layout.classList.contains("unactive_layout")) {
    week_layout.classList.replace("unactive_layout", "active_layout");
    month_layout.classList.replace("active_layout", "unactive_layout");
  }
});

month_layout.addEventListener("click", function() {
  if (month_layout.classList.contains("unactive_layout")) {
    month_layout.classList.replace("unactive_layout", "active_layout");
    week_layout.classList.replace("active_layout", "unactive_layout");
  }
});

lastMonthButton.addEventListener("click", function() {
  if (month == 0) {
    year--;
    month = 11;
  } else {
    month--;
  }
  updateCalendar();
});

nextMonthButton.addEventListener("click", function () {
  if (month == 11) {
    year++;
    month = 0;
  } else {
    month++;
  }
  updateCalendar();
});

function updateCalendar() {
  daysInNextMonth = 0;
  daysInMonth = new Date(year, month + 1, 0).getDate();
  firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 7 : firstDay;
  loadDays();
}
