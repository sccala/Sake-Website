
export const ProductCard = props => {
  const { name, image, description, brand } = props
  return (
      
    <div className='card '>
      <img className='card-img-top-product' src={image} alt={name} />
      <div className='card-body card-body-product'>
        <h5 className='card-title'>{name}</h5>
        <h5 className='card-brand'>{brand}</h5>
        <p className='card-text'>{description}</p>
      </div>
    </div>
  )
}
