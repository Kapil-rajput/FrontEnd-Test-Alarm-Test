//  function to display watch i.e current time

function watch() {
    setInterval(() => {
        const today = new Date();
        const hour = document.getElementById("hour");
        const min = document.getElementById("min");
        const sec = document.getElementById("sec");
        const ampm = document.getElementById("ampm");
        const date = document.getElementById("date");
        const month = document.getElementById("month");
        const year = document.getElementById("year");
        const day = document.getElementById("day");
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        let d = today.getDate();
        let y = today.getFullYear();
        let alarm_ampm;
        let mon = today.toLocaleString('default', { month: 'long' });
        let dayy = today.toLocaleString('default', { weekday: 'long' });
        if (h < 12) {
            // to check whether it is am or pm
            ampm.innerHTML = ("AM");
            alarm_ampm = ("AM")
        }
        else {
            ampm.innerHTML = ("PM");
            alarm_ampm = ("PM")
        }
        if (h > 12) { // to convert the clock to 12 hour clock
            h = h - 12;
        }
        if (h < 10) { //  to add zero in front of hour to look pretty
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }

        hour.innerHTML = h;
        min.innerHTML = m;
        sec.innerHTML = s;
        date.innerHTML = d;
        year.innerHTML = y;
        month.innerHTML = mon;
        day.innerHTML = dayy;
        alarmhit(h, m, s, alarm_ampm)


    }, 1000); // interval to refresh time each second
};
watch();

// ......................................................................................................................................................


// to add alarm 

const alarm = document.querySelector(".add-alarm");
const alarm_list = document.querySelector(".listaddhere");
let alarm_array = [];
let id = 0;
let index;


alarm.addEventListener("submit", (e) => {
    e.preventDefault();
    let alarm_hour = document.getElementById("alhour").value;
    let alarm_min = document.getElementById("almin").value;
    let alarm_sec = document.getElementById("alsec").value;
    let alarm_ampm = document.getElementById("alampm").value;
    alarm_ampm = alarm_ampm.toUpperCase();
    if (alarm_hour < 10 && alarm_hour >= 00 && alarm_hour.length < 2) {
        // to add zero in front of hour in alram list if hour is less than 10
        alarm_hour = '0' + alarm_hour;
    }
    if (alarm_min < 10 && alarm_min >= 00 && alarm_min.length < 2) {
        // to add zero in front of min in alram list if hour is less than 10
        alarm_min = '0' + alarm_min;
    }
    if (alarm_sec < 10 && alarm_sec >= 00 && alarm_sec.length < 2) {
        // to add zero in front of sec in alram list if hour is less than 10
        alarm_sec = '0' + alarm_sec;
    }
    if (alarm_ampm != 'AM' && alarm_ampm != 'PM') {
        // to add default alram if user input else rather than am and pm
        alarm_ampm = 'PM';
    }
    const alarm_det = `${alarm_hour} : ${alarm_min} : ${alarm_sec} ${alarm_ampm}`
    alarm_array.push(alarm_det);// pushing value into the array
    const newLi = document.createElement("li");//new li item
    newLi.classList.add("alarms");
    newLi.setAttribute('id', `${id}`) // setting attribute
    const newLiInnerHtml =
        `<div class="alarm-li"> <span class="details" >${alarm_det}</span>
            <button class="delete-btn">Delete</button></div>`;
    newLi.innerHTML = newLiInnerHtml;
    alarm_list.append(newLi); //appending li 
    id++;
    // console.log(alarm_list);
})
alarm_list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const alarm_to_delete = e.target.parentNode.parentNode;
        // console.log(alarm_to_delete);
        index = (alarm_to_delete.getAttribute('id'));
        alarm_array.splice(index, 1); // getting that particular item in array and getting index value to remove that from list
        alarm_to_delete.remove(); // removing that alarm from list
    }
})


//.................................................................................................... 
function alarmhit(hour, min, sec, ap) {

    const current_time = `${hour} : ${min} : ${sec} ${ap}`; // getting current time
    // console.log(current_time, alarm_array[i]);
    for (let i = 0; i < alarm_array.length; i++) {
        // console.log(current_time, alarm_array[i]);
        if (current_time == alarm_array[i]) { //  checking condition  if it will true alarm will triggered
            alert("Alarm Triggered of " + `${alarm_array[i]}`)
        }
    }

    // console.log(alarm_array);
}
