    var wynik1=0;
    var wynik2=0;
    var wynik3=0;
    var wynik4=0;
    var wynikirazem=0;
    var osoba1="Jan Kowalski";
    var osoba2="Marek Ptak";
    var osoba3="Kazimierz Baran";
    var osoba4="Agnieszka Hebda";
    var slupek1=document.getElementById("slupek1");
    var slupek2=document.getElementById("slupek2");
    var slupek3=document.getElementById("slupek3");
    var slupek4=document.getElementById("slupek4");
    var wysokosc1=0;
    var wysokosc2=0;
    var wysokosc3=0;
    var wysokosc4=0;
    var procwysokosci1=document.getElementById("wynik1");
    var procwysokosci2=document.getElementById("wynik2");
    var procwysokosci3=document.getElementById("wynik3");
    var procwysokosci4=document.getElementById("wynik4");
    var wygrany=document.getElementById("osoba");
    var zdjeciewygranego=document.getElementById("zdjwygrany");
    var w1=document.getElementById("w1");
    var wygrana=document.getElementById("wygrana");

console.log(osoba1);
function kandydat1() {
    wynik1++;
    wynikirazem++; 
    wysokosc1=Math.round((wynik1/wynikirazem)*100,1);
    wysokosc2=Math.round((wynik2/wynikirazem)*100,1);
    wysokosc3=Math.round((wynik3/wynikirazem)*100,1);
    wysokosc4=Math.round((wynik4/wynikirazem)*100,1);
    slupek1.style.height=wysokosc1 + '%';
    slupek2.style.height=wysokosc2 + '%';
    slupek3.style.height=wysokosc3 + '%';
    slupek4.style.height=wysokosc4 + '%';
    procwysokosci1.innerHTML=wysokosc1 + "%" + " (" + wynik1 + ")";
    procwysokosci2.innerHTML=wysokosc2 + "%" + " (" + wynik2 + ")";
    procwysokosci3.innerHTML=wysokosc3 + "%" + " (" + wynik3 + ")";
    procwysokosci4.innerHTML=wysokosc4 + "%" + " (" + wynik4 + ")";
    if(wynik1 == 20) {
        wygrany.innerHTML=osoba1;
        zdjeciewygranego.src = './osoba1.jpg';
        w1.classList.remove("dispnone");
        wygrana.classList.remove("dispnone");
    }
}
function kandydat2() {
    wynik2++;
    wynikirazem++;
    wysokosc1=Math.round((wynik1/wynikirazem)*100,1);
    wysokosc2=Math.round((wynik2/wynikirazem)*100,1);
    wysokosc3=Math.round((wynik3/wynikirazem)*100,1);
    wysokosc4=Math.round((wynik4/wynikirazem)*100,1);
    slupek1.style.height=wysokosc1 + '%';
    slupek2.style.height=wysokosc2 + '%';
    slupek3.style.height=wysokosc3 + '%';
    slupek4.style.height=wysokosc4 + '%';
    procwysokosci1.innerHTML=wysokosc1 + "%" + " (" + wynik1 + ")";
    procwysokosci2.innerHTML=wysokosc2 + "%" + " (" + wynik2 + ")";
    procwysokosci3.innerHTML=wysokosc3 + "%" + " (" + wynik3 + ")";
    procwysokosci4.innerHTML=wysokosc4 + "%" + " (" + wynik4 + ")";  
    if(wynik2 == 20) {
        wygrany.innerHTML=osoba2;
        zdjeciewygranego.src = './osoba2.jpg';
        w1.classList.remove("dispnone");
        wygrana.classList.remove("dispnone");
    }
}
function kandydat3() {
    wynik3++;
    wynikirazem++;
    wysokosc1=Math.round((wynik1/wynikirazem)*100,1);
    wysokosc2=Math.round((wynik2/wynikirazem)*100,1);
    wysokosc3=Math.round((wynik3/wynikirazem)*100,1);
    wysokosc4=Math.round((wynik4/wynikirazem)*100,1);
    slupek1.style.height=wysokosc1 + '%';
    slupek2.style.height=wysokosc2 + '%';
    slupek3.style.height=wysokosc3 + '%';
    slupek4.style.height=wysokosc4 + '%';
    procwysokosci1.innerHTML=wysokosc1 + "%" + " (" + wynik1 + ")";
    procwysokosci2.innerHTML=wysokosc2 + "%" + " (" + wynik2 + ")";
    procwysokosci3.innerHTML=wysokosc3 + "%" + " (" + wynik3 + ")";
    procwysokosci4.innerHTML=wysokosc4 + "%" + " (" + wynik4 + ")";
    if(wynik3 == 20) {
        wygrany.innerHTML=osoba3;
        zdjeciewygranego.src = './osoba3.jpg';
        w1.classList.remove("dispnone");
        wygrana.classList.remove("dispnone");
    }
}
function kandydat4() {
    wynik4++;
    wynikirazem++;
    wysokosc1=Math.round((wynik1/wynikirazem)*100,1);
    wysokosc2=Math.round((wynik2/wynikirazem)*100,1);
    wysokosc3=Math.round((wynik3/wynikirazem)*100,1);
    wysokosc4=Math.round((wynik4/wynikirazem)*100,1);
    slupek1.style.height=wysokosc1 + '%';
    slupek2.style.height=wysokosc2 + '%';
    slupek3.style.height=wysokosc3 + '%';
    slupek4.style.height=wysokosc4 + '%';
    procwysokosci1.innerHTML=wysokosc1 + "%" + " (" + wynik1 + ")";
    procwysokosci2.innerHTML=wysokosc2 + "%" + " (" + wynik2 + ")";
    procwysokosci3.innerHTML=wysokosc3 + "%" + " (" + wynik3 + ")";
    procwysokosci4.innerHTML=wysokosc4 + "%" + " (" + wynik4 + ")";
    if(wynik4 == 20) {
        wygrany.innerHTML=osoba4;
        zdjeciewygranego.src = './osoba4.jpg';
        w1.classList.remove("dispnone");
        wygrana.classList.remove("dispnone");
    }
}
function usun() {
    w1.classList.add("dispnone");
    wygrana.classList.add("dispnone");
    wynik1=0;
    wynik2=0;
    wynik3=0;
    wynik4=0;
    wynikirazem=0;
    slupek1.style.height=0 + '%';
    slupek2.style.height=0 + '%';
    slupek3.style.height=0 + '%';
    slupek4.style.height=0 + '%';
    procwysokosci1.innerHTML= 0 + "%" + " (" + 0 + ")";
    procwysokosci2.innerHTML=0 + "%" + " (" + 0 + ")";
    procwysokosci3.innerHTML=0 + "%" + " (" + 0 + ")";
    procwysokosci4.innerHTML=0 + "%" + " (" + 0 + ")";
}
