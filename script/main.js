import * as GameLogic from "./game-logic";


// Tu ma być tylko część wywołująca inne funkcje z zewnętrznych plików
// starajmy się rozbijać kod na mniejsze pliki
function start() {

    setInterval(GameLogic.autoClicker,1000); //pracownicy co klikają za cb
    
}

//wyświetl GameLogic.money i inne na ekranie