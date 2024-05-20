interface Smartphone {
    credito: number;
    numeroChiamate: number;
}
class User implements Smartphone {
    credito: number;
    numeroChiamate: number;
    nome: string;
    cognome: string;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }

    ricarica(importo: number): void {
        this.credito += importo;
    }

    chiamata(minuti: number): void {
        const costoChiamata = 0.20; // costo per chiamata
        const costoTotale = costoChiamata * minuti;
        if (this.credito >= costoTotale) {
            this.credito -= costoTotale;
            this.numeroChiamate += minuti;
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    chiama404(): number {
        return this.credito;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}
const utente1 = new User("Mario", "Rossi");
utente1.ricarica(10); // Ricarica di 10 euro
utente1.chiamata(5); // Effettua una chiamata di 5 minuti
console.log("Credito residuo:", utente1.chiama404()); // Verifica il credito residuo
console.log("Numero di chiamate:", utente1.getNumeroChiamate()); // Verifica il numero di chiamate

utente1.azzeraChiamate(); // Azzera il numero di chiamate
console.log("Numero di chiamate dopo azzeramento:", utente1.getNumeroChiamate()); // Verifica il numero di chiamate azzerato
