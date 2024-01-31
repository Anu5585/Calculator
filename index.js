let inputbox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = " ";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            inputbox.value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            inputbox.value = string;
        } else if (e.target.innerHTML === 'C') {
            string = " ";
            inputbox.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            inputbox.value = string;
        } else if ('*/-='.includes(e.target.innerHTML)) {
            if (string !== "") {
                string += e.target.innerHTML;
                inputbox.value = string;
            }
        } else {
            string += e.target.innerHTML;
            inputbox.value = string;
        }
    });
});

let input = document.getElementById("inputbox");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("equalsBtn").click();
    }

});
