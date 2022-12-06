function update(){
    var days = document.querySelectorAll(".day");
    var week = document.getElementById("week").value;
    var i = 0;
    for(var day of days){
        day.innerHTML = parseInt(week)+i + "/12";
        i++;
    }
}

