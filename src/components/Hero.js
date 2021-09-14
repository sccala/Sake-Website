import '../styles/Style.css'
export const Hero = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='hero-text'>
              Dive into sake world with Sakit. Because sake is complicated enough.
            </h1>
            <a href='/home' className='btn hero-button'>
              Learn More
            </a>
            <img
              className='img-fluid w-100 img-responsive'
              src='public/assets/images/sake_hero7-2.jpg'
              alt='sake'
            />
          </div>
        </div>
      </div>
    </>
  )
}
