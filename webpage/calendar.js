const menu_button = document.getElementById("button1");
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
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
let month = date.getMonth();
let dayOfWeek = date.getDay();
dayOfWeek = dayOfWeek == 0 ? 7 : dayOfWeek;
let year = date.getFullYear();
let today = date.getDate();
monthCounter = 0;
yearCounter = 0;
let daysInMonth = new Date( year + yearCounter, month + monthCounter + 1, 0).getDate(); //fix
let firstDay = new Date(year + yearCounter, month, 1 + monthCounter).getDay(); //fix
firstDay = firstDay === 0 ? 7 : firstDay;
i = 0;

function loadDays() {
  dateDisplay.textContent = `${
    monthNames[new Date(year + yearCounter, month + monthCounter).getMonth()] //fix
  } ${year + yearCounter}`;
  days.forEach((day, index) => {
    day.classList.remove("notThisMonth");
    let dayNumber = index + 1;
    let dateNumber = dayNumber - firstDay + 1;
    if (dayNumber < firstDay) {
      day.textContent = `${
        new Date(year + yearCounter, month + monthCounter, 0).getDate() + //fix
        dateNumber
      }`;
      day.classList.add("notThisMonth");
    } else {
      if (dateNumber > daysInMonth) {
        i++;
        day.textContent = i;
        day.classList.add("notThisMonth");
      } else {
        day.textContent = dateNumber;
        if ((dateNumber = today)) {
          day.classList.add("today");
        }
      }
    }
  });
}

loadDays();

function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

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
    menu_button.classList.remove("rotated")
  }
});

week_layout.addEventListener("click", function () {
  if (week_layout.classList.contains("unactive_layout")) {
    week_layout.classList.replace("unactive_layout", "active_layout");
    month_layout.classList.replace("active_layout", "unactive_layout");
  }
});

month_layout.addEventListener("click", function () {
  if (month_layout.classList.contains("unactive_layout")) {
    month_layout.classList.replace("unactive_layout", "active_layout");
    week_layout.classList.replace("active_layout", "unactive_layout");
  }
});

lastMonthButton.addEventListener("click", function () { //fix
  monthCounter--;
  if (monthCounter < 0) {
    monthCounter = 11;
    yearCounter--;
  }
  updateCalendar();
});

nextMonthButton.addEventListener("click", function () { //fix
  monthCounter++;
  if (monthCounter > 11) {
    monthCounter = 0;}
  if (monthCounter + month > 11) {
    yearCounter++;}
  
  updateCalendar();
});

function updateCalendar() {
  i = 0;
  daysInMonth = new Date(year + yearCounter, month + monthCounter + 1, 0).getDate(); //fix
  firstDay = new Date(year + yearCounter, month + monthCounter, 1).getDay(); //fix
  firstDay = firstDay === 0 ? 7 : firstDay;
  loadDays();
}
