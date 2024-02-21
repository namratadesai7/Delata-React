import Product from "./product.jsx";



function ProductTab() {
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",

    };

    let options=["hit-tech","durable","fast"]; //array
    let options2= {a: "hi-tech",b: "durable",c: "fast"}; //object
    let options3=["hi-tech","durable","fast"]
   
    return(
        <div style={styles}>
          
            <Product title="Logitect MX Master" idx={0} />
            <Product title="Apple Pencil (2nd Gen)" idx={1} />
            <Product  title="Zebronics " idx={2} />
            <Product title="Petronics Toad 23" idx={3} />
        </div>
    )
}

export default ProductTab;


 // return(
    //     <>
    //     < Product title="phone" price={30000} features={options} features2={options2} 
    //     features3={{a:"hi-tech"}} feats={options3} />
    //     {/* < Product title="laptop" price="40,000" />
    //     < Product title="pen"  /> */}
    //     <Product title="pen" price={1} />
    //     <Product title="laptop" price={4000} />
    //     </>
        
    // );