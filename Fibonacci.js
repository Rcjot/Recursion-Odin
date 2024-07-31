// Fibonacci using iteration:

function iterateFib(num){
    let Fib = []
    let ereyester = 0;
    let yester = 1;
    for (let i = 0; i < num; i++){
        if (i === 0) {
            Fib.push(i);
        }else if (i === 1){
            Fib.push(i);
        }else {
            let sum = ereyester + yester
            ereyester = yester;
            yester = sum;
            Fib.push(sum);
        }
    }
    console.log(Fib);
};

iterateFib(8);

function recurseFib(num, Fib = [0, 1]) {
    if (Fib.length === 0){
        Fib.push(0);
        return recurseFib(num, Fib);
    }else if(Fib.length === 1){
        Fib.push(1);
        return recurseFib(num,Fib);
    }
    if(Fib.length === num){
        return Fib;
    }else {
        Fib.push(Fib[Fib.length - 1] + Fib[Fib.length - 2]);
        return recurseFib(num, Fib);
    }
};

console.log(recurseFib(8));