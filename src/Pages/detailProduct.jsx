import { useParams, Link } from "react-router-dom";

  const product = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1500000,
        image: "/images/shoes-1.jpg",
        description: "Sepatu baru dengan desain modern dan nyaman digunakan."
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 2500000,
        image: "/images/shoes-3.jpg",
        description: "Sepatu dengan desain klasik dan kualitas terbaik."
    },
    {
        id: 3,
        name: "Sepatu Impor",
        price: 4600000,
        image: "/images/shoes-4.jpg",
        description: "Sepatu impor dengan kualitas premium."
    }
];

    const DetailProductPage = () => {
      const {id} = useParams();
      const selectedProduct = product.find((item) => item.id === Number(id));

    if (!selectedProduct) {
      return (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold">
            Produk Tidak Temukan
          </h1>
          <Link to="/products" className="text-blue-600">
            Kembali ke Produk
          </Link>
        </div>
      );
    }

    return(
      <>
      <div className="mx-auto max-w-5xl p-8">
            <Link
                to="/products"
                className="mb-6 inline-block text-blue-600 hover:underline"
            >
                Kembali ke Produk
            </Link>
      <div
            className="grid grid-cols-1 gap-8 rounded-xl bg-white p-6 shadow-md md:grid-cols-2">
            <img src={selectedProduct.image} alt={selectedProduct.name}
            className="h-80 w-full rounded-lg object-cover" />

          <div>
            <h1 className="mb-4 text-3xl font-bold text-slate-800">
            {selectedProduct.name}
            </h1>

            <p className="mb-4 text-xl font-bold text-blue-700">
              {selectedProduct.price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}
            </p>

            <p className="leading-relaxed text-slate-600">
              {selectedProduct.description}
            </p>
          </div>
          </div>
          </div>
      </>
    )
    };

export default DetailProductPage;