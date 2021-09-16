export const Footer = () => {
  return (
    <>
      <footer className='site-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-12 text-md-start text-center'>
              <a className='col navbar-brand flex' href='/home'>
                Sakit
                <img className='m-1' width='18' src='./assets/icon.png' alt='icon' />
              </a>
            </div>
            <div className='col-md-3 col-sm-12 text-md-start text-center'>
              <h5>Sitemap</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='/home'>Home</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/products'>Products</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
              </ul>
            </div>

            <div className='col-md-3 col-sm-12 text-md-start text-center'>
              <h5>Contact</h5>
              <ul className='list-unstyled'>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    fill='currentColor'
                    className='bi bi-geo-alt-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                  </svg>{' '}
                  12345 Sake Rd, Melrose, CA 22031
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    fill='currentColor'
                    className='bi bi-envelope-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z' />
                  </svg>{' '}
                  info@sakit.com
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    fill='currentColor'
                    className='bi bi-telephone-fill'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                    />
                  </svg>{' '}
                  023-3333-0000
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className='col text-md-end text-center'>
            <p>Sakit.com © 2002 - 2021 All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}
