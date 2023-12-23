//   ==============First=============
function changeColor() {
    var button = document.getElementById("colorButton");
    var newColor = getRandomColor();
    button.style.backgroundColor = newColor;
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
//   ==============second=================

let date = new Date();
let time = date.getTime();
let hours = date.getHours();
let min = date.getMinutes();
let dayNight = "AM";
if(hours > 12){
    dayNight = "PM"
}

alert(`${hours} : ${min} : ${dayNight}`);

//   ==============Third=================
let num1 = +prompt('Enter a num1');
let num2 = +prompt('Enter a num2');
let oper = prompt("Enter a Operator Add ,Sub, Mul, Div")
if(oper === "+"){
alert(num1 + num2)
}else if(oper === "-"){
    alert(num1 - num2)
    }else if(oper === "*"){
        alert(num1 * num2)
        }else if(oper === "/"){
            alert(num1 / num2)
            }