let frutas = ['abacaxi', 'melancia', 'banana'];

frutas.push('laranja');

for(fruta of frutas){
    document.write(" ", fruta," ");
}

frutas.pop();

for(fruta of frutas){
    document.write("<br>", fruta,"<br>");
}

frutas.unshift('caqui');

for(fruta of frutas){
    document.write(" ", fruta," ");
}

frutas.shift();

for(fruta of frutas){
    document.write("<br>", fruta,"<br>");
}

