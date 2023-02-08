const output = document.getElementById('output');

const display = (num)=>{
    output.value += num;
}
const calculate = ()=>{
    try{
        output.value = eval(output.value);
        console.log(output.value)
    }
    catch(err){
        alert("Invalid Syntax");
    }
}
const clearInput = ()=>{
    output.value = "";
}
const del = ()=>{
    output.value = output.value.slice(0, -1);
}
