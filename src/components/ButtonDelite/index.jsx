const ButtonDelite = ({ DeliteProducts, id }) => {
  return (
    <button type="button" onClick={ ()=>{DeliteProducts(id);}}>
      <img src="./img/icons/cross.svg" alt="Delete" />
    </button>
  );
};
 
export default ButtonDelite;