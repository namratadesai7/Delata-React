import Product from "./product.jsx";



function ProductTab() {
    let options=["hit-tech","durable","fast"]; //array
    let options2= {a: "hi-tech",b: "durable",c: "fast"}; //object
    let options3=[<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>]
    return(
        <>
        < Product title="phone" price={30000} features={options} features2={options2} 
        features3={{a:"hi-tech"}} feats={options3} />
        {/* < Product title="laptop" price="40,000" />
        < Product title="pen"  /> */}
        </>
    );
}

export default ProductTab;