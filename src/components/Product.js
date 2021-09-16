export const Products = () => {
  return (
    <>
      <div className='container-fluid productcontainer'>
        <div className='container'>
          <div className='row row-content'>
            <div className='col-12'>
              <h2>Choose from 3 types</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad "
              </p>
            </div>

            <div className='col-md-4 col-sm-12 '>
              <div className='card card-light'>
                <img alt='sake' src='img/sake_hero5.jpg' className='card-img-top' />
                <div className='card-body'>
                  <h5 className='card-title'>Light</h5>
                  <ul className='card-text'>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                  </ul>
                  <a href='/home' className='col-sm-12 btn card-button'>
                    $39 Box
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 '>
              <div className='card card-medium'>
                <img alt='sake' src='img/sake_hero6.jpg' className='card-img-top' />
                <div className='card-body'>
                  <h5 className='card-title'>Medium</h5>
                  <ul className='card-text'>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                  </ul>
                  <a href='/home' className='col-sm-12 btn card-button'>
                    $59 Box
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 '>
              <div className='card card-heavy'>
                <img alt='sake' src='img/sake_hero1.jpg' className='card-img-top' />
                <div className='card-body'>
                  <h5 className='card-title'>Heavy</h5>
                  <ul className='card-text'>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                    <li>Lorem ipsum dolor sit amet, olor sit amet</li>
                  </ul>
                  <a href='/home' className='col-sm-12 btn card-button'>
                    $79 Box
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='circle-blue'></div>
    </>
  )
}
