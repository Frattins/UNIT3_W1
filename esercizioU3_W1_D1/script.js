var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (importo) {
        this.credito += importo;
    };
    User.prototype.chiamata = function (minuti) {
        var costoChiamata = 0.20; // costo per chiamata
        var costoTotale = costoChiamata * minuti;
        if (this.credito >= costoTotale) {
            this.credito -= costoTotale;
            this.numeroChiamate += minuti;
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var utente1 = new User("Mario", "Rossi");
utente1.ricarica(10); // Ricarica di 10 euro
utente1.chiamata(5); // Effettua una chiamata di 5 minuti
console.log("Credito residuo:", utente1.chiama404()); // Verifica il credito residuo
console.log("Numero di chiamate:", utente1.getNumeroChiamate()); // Verifica il numero di chiamate
utente1.azzeraChiamate(); // Azzera il numero di chiamate
console.log("Numero di chiamate dopo azzeramento:", utente1.getNumeroChiamate()); // Verifica il numero di chiamate azzerato
