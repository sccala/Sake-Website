import { Hero } from './Hero'
export const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='circle'></div>
        <div className='row row-content '>
          <div className='col-12 mb-3'>
            <h2>Choose from 3 types</h2>
            <p>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad '
            </p>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='card card-light'>
              <div className='card-body'>
                <h5 className='card-title'>Light</h5>
                <p className='card-text'>Some quick example text to build on the card</p>
                <a href='/home' className='btn card-button'>
                  $39 Box
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='card card-medium'>
              <div className='card-body'>
                <h5 className='card-title'>Medium</h5>
                <p className='card-text'>Some quick example text to build on</p>
                <a href='/home' className='btn card-button '>
                  $59 Box
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-12'>
            <div className='card card-heavy'>
              <div className='card-body'>
                <h5 className='card-title'>Heavy</h5>
                <p className='card-text'>Some quick example text to build on the card</p>
                <a href='/home' className='btn card-button'>
                  $79 Box
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='row row-content align-items-center'>
          <div className='col-6 py-8'>
            <h2>Easy to pair with your favorite food</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui.
            </p>
          </div>
          <img className='col-6' src='assets/sakedish.png' alt='dog stares at sake' />
        </div>

        <div className='row row-content align-items-center'>
          <div className='col-6'>
            <img src='assets/sakebox.png' width='90%' alt='sake box' />
          </div>
          <div className='col-6'>
            <h2>Deliver with nice package</h2>
            <p>
              We box them in the nice package. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, qui{' '}
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container'>
        <div className='row row-content align-items-center'>
          <div className='col-6'>
            <h3>Get promo code monthly</h3>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
          <div className='col-6 form-group row'>
            <label className='col-form-label'></label>
            <input
              type='email'
              className='form-control btn-light'
              id='email'
              name='email'
              placeholder='Email'
            />
            <button className='col-4 mt-2' type='button'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
