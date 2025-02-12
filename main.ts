// Interfacce
interface IProdotto {
  tipo: 'costume da bagno' | 'pareo' | 'cappello';  
  idUnivoco: string; 
  taglia: string;  
  colore: string;  
  stato: 'disponibile' | 'esaurito';  
  assegnaCliente(cliente: ICliente): void;  
}


interface ICliente {
  nome: string;  
  cognome: string; 
  email: string; 
  metodoPagamentoPreferito: 'carta' | 'paypal' | 'bonifico';  
  ordinaProdotto(prodotto: IProdotto): void; 
}


interface IProcessoProduzione {
  nomeProcesso: string;  
  descrizione: string;  
  prodottiInProduzione: IProdotto[];  
  aggiungiProdotto(prodotto: IProdotto): void;  
}

// Classe Prodotto
class Prodotto implements IProdotto {
  tipo: 'costume da bagno' | 'pareo' | 'cappello';
  idUnivoco: string;
  taglia: string;
  colore: string;
  stato: 'disponibile' | 'esaurito';
  cliente?: ICliente;

  constructor(tipo: 'costume da bagno' | 'pareo' | 'cappello', idUnivoco: string, taglia: string, colore: string, stato: 'disponibile' | 'esaurito') {
    this.tipo = tipo;
    this.idUnivoco = idUnivoco;
    this.taglia = taglia;
    this.colore = colore;
    this.stato = stato;
  }

 
  assegnaCliente(cliente: ICliente): void {
    this.cliente = cliente;
    this.stato = 'esaurito'; 
  }
}

// Classe Cliente
class Cliente implements ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: 'carta' | 'paypal' | 'bonifico';

  constructor(nome: string, cognome: string, email: string, metodoPagamentoPreferito: 'carta' | 'paypal' | 'bonifico') {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamentoPreferito = metodoPagamentoPreferito;
  }

  
  ordinaProdotto(prodotto: IProdotto): void {
    if (prodotto.stato === 'disponibile') {
      prodotto.assegnaCliente(this);  
      console.log(`${this.nome} ${this.cognome} ha ordinato un ${prodotto.tipo} (ID: ${prodotto.idUnivoco}).`);
    } else {
      console.log(`Il prodotto ${prodotto.idUnivoco} non è disponibile al momento.`);
    }
  }
}

// Classe ProcessoProduzione
class ProcessoProduzione implements IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[] = [];

  constructor(nomeProcesso: string, descrizione: string) {
    this.nomeProcesso = nomeProcesso;
    this.descrizione = descrizione;
  }

  
  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);
    console.log(`Il prodotto ${prodotto.idUnivoco} è stato aggiunto al processo di produzione ${this.nomeProcesso}.`);
  }
}

// Creazione degli Oggetti 
// (Istanza di Prodotti)
const prodotto1 = new Prodotto('costume da bagno', '12345', 'M', 'blu', 'disponibile');
const prodotto2 = new Prodotto('pareo', '67890', 'L', 'rosso', 'disponibile');
const prodotto3 = new Prodotto('cappello', '11223', 'XL', 'bianco', 'disponibile');

// Istanza di Clienti
const cliente1 = new Cliente('Luca', 'Bianchi', 'luca@mail.com', 'carta');
const cliente2 = new Cliente('Maria', 'Rossi', 'maria@mail.com', 'paypal');

// Istanza di Processo di Produzione
const processo1 = new ProcessoProduzione('Riciclaggio Plastica Marina', 'Produzione di articoli beachwear da plastica riciclata raccolta in mare.');


processo1.aggiungiProdotto(prodotto1);
processo1.aggiungiProdotto(prodotto2);
processo1.aggiungiProdotto(prodotto3);

// Ordinazione dei prodotti da parte dei clienti
cliente1.ordinaProdotto(prodotto1);  
cliente2.ordinaProdotto(prodotto2);  
cliente1.ordinaProdotto(prodotto3);  
