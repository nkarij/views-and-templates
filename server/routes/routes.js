// routes.js filen bestemmer hvad man kan be serveren om at gøre. En slags API.
// Man må kun lave EN module export
// MAN MÅ IKKE FORTÆLLE AT ROUTEN SKAL LEDE I VIEWS, DET VED DEN SELV..
// DET SAMME GÆLDER PUBLIC-MAPPEN
// NÅR DER LAVES EN GET FEJL, KIG I ROUTES

module.exports = (app) => {
   app.get('/', (req, res, next) => {
      // render() indlæser en ejs-fil, og det er ikke nødvendigt at skrive fil-endelsen.
      // jeg ved ikke hvordan den har fået besked på at lede i views..? Via app.js?
      res.render('home', {
         // sender et object med
         "title" : "Min forside"
      });
   });

   // den kan ikke finde filen, medmindre at du har skrevet fil/url-stien, fx /product
   app.get('/product', (req, res, next) => {
      res.render('product');
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });

};


