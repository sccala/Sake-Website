import '../../App.css'

export const Button = props => {
  const { children, buttonlink } = props
  return (
    <>
      <a className='btn-hero' href={buttonlink}>
        {children}
      </a>
    </>
  )
}
