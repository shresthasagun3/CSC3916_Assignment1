const express = require ('express'); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

//Capture all content types as raw Buffer 
app.use(express.raw({type: '*/*'})); 

//POST endpoint at root - echoes back request body 
app,post('/', (req, res) => {
    const contentType = req.get('Content-Type') || 'text/plain'; 
    res.set('Content-Type', contentType); 
    const body = req.body && req.body.length > 0 ? req.body : ''; 
    res.send (req.body); 
}); 

//Only start server if run directly (not imported for testing)
if (require.main === module) {
    app.listen (PORT, () => {
        console.log ('Echo server listening on port ${PORT}'); 
    }); 
}

module.exports = app; 