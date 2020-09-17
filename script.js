let term = prompt('Write how many terms do you want to see: ');
function fib(term){
    let preceding = 0
    let current = 1
    let next = 1

    for(let i = 0; i < term ; i++){
        document.write(preceding + '<br>')
        next = current + preceding
        preceding = current
        current = next
    }

}

console.log(fib(term))


