import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import coffe from '/coffee-mug.png'
import useProduct from '../hooks/useProduct'
import { createContext, useContext } from 'react'
import { Props, ProductContextProps } from '../interfaces/products.interface'


export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext

export const ProductCard = ({children, product}: Props) => {

const {counter, increaseBy}= useProduct()

 return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>

    <div className={styles.productCard}>
      {children}
    </div>

    </Provider>
  )
}




