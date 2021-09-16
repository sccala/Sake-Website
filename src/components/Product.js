import { Card } from './Cards/Card'
import { ProductLineup } from './Section/ProductLineup'

export const Products = () => {
  return (
    <>
      <div className='container'>
        <div className='row row-content'>
          <div className='col-12'>
            <h2>Product Lineup</h2>
            <p>These are one of our popular ones. We also have wide range of selection from micro breweries to traditional breweries. If you have any questions or request, please feel free to contact us.</p>
            <div className='row row-content'>
                
              <ProductLineup />
            </div>
            <h2>Choose from 3 types</h2>
          </div>
          <div className='col-md-4 col-sm-8'>
            <Card
              title='Light'
              image='/assets/sake_hero1.jpg'
              description='3 bottles monthly. Will include plum, light, and extra samples.'
              buttontxt='$39/mo'
              buttonlink='/products'
            />
          </div>
          <div className='col-md-4 col-sm-8'>
            <Card
              title='Medium'
              image='/assets/sake_hero5.jpg'
              description='6 bottles monthly. Will include light-full body sake, and extra samples.'
              buttontxt='$69/mo'
            />
          </div>
          <div className='col-md-4 col-sm-8'>
            <Card
              title='Heavy'
              image='/assets/sake_hero6.jpg'
              description='10 bottles monthly. Will include all the kind, and extra samples.'
              buttontxt='$129/mo'
            />
          </div>
        </div>
      </div>

      <div className='circle-blue'></div>
    </>
  )
}
