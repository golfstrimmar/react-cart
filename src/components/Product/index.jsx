import ButtonDelite from "../ButtonDelite";
import Count from "../Count";
import formatPrice  from "../../utils/priceFormater";
import "./style.scss";

const Product = ({
  product,
  DeliteProducts,
  increase,
  decrease,
  changeValue,
}) => {
  const { title, img, priceTotal, count, id } = product;

  
  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={`${product.title}`} />
      </div>
      <div className="product__title">{title}</div>

      <Count
        count={count}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
        id={id}
      />

      <div className="product__price">
        {formatPrice(priceTotal)} руб.
      </div>
      <div className="product__controls">
        <ButtonDelite DeliteProducts={DeliteProducts} id={id} />
      </div>
    </section>
  );
};

export default Product;
