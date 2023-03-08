let input1 = document.getElementById("i1");
let input2 = document.getElementById("i2");
let button = document.getElementById("convert");
let opt1 = document.getElementById("input1");
let opt2 = document.getElementById("input2");


function convert(){
    input1 = Number(input1.value);
    input2 = Number(input2.value);
    opt1 = opt1.value;
    opt2 = opt2.value;
    console.log(opt1);
    console.log(opt2);
    console.log(input1);
    console.log(input2);
    
    if (opt1 == 'Kelvin' && opt2 == 'Celcius'){
        let output = input1 - 273.15;
        document.getElementById("i2").value = output;
        document.getElementById("result").innerHTML = input1 + " "+opt1+" = "+output + " " + opt2;
    }
    else if (opt1 == 'Kelvin' && opt2 == 'Farenheit'){
        let output = (input1 - 273.15) * 9/5 + 32;
        document.getElementById("i2").value = output;
    document.getElementById("result").innerHTML =input1 + " "+opt1+" = "+output + " " + opt2;
    }
    else if (opt1 == 'Celcius' && opt2 == 'Farenheit'){
        let output = input1 * (9/5)+32;
        document.getElementById("i2").value = output;
    document.getElementById("result").innerHTML = input1 + " "+opt1+" = "+output + " " + opt2;
    }
    else if (opt1 == 'Celcius' && opt2 == 'Kelvin'){
        let output = input1 + 274.15;
        document.getElementById("i2").value = eval(output);
    document.getElementById("result").innerHTML = input1 + " "+opt1+" = "+output + " " + opt2;
    }
    else if (opt1 == 'Farenheit' && opt2 == 'Celcius'){
        let output = (input1-32)*5/9;
        document.getElementById("i2").value = output;
    document.getElementById("result").innerHTML = input1 + " "+opt1+" = "+output + " " + opt2;
    }
    else if (opt1 == 'Farenheit' && opt2 == 'Kelvin'){
        let output = (input1-32)*5/9 + 273.15;
        document.getElementById("i2").value = output;
    document.getElementById("result").innerHTML = input1 + " "+opt1+" = "+output + " " + opt2;
    }
    else if (opt1 == opt2){
        alert('Both the selected units of conversion are\nSAME');
    }
}

function print(op1,op2,inp,out){
    let printstmt = op1
}
function clr(){
    window.location.reload();
}