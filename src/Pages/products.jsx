import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Layouts/Navbar";

const product = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1500000,
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ea veniam laboriosam
                     accusantium nulla quia magni molestias laborum ab repudiandae ex dolorem veritatis.`
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 2500000,
        image: "/images/shoes-3.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ea veniam laboriosam
                     accusantium nulla quia magni molestias laborum ab repudiandae ex dolorem veritatis.`
    },
    {
        id: 3,
        name: "Sepatu Impor",
        price: 4600000,
        image: "/images/shoes-4.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ea veniam laboriosam
                     accusantium nulla quia magni molestias laborum ab repudiandae ex dolorem veritatis.`
    }
]

const ProductsPage = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products] = useState(product);

        useEffect(() => {
            setCart(JSON.parse(localStorage.getItem("cart")) || []);
        }, []);

        

        useEffect(() => {
            if (products.length > 0 && cart.length > 0) {
                const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
            } else {
                setTotalPrice(0);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        }, [cart, products]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = "/login";
    };

    const handleAddToCart = (id) => {
        if(cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([
                ...cart, {id, qty: 1}
            ])
        }
    };

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
    <>
        {/* Navbar menggunakan Flexbox */}
        <Navbar title="Shopping Cart" onLogout={handleLogout} />

        {/* Main Layout */}
        <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-8">

            {/* Product Section */}
            <section className="min-w-0 lg:col-span-2">
                <h2 className="mb-5 text-2xl font-bold text-slate-800">
                    Daftar Produk
                </h2>

                {/* CSS Grid untuk Card Product */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} />

                                <CardProduct.Body name={product.name}>
                                    {product.description}
                                </CardProduct.Body>

                                <CardProduct.Footer
                                    price={product.price}
                                    id={product.id}
                                    handleAddToCart={handleAddToCart}
                                />
                               
                            </CardProduct>
                        ))}
                </div>
            </section>

            {/* Cart Section */}
            <aside className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-1">
                <h2 className="mb-5 text-2xl font-bold text-blue-800">
                    Cart
                </h2>

                {/* Agar tabel bisa di-scroll pada mobile */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[340px] text-left text-sm">
                        <thead>
                            <tr className="border-b text-slate-600">
                                <th className="px-2 py-3">Product</th>
                                <th className="px-2 py-3">Price</th>
                                <th className="px-2 py-3">Quantity</th>
                                <th className="px-2 py-3">Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.length > 0 &&
                                cart.map((item) => {
                                    const product = products.find(
                                        (product) => product.id === item.id
                                    );

                                    if (!product) return null;

                                    return (
                                        <tr key={item.id} className="border-b">
                                            <td className="px-2 py-3">
                                                {product.name}
                                            </td>

                                            <td className="px-2 py-3">
                                                {product.price.toLocaleString(
                                                    "id-ID",
                                                    {
                                                        style: "currency",
                                                        currency: "IDR"
                                                    }
                                                )}
                                            </td>

                                            <td className="px-2 py-3">
                                                {item.qty}
                                            </td>

                                            <td className="px-2 py-3">
                                                {(item.qty * product.price).toLocaleString(
                                                    "id-ID",
                                                    {
                                                        style: "currency",
                                                        currency: "IDR"
                                                    }
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}

                            <tr ref={totalPriceRef}>
                                <td colSpan={3} className="px-3 py-4">
                                    <b>Total Price</b>
                                </td>

                                <td className="px-3 py-4">
                                    <b>
                                        {totalPrice.toLocaleString("id-ID", {
                                            style: "currency",
                                            currency: "IDR"
                                        })}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {cart.length === 0 && (
                    <p className="mt-4 text-sm text-slate-500">
                        Keranjang masih kosong.
                    </p>
                )}
            </aside>
        </main>
    </>
);
}

export default ProductsPage;