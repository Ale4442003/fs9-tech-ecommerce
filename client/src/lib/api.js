// Questo file simula una piccola API per il login: controlla se l'email e la password esistono nella lista di utenti finti (USERS).
import { USERS } from "../data/db"; 

export const lib = {
  auth: {
    /**
     * user login
     * @param {object} payload - oggetto con email e password scritte dall’utente
     * @param {string} payload.email - email dell’utente
     * @param {string} payload.password - password dell’utente
     * @returns {Promise<object>|Promise<Error>} - utente trovato oppure errore
     */
    login: (payload) => {
      const { email, password } = payload; // prendo email e password dall’oggetto ricevuto

      // creo una nuova promessa per simulare una chiamata al server
      return new Promise((resolve, reject) => {
        // cerco l’utente che ha la stessa email e password
        const user = USERS.find(u => u.email == email && u.password == password);
        
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
        if (user) return resolve(user); // se lo trovo, risolvo la promessa e restituisco l’utente
        return reject(new Error("user not foung")); // se non lo trovo, restituisco un errore
      });
    },
  },
};
