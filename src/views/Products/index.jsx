import React from "react";
import { Navbar } from "../../components/Navbar";
import Card from "../../components/ProductCard/Card";
import WhatsappLink from "../../components/whatsappLink";
import { Products } from "./mockProducts";
import './productsStyles.scss'

const Productos = () => {
    return (
        <>
            <Navbar />
            <h1>Productos</h1>
            <div className="products_container">
                {Products.map((i) => (
                    <Card
                        key={i.id}
                        title={i.title}
                        description={i.description}
                        image={i.img}
                        alt={i.alt}
                    />
                ))}
            </div>
            <WhatsappLink />
        </>
    );
};

export default Productos;
