import Product from "./Product.jsx"
import './ProductTab.css'

export default function ProductTab() {
    return (
        <div className="ProductTab">
            <Product title="Logitech MX Master" idx={0}/>
            <Product title="Apple Pencil (2nd Gen)"  idx={1}/>
            <Product title="Zebronics"  idx={2}/>
            <Product title="Petronics Toad"  idx={3}/>
        </div>
    );
}
