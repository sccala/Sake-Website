export const Footer = () => {
  return (
    <>
      <footer className='site-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <a className='col navbar-brand flex' href='/home'>
                Sakit
                <img className='m-1' width='18' src='./assets/icon.png' alt='icon' />
              </a>
            </div>
            <div className='col'>
              <h5>Sitemap</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='/home'>Home</a>
                </li>
                <li>
                  <a href='/products'>About</a>
                </li>
                <li>
                  <a href='/about'>Sites</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
              </ul>
            </div>
            <div className='col'>
              <h5>Links</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='home.html'>Home</a>
                </li>
                <li>
                  <a href='contactus.html'>About</a>
                </li>
                <li>
                  <a href='contactus.html'>Sites</a>
                </li>
                <li>
                  <a href='contactus.html'>Contact</a>
                </li>
              </ul>
            </div>
            <div className='col'>
              <h5>Links</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='home.html'>Home</a>
                </li>
                <li>
                  <a href='contactus.html'>About</a>
                </li>
                <li>
                  <a href='contactus.html'>Sites</a>
                </li>
                <li>
                  <a href='contactus.html'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className='justify-content-end'>Sakit.com © 2002 - 2021 All rights reserved</p>
        </div>
      </footer>
    </>
  )
}
