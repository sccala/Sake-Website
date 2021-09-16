import { Button } from './Button/Button'

export const Contact = () => {
  return (
    <>
      <div className='container mx-8'>
        <div className='row align-items-center'>
          <img className='col-6' width='70%' src='assets/sakeflower.png' alt='sake and flowers' />
          <div className='col-6  contact-form'>
            <h2>Got questions? Contact us!</h2>
            <form>
              <div className='form-group row'>
                <div className='col'>
                  <label htmlFor='Name' className='col-md-2  col-form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='Name'
                    name='Name'
                    placeholder='Emma Rose'
                  />
                </div>
              </div>

              <div className='form-group row'>
                <div className='col'>
                  <label htmlFor='phone' className='col-md-2 col-form-label'>
                    {' '}
                    Phone
                  </label>
                  <input
                    type='tel'
                    className='form-control'
                    id='phone'
                    name='phone'
                    placeholder='(   )-    -    '
                  />
                </div>
              </div>

              <div className='form-group row'>
                <div className='col'>
                  <label htmlFor='email' className='col-md-2 col-form-label'>
                    Email{' '}
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    id='email'
                    placeholder='random@example.com'
                  />
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-md-10'>
                  <label htmlFor='feedback' className='col-md-2 col-form-label'>
                    Message
                  </label>
                  <textarea id='feedback' className='form-control' name='feedback'></textarea>
                </div>
                <div className='col-md-10'></div>
              </div>
              <div className='form-group row'>
                <div className='col-12'>
                  Are you over 21 years old?
                  <div className='col-12'>
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
              </div>
              <div className='form-group row'>
                <div className='col'>
                  <Button type='submit'>Send</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
