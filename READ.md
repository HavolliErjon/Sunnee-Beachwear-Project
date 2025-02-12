# Sunnee Beachwear Project

## Descrizione

Il progetto rappresenta un sistema in TypeScript che modella la struttura operativa di un brand di beachwear in plastica riciclata. Il sistema si concentra sulle interazioni tra clienti, prodotti beachwear e processi di produzione sostenibile. Il codice è strutturato utilizzando interfacce e classi che rappresentano i vari componenti del sistema.

Sunnee è un brand immaginario che si dedica alla produzione di costumi, parei e cappelli fatti con plastica riciclata, contribuendo a ridurre l'inquinamento marino.

Puoi vedere una versione interattiva del progetto su [CodePen](https://codepen.io/HavolliErjon/pen/ogNgvbK).

## Struttura del Progetto

Il progetto è suddiviso nelle seguenti componenti:

- **IProdotto**: Interfaccia per definire i prodotti (costumi, parei, cappelli).
- **ICliente**: Interfaccia per rappresentare i clienti.
- **IProcessoProduzione**: Interfaccia per rappresentare i processi di produzione sostenibile.
- **Prodotto**: Classe che implementa l'interfaccia `IProdotto` per gestire informazioni sui prodotti.
- **Cliente**: Classe che implementa l'interfaccia `ICliente` per gestire gli ordini dei clienti.
- **ProcessoProduzione**: Classe che implementa l'interfaccia `IProcessoProduzione` per gestire i processi di produzione dei prodotti.

## Funzionamento

1. I **prodotti** possono essere creati con specifici dettagli come tipo, taglia, colore e stato (disponibile o esaurito).
2. I **clienti** possono ordinare prodotti disponibili e ogni prodotto ordinato viene assegnato al cliente.
3. I **processi di produzione** permettono di aggiungere nuovi prodotti al ciclo produttivo sostenibile.

## Prerequisiti

Per eseguire il progetto, assicurati di avere i seguenti strumenti installati:

- [Node.js](https://nodejs.org/) (versione 14.x o superiore)
- [npm](https://www.npmjs.com/) (gestore pacchetti Node.js)



