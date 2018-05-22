let value, machine, contPlayer = 0, contMachine = 0, text;

function jokenpo(joke) {

    value = joke;
    machine = machineChoice();
    text = compare(value, machine);
    result();
}

function machineChoice() {

    machine = Math.floor((Math.random()*3));

    let options = [
        'pedra',
        'papel',
        'tesoura',
    ];

    return options[machine];
}

function pontuation(var1, desc) {
    let description = desc;

    function playerWin() {
        contPlayer++;
    }

    function machineWin() {
        contMachine++;
    }

    if (var1 === "player") {
        playerWin(description);
    } else if(var1 === "machine") {
        machineWin(description);
    }
    
    return description;
}

function compare(var1, var2) {
    if (var1 === var2) {
        return "Empate! Ninguém ganhou.";
    } else {
        switch(var1) {
            case "pedra":
                return (var2 === "tesoura") ? pontuation("player", "O jogador venceu! Pedra amassa a Tesoura.") : pontuation("machine", "A máquina venceu! Papel embrulha a pedra");

            case "papel":
                return (var2 === "pedra") ? pontuation("player", "O jogador venceu! Papel embrulha a Pedra.") : pontuation("machine", "A máquina venceu! Tesoura corta o Papel.");

            case "tesoura":
                return (var2 === "pedra") ? pontuation("machine", "A máquina venceu! Pedra amassa a Tesoura.") : pontuation("player", "O jogador venceu! Tesoura corta o Papel.");
        }
    }
}

function result() {
    document.querySelector("#player").innerHTML = '<h3 class="tcenter">Jogador <p>'+ contPlayer +'</p></h3> <br /> <img src="images/'+ value +'.png" alt="'+ value +'" class="img-rounded img-center img-responsive">';
    document.querySelector("#machine").innerHTML = '<h3 class="tcenter">Máquina <p>'+ contMachine +'</p></h3> <br /> <img src="images/'+ machine +'.png" alt="'+ machine +'" class="img-rounded img-center img-responsive">';
    document.querySelector("#vs").innerHTML = '<img src="images/vs.png" alt="Versus" class="vs img-center img-responsive" />';
    document.querySelector("#result").innerHTML = '<h3 class="tcenter mt20">'+ text +'</h3>';
}