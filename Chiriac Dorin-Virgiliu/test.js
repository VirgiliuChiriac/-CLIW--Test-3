let nr_workers = 4;
let precision = 250000000;

let inside_circle = 0;
let workers = [];
let total_responses = nr_workers;

let time = Date.now();

document.body.innerHTML += "Computting...";

for(let i = 0; i < nr_workers; i++){
    workers.push(new Worker('worker.js'));
    workers[workers.length - 1].postMessage(precision);

    workers[workers.length - 1].onmessage = event =>{
        inside_circle += event.data;	
        total_responses--;	
    }
}

function wait(){
    if(total_responses === 0){
        document.body.innerHTML = "";
        document.body.innerHTML += "Nr. workers: ";
        document.body.innerHTML += nr_workers;
        document.body.innerHTML += "<br>Precision: ";
        document.body.innerHTML += precision;	
        document.body.innerHTML += "<br>Aproximation: ";
        document.body.innerHTML += inside_circle * 4 / (nr_workers * precision);	
        document.body.innerHTML += "<br>Math.PI: ";
        document.body.innerHTML += Math.PI;	
        document.body.innerHTML += "<br>TIME: ";
        document.body.innerHTML += ((Date.now() - time) / 1000) + "s";
    } else {
        setTimeout(wait, 100);
    }
}

wait();
