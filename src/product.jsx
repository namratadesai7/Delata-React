import "./product.css";
import Price from "./Price";


function Product({title,idx,price=1,features,features2,features3,feats}){
  //  const list= feats.map((feat) => <li>{feat}</li> )
 // let isDiscount = price>3000;
//  let styles = {backgroundColor: isDiscount ? "yellow" : ""};
    let oldPrices=["12,495","11,990","599"];
    let newPrices=["8999","899","9,499","278"];
    let description=[["8,000 DPI","5 Programmable buttons"],
    ["intutive surface","designed for iPad Pro"],["designed for iPad Pro","intutive surface"],
    ["wireless","optical orientation"]];
    return(
        <div className="Product"  >
                <h4>{title}</h4>            
                <p>{description[idx][0]}</p>
                <p>{description[idx][1]}</p>
                < Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
            {/* <h3>{title}</h3>
            <h3>Price:{price}</h3>
            <h5>{features2.c}</h5>  
            <h5>{features3.a}</h5>
            <h5>{  feats.map((feat) => <li>{feat}</li> )}</h5>
            { isDiscount ? <p>"Discount of 5%"</p> : null} */}
        </div>

    )
}
export default Product;