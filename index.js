const btnE1 = document.getElementById("btn")
const birthdayE1 = document.getElementById("birthday")



function calculateAge(){
    const birthdayValue = birthdayE1.value;
    if(birthdayValue===" "){
    alert("Please enter the birthdate");
    }
    const age = getAge(birthdayValue);
}

function value(){
    const currentDate = new Date();
    console.log(currentDate);
}

btnE1.addEventListener("click",calculateAge)