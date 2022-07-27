function stopWatch(){
    let count = 0;
    return function(){
        count++
        return count

    }

}

function closure() {
    let counted = 0;
    return {
        count: function () {
            counted++
        },
        getTheCount: function () {
            return "Counted till " + counted;
        }
    };
}
const result = closure()
const result2 =  result().count

const clock1 = stopWatch();

console.log(clock1())
console.log(clock1())
console.log(clock1())
console.log(clock1())

const clock2 = stopWatch();
console.log(clock2())
console.log(clock2())
console.log(clock2())
console.log(clock1())
console.log(clock1())
console.log(clock2())
console.log(clock2())



