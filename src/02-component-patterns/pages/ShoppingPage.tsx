import { ProductButtons } from '../components/ProductButtons'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'
import coffe from '/coffee-mug.png'
import ProductCard from '../components'
import '../styles/custom-styles.css'


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
          
        <ProductCard product={product} className="bg-dark text-white"> 
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">  
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
       
        <ProductCard product={product}
        style={{backgroundColor: "orange"}}>  
          <ProductCard.Image style={{boxShadow: "10px 10px 10px rgba(0,0,0,0.2"}} />
          <ProductCard.Title style={{fontWeight: "bold"}}/>
          <ProductCard.Buttons  style={{display: 'flex', justifyContent:'end'}}/>
        </ProductCard>
    

        </div>


    </div>
    
  )
}

export default ShoppingPage