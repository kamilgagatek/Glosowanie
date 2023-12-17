var wynik1=0;
var wynik2=0;
var wynik3=0;
var wynik4=0;
var wynikirazem=0;

function kandydat1() {
    wynik1++;
    wynikirazem++; 
    var wysokosc1=Math.round((wynik1/wynikirazem)*100,1);
    var wysokosc2=Math.round((wynik2/wynikirazem)*100,1);
    var wysokosc3=Math.round((wynik3/wynikirazem)*100,1);
    var wysokosc4=Math.round((wynik4/wynikirazem)*100,1);
    document.getElementById("slupek1").style.height=wysokosc1 + '%';
    document.getElementById("slupek2").style.height=wysokosc2 + '%';
    document.getElementById("slupek3").style.height=wysokosc3 + '%';
    document.getElementById("slupek4").style.height=wysokosc4 + '%';
    document.getElementById("wynik1").innerHTML=wysokosc1 + "%" + " (" + wynik1 + ")";
    document.getElementById("wynik2").innerHTML=wysokosc2 + "%" + " (" + wynik2 + ")";
    document.getElementById("wynik3").innerHTML=wysokosc3 + "%" + " (" + wynik3 + ")";
    document.getElementById("wynik4").innerHTML=wysokosc4 + "%" + " (" + wynik4 + ")";

    if(wynik1 == 20) {
        wynik1=0;
        wynik2=0;
        wynik3=0;
        wynik4=0;
        alert("Kandydat nr.1 wygrał");   
    }
}
function kandydat2() {
    wynik2++;
    wynikirazem++;
    var wysokosc1=Math.round((wynik1/wynikirazem)*100,1);
    var wysokosc2=Math.round((wynik2/wynikirazem)*100,1);
    var wysokosc3=Math.round((wynik3/wynikirazem)*100,1);
    var wysokosc4=Math.round((wynik4/wynikirazem)*100,1);
    document.getElementById("slupek1").style.height=wysokosc1 + '%';
    document.getElementById("slupek2").style.height=wysokosc2 + '%';
    document.getElementById("slupek3").style.height=wysokosc3 + '%';
    document.getElementById("slupek4").style.height=wysokosc4 + '%';
    document.getElementById("wynik1").innerHTML=wysokosc1 + "%" + " (" + wynik1 + ")";
    document.getElementById("wynik2").innerHTML=wysokosc2 + "%" + " (" + wynik2 + ")";
    document.getElementById("wynik3").innerHTML=wysokosc3 + "%" + " (" + wynik3 + ")";
    document.getElementById("wynik4").innerHTML=wysokosc4 + "%" + " (" + wynik4 + ")";
    
    if(wynik2 == 20) {
        alert("Kandydat nr.2 wygrał");
        wynik1=0;
        wynik2=0;
        wynik3=0;
        wynik4=0;
    }
}
function kandydat3() {
    wynik3++;
    wynikirazem++;
    var wysokosc1=Math.round((wynik1/wynikirazem)*100,1);
    var wysokosc2=Math.round((wynik2/wynikirazem)*100,1);
    var wysokosc3=Math.round((wynik3/wynikirazem)*100,1);
    var wysokosc4=Math.round((wynik4/wynikirazem)*100,1);
    document.getElementById("slupek1").style.height=wysokosc1 + '%';
    document.getElementById("slupek2").style.height=wysokosc2 + '%';
    document.getElementById("slupek3").style.height=wysokosc3 + '%';
    document.getElementById("slupek4").style.height=wysokosc4 + '%';
    document.getElementById("wynik1").innerHTML=wysokosc1 + "%" + " (" + wynik1 + ")";
    document.getElementById("wynik2").innerHTML=wysokosc2 + "%" + " (" + wynik2 + ")";
    document.getElementById("wynik3").innerHTML=wysokosc3 + "%" + " (" + wynik3 + ")";
    document.getElementById("wynik4").innerHTML=wysokosc4 + "%" + " (" + wynik4 + ")";

    if(wynik3 == 20) {
        alert("Kandydat nr.3 wygrał");
        wynik1=0;
        wynik2=0;
        wynik3=0;
        wynik4=0;
    }
}
function kandydat4() {
    wynik4++;
    wynikirazem++;
    var wysokosc1=Math.round((wynik1/wynikirazem)*100,1);
    var wysokosc2=Math.round((wynik2/wynikirazem)*100,1);
    var wysokosc3=Math.round((wynik3/wynikirazem)*100,1);
    var wysokosc4=Math.round((wynik4/wynikirazem)*100,1);
    document.getElementById("slupek1").style.height=wysokosc1 + '%';
    document.getElementById("slupek2").style.height=wysokosc2 + '%';
    document.getElementById("slupek3").style.height=wysokosc3 + '%';
    document.getElementById("slupek4").style.height=wysokosc4 + '%';
    document.getElementById("wynik1").innerHTML=wysokosc1 + "%" + " (" + wynik1 + ")";
    document.getElementById("wynik2").innerHTML=wysokosc2 + "%" + " (" + wynik2 + ")";
    document.getElementById("wynik3").innerHTML=wysokosc3 + "%" + " (" + wynik3 + ")";
    document.getElementById("wynik4").innerHTML=wysokosc4 + "%" + " (" + wynik4 + ")";

    if(wynik4 == 20) {
        alert("Kandydat nr.4 wygrał");
        wynik1=0;
        wynik2=0;
        wynik3=0;
        wynik4=0;
    }
}

