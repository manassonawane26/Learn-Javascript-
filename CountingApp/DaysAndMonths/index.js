let day = document.getElementById("Days")
let month = document.getElementById("Months")
let arr1 = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let arr2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
count1=0;
count2=0;

function dayPressed() {
    count1=++count1;
    if(count1==7)
        count1=0;
    day.textContent = arr1[count1];
}

function monthPressed() {
    count2=++count2;
    if(count2==12)
        count2=0;
    month.textContent = arr2[count2];
}
