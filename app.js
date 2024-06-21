function hour2minutes(){
    input = document.getElementById("inputnumber").value
    result = input*60
    str = result + " นาที"
    console.log(result)
    
    document.getElementById("result").innerHTML = str
}

function minutes2hour(){
    input = document.getElementById("inputnumber").value
    result = parseInt(input/60)
    result2Str = toString(result)
    result2 = input/60
    result2 = result2.toFixed(2)
    index = result2.indexOf(".");
    result2 = result2.substring(index);
    result2 = (parseFloat(result2))*60
    // result = toString(result)

    str = result +" ชั่วโมง " + result2 + " นาที"
    console.log(result)
    document.getElementById("result").innerHTML = str
}

const express = require('express');
const app = express();
const port = 8080; // Choose a port number

app.get('/', (req, res) => {
    res.send('welcome to my app service');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});