import Button from "../Elements/Button/button";

const CardProduct = (props) => {
    const { children } = props;

    return (
        <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
            {children}
        </div>
    );
}

const Header = (props) => {
    const {image} = props;
    return(
    <a href="#">
        <img src={image} alt="product"
        className="h-52 rounded-t-xl p-5 w-full object-cover" />
    </a>
    );
}

const Body = (props) => {
    const {children, name} = props;
    return (
    <div className="px-5 pb-5 h-full">
        <a href="">
            <h5
            className="text-xl font-semibold text-slate-800">
                {name}
            </h5>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {children?.substring(0, 100)}...
            </p>
        </a>
    </div>
    );
}

const Footer = (props) => {
    const {price, handleAddToCart, id} = props;
    return(
    <div className="flex flex-col gap-3 border-t border-slade-100 px-5 py-4">
        <span className="text-lg font-bold text-slate-800">
        {" "} {price?.toLocaleString('id-ID', {style: 'currency', currency: "IDR"})}</span>
        <Button variant="bg-blue-600 hover:bg-blue-700"
        onClick={() => {handleAddToCart(id)}}
        className="w-full">Add To Cart</Button>
    </div>
    );
}


CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;