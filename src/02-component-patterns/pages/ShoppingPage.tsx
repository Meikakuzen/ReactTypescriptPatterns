import React from 'react'
import { ProductButtons } from '../components/ProductButtons'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'
import coffe from '/coffee-mug.png'
import ProductCard from '../components'



const product ={
    id: '1',
    title: 'Coffe Mug Card',
    img: coffe

}

const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
          
        <ProductCard product={product}> 
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>  
          <ProductCard.Image/>
          <ProductCard.Title title={""}/>
          <ProductCard.Buttons />
        </ProductCard>
    

        </div>


    </div>
    
  )
}

export default ShoppingPage