const siteBasics = () => {

    var myTexts = ["Sushi", "Steak", "Pasta", "Shawerma", "Pizza", "Nuggets"];
    var myDesc = document.getElementById("desc");
    var textCounter = 0;

    function descChanger() {
        if (textCounter == myTexts.length) {
            textCounter = 0;
        }
        myDesc.textContent = myTexts[textCounter];
        textCounter++
    }

var descTimer = setInterval(descChanger, 3000);
var descSwitcher = setInterval(() => {
        $(".wrap #desc").fadeToggle()
    }, 1500);

myDesc.onmouseover = function() {
    clearInterval(descTimer);
    clearInterval(descSwitcher);
    myDesc.onmouseout = function() {
        descTimer = setInterval(descChanger, 3000);
        descSwitcher = setInterval(() => {
        $(".wrap #desc").fadeToggle()
    }, 1500);
    }

    };


var tabs = document.querySelector('.tabs');
var panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e){
    if (e.target.tagName == "LI") {
        var targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if (panel == targetPanel) {
                panel.classList.add('active');
                myDesc.style.display = 'none';
                clearInterval(descSwitcher);
            } else {
                panel.className = 'panel';
            }
        })
    }
});


var moon = document.querySelector('.logo1');
var workBtn = document.querySelector('.workBtn');

function* gen() {
    yield workBtn.style.color = "red";
    yield workBtn.style.color = "white";
    yield workBtn.style.color = "rgb(255, 153, 0)";
}

let myGen = gen();

moon.addEventListener('click', e => {
    myGen.next();
});

}

let i = 1;

class Users {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = i;
        i++;
    }
    info() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}


var userOne = new Users('Karim', 21);
var userTwo = new Users('KimoKfa2a', 27);

/////////////////

fetch('todos.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    document.querySelector('.mainDesc').textContent = data[0].text;
});

/////////////////

window.onload = function() {

    siteBasics();

};