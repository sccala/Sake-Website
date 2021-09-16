import { ProductCard } from '../Cards/ProductCard'
import { PRODUCTS } from '../../shared/products'
import { Component } from 'react'

export class ProductLineup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: PRODUCTS[0].image,
      name: PRODUCTS[0].name,
      brand: PRODUCTS[0].brand,
      description: PRODUCTS[0].description,
    }
  }
  render() {
    return (
      <>
        {PRODUCTS.map(products => (
          <div className='col-lg-3 col-md-4 col-sm-6'>
            <ProductCard
              image={products.image}
              name={products.name}
              brand={products.brand}
              description={products.description}
            />
          </div>
        ))}
      </>
    )
  }
}
