export const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm sticky-top'>
        <div className='container'>
          <div className='row'>
            <a className='col navbar-brand flex' href='/home'>
              <h1>Sakit</h1>
              <img
                className='ml-1'
                width='20'
                src='/images/icon.png'
                alt='icon'
              />
            </a>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#nucampNavbar'
          >
            <span className='navbar-toggler-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-list'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </span>
          </button>
          <div className='collapse navbar-collapse' id='nucampNavbar'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link text-center' href='about.html'>
                  {' '}
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-center' href='product.html'>
                  {' '}
                  Product
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-center' href='contact.html'>
                  {' '}
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
