const checkNum = (n) => {
    if (n%2==0) {
        document.write("number is even <br>")
    } else {
        document.write("number is odd <br>")
    }
}
checkNum(5)

// no arg. no return 
const f1 = () => {
    document.write("no arg. no return <br>")
}
f1()

// with arg. no return 
const f2 = (n) => {
    document.write(n+" <br>")
}
f2(18)

// no arg. withreturn 
const f3 = () => {
    return "hello"
}
document.write(f3()+" <br>")

// with arg. with return 
const f4 = (n) => {
    return n*n
}
document.write("square of 18: "+f4(18))