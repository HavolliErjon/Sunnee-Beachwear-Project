// Classe Prodotto
var Prodotto = /** @class */ (function () {
    function Prodotto(tipo, idUnivoco, taglia, colore, stato) {
        this.tipo = tipo;
        this.idUnivoco = idUnivoco;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    Prodotto.prototype.assegnaCliente = function (cliente) {
        this.cliente = cliente;
        this.stato = 'esaurito';
    };
    return Prodotto;
}());
// Classe Cliente
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, metodoPagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamentoPreferito = metodoPagamentoPreferito;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        if (prodotto.stato === 'disponibile') {
            prodotto.assegnaCliente(this);
            console.log("".concat(this.nome, " ").concat(this.cognome, " ha ordinato un ").concat(prodotto.tipo, " (ID: ").concat(prodotto.idUnivoco, ")."));
        }
        else {
            console.log("Il prodotto ".concat(prodotto.idUnivoco, " non \u00E8 disponibile al momento."));
        }
    };
    return Cliente;
}());
// Classe ProcessoProduzione
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nomeProcesso, descrizione) {
        this.prodottiInProduzione = [];
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log("Il prodotto ".concat(prodotto.idUnivoco, " \u00E8 stato aggiunto al processo di produzione ").concat(this.nomeProcesso, "."));
    };
    return ProcessoProduzione;
}());
// Creazione degli Oggetti 
// (Istanza di Prodotti)
var prodotto1 = new Prodotto('costume da bagno', '12345', 'M', 'blu', 'disponibile');
var prodotto2 = new Prodotto('pareo', '67890', 'L', 'rosso', 'disponibile');
var prodotto3 = new Prodotto('cappello', '11223', 'XL', 'bianco', 'disponibile');
// Istanza di Clienti
var cliente1 = new Cliente('Luca', 'Bianchi', 'luca@mail.com', 'carta');
var cliente2 = new Cliente('Maria', 'Rossi', 'maria@mail.com', 'paypal');
// Istanza di Processo di Produzione
var processo1 = new ProcessoProduzione('Riciclaggio Plastica Marina', 'Produzione di articoli beachwear da plastica riciclata raccolta in mare.');
processo1.aggiungiProdotto(prodotto1);
processo1.aggiungiProdotto(prodotto2);
processo1.aggiungiProdotto(prodotto3);
// Ordinazione dei prodotti da parte dei clienti
cliente1.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto2);
cliente1.ordinaProdotto(prodotto3);
