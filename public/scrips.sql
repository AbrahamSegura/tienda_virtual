SELECT 
    catalogo.id_catalogo, 
    catalogo.nombre_producto, 
    catalogo.precio_divisa, 
    catalogo.modificado, 
    catalogo.linea, 
    catalogo.marca, 
    catalogo.componente, 
    img_producto.link_img 
    FROM catalogo JOIN img_producto ON img_producto.id_catalogo = catalogo.id_catalogo 
    GROUP BY catalogo.nombre_producto 
    ORDER BY catalogo.id_catalogo;