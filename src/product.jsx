import "./product.css";


function Product({title,price=1,features,features2,features3,feats}){
  //  const list= feats.map((feat) => <li>{feat}</li> )
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h3>Price:{price}</h3>
            {/* <h5>{features.a}</h5>
            <h5>{features3.a}</h5> */}
            <h5>{  feats.map((feat) => <li>{feat}</li> )}</h5>
        </div>

    )
}
export default Product;