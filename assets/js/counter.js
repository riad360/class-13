const progress_bar         = document.getElementById('progress_bar');
const counter_number        = document.getElementById('counter_number');
const start                 = document.getElementById('start');
const stop                  = document.getElementById('stop');
const counter_result        = document.getElementById('counter_result');

let counter;
let clear_count ;
start.addEventListener('click', (e) => {
    e.preventDefault();
    counter = counter_number.value;
   
    clear_count = setInterval(() => {

        let width = coun_load(counter_number.value, counter);
        counter_result.innerHTML =  `<h1> ${counter}</h1>`;
        progress_bar.style.width = `${width}%`;
        progress_bar.innerText = `${Math.floor(width)}%`;

        if(width > 50 && width <= 100){
            progress_bar.style.backgroundColor="#dc3545";
        }else if (width <= 50 && width > 25){
            progress_bar.style.backgroundColor="green"
        }else if (width <= 25){
            progress_bar.style.backgroundColor="black"
        }

        if (counter < 10){
            counter_result.innerHTML =  `<h1> 0${counter}</h1>`;
        }else{
            counter_result.innerHTML =  `<h1> ${counter}</h1>`;
        }

        if (counter == 0){
            clearInterval(clear_count)
        }

        counter--;

    }, 1000);

    stop.addEventListener('click', () => {
        clearInterval(clear_count);
    })

})