SELECT 
    catalogo.id_catalogo, 
    catalogo.nombre_producto,
    catalogo.nombre_sede, 
    catalogo.precio_divisa, 
    catalogo.modificado, 
    catalogo.linea,
    catalogo.presentacion_2,
    catalogo.marca, 
    catalogo.componente,
    catalogo.status, 
    img_producto.link_img 
    FROM catalogo JOIN img_producto ON img_producto.id_catalogo = catalogo.id_catalogo 
    ORDER BY catalogo.id_catalogo;