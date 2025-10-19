<!--sintassi Markdown-->
# fs9-tech-ecommerce <!--h1-->

## Entities<!--h2-->

1. User → Utenti registrati che potranno effettuare acquisti;
2. Products → Prodotti acquistabili
3. Categories → Categorie dei prodotti
4. Tag → Tag da associare ai prodotti 
5. Cart → Contiene i prodotti
6. Review → Recensioni per i prodotti

## Routes
<!--sezione pubblica-->
1. `/` → Home page
2. `/categories `→ Pagine delle categorie
3. `/search` → Pagina per la ricerca dei prodotti 
4. `/products/:id` → Pagina del prodotto specifico
5. `/cart` → Pagiona del carrello
6. `/login` → Pagina di login utente
7.` /register` → Pagina di registrazione utenti
<!--sezione privata-->
8. `/dashboard` → Pagina con riepilogo ordini

## Urls

- `http://localhost:5173/` → pages/Home.jsx
- `http://localhost:5173/login` → pages/Login.jsx
- `http://localhost:5173/register` → pages/Register.jsx
- `http://localhost:5173/products/1` → pages/Product.jsx
- `http://localhost:5173/cart` → pages/Cart.jsx
- `http://localhost:5173/categories` → pages/Categories.jsx
- `http://localhost:5173/dashboard` → pages/dashboard/Home.jsx

 `protocollo://host:port/path`
 `http://localhost:5173/`
 `http://localhost:5173/login`
 `http://localhost:5173/register`