import express from "express" ;

const app = express();
const port = 3000;

let productos = [
    {id: 0, nombre: "isparta", price: 100 },
    {id: 1, nombre: "cataleya", price: 200},
]

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });


app.get("/productos", (req, res) => {
    
    res.json(productos);
});

app.get("/productos/:id", (req, res) => {
 
    const idDelPedido = req.params.id;
    const productoEncontrado = producto.find((u) => (u.id == idDelPedido));
    if(productoEncontrado){
       return res.json(usuarioEncontrado)
    }else{
        return res.json({ 
         error: "producto no encontrado con el id" + idDelPedido,
    });
    }
});





