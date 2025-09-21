import React from "react";

import Mobiles from "./Mobiles";
import Men from "./Men"
import Fridge from "./Fridge";
import Books from "./Books";
import Ac from "./Ac";
import Computers from "./Computers";
import Furniture from "./Furniture";
import Kitchen from "./Kitchen";
import Speaker from "./Speaker";
import Watch from "./Watch";
import Women from "./Woman";


const Products = () => {
     return (

        <div>
            <Ac />
            <Books />
            <Computers />
            <Fridge />
            <Furniture />
            <Kitchen />
            <Men />
            <Mobiles />
            <Speaker />
            <Watch />  
            <Women />  
        </div>
     )
}

export default Products;
