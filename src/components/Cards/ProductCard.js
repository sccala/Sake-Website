
export const ProductCard = props => {
  const { name, image, description, brand } = props
  return (
    <div className='card '>
      <img className='card-img-top' src={image} alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <h5 className='card-title'>{brand}</h5>
        <p className='card-text'>{description}</p>
      </div>
    </div>
  )
}
