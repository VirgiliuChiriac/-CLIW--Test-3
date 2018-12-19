onmessage = function(e) {
    let precision = e.data;

    let x, y;
    let count = 0;

    for(let i = 0; i < precision; i++){
        x = Math.random() * 2;
        y = Math.random() * 2;

        if(Math.pow(x - 1, 2) + Math.pow(y - 1, 2) <= 1){
            count++;
        }
    }
    
    postMessage(count);
}
