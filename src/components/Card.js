import { Button } from "./Button"

export const Card = props => {
  const { buttonlink, buttontxt, title, image, description } = props
  return (
    <div className='card '>
      <img className='card-img-top' src={image} alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <Button href={buttonlink}>{buttontxt}</Button>
      </div>
    </div>
  )
}
