//the multiple exports are kept insde curl bracket { }
//javascript modules allow you to breakup your code into seperate files
import subtract, {add, multiply} from "./es6_module.js"

console.log(add(1,2))
console.log(multiply(2,3))
console.log(subtract(5,6))