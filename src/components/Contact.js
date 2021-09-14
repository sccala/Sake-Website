export const Contact = () => {
  return (
    <>
      <div className='container'>
        <div className='row align-items-center'>
          <img className='col-5' src='img/sake_vertical.jpg' alt='sake and flowers' />

          <div className='col-7 contact-form'>
            <h2>Got questions? Contact us!</h2>
            <form>
              <div className='form-group row'>
                <label htmlFor='Name' className='col-md-2  col-form-label'>
                  Name
                </label>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                  />
                </div>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                  />
                </div>
              </div>

              <div className='form-group row'>
                <label htmlFor='phone' className='col-md-2 col-form-label'>
                  {' '}
                  Phone
                </label>
                <div className='col'>
                  <input
                    type='tel'
                    className='form-control'
                    id='phone'
                    name='phone'
                    placeholder='Phone Number'
                  />
                </div>
              </div>

              <div className='form-group row'>
                <label htmlFor='email' className='col-md-2 col-form-label'>
                  Email{' '}
                </label>
                <div className='col-md-10'>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    id='email'
                    placeholder='Email'
                  />
                </div>
              </div>

              <div className='form-group row'>
                <label htmlFor='feedback' className='col-md-2 col-form-label'>
                  Message
                </label>
                <div className='col-md-10'>
                  <textarea id='feedback' className='form-control' name='feedback'></textarea>
                </div>
              </div>
              <div className='form-group row'>
                <div className='col'>
                  Are you over 21 years old?
                  <div className='form-check form-check-inline'>
                    <input
                      type='radio'
                      className='form-check-input'
                      id='contactYes'
                      name='contactRadios'
                      value='yes'
                    />
                    <label htmlFor='contactYes' className='form-check-label'>
                      Yes
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      type='radio'
                      className='form-check-input'
                      id='contactNo'
                      name='contactRadios'
                      value='no'
                    />
                    <label htmlFor='contactNo' className='htmlForm-check-label'>
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className='form-group row'>
                <div className='col'>
                  <button type='submit' className='btn btn-dark float-right'>
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
