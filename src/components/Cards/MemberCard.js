export const MemberCard = props => {
  return (
    <>
      <div className='row '>
        <div className='col-lg-3 col-sm-6 mt-5'>
          <div className='card '>
            <img className='card-img-top' src='/assets/ian.jpg' alt='' />
            <div className='card-body card-body-product'>
              <h5 className='card-title'>Jack Black</h5>
              <h5 className='card-brand'>CEO</h5>
              <p className='card-text'>Obsessed with Sake, and wine. </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6 mt-5'>
          <div className='card '>
            <img className='card-img-top' src='/assets/kate.jpg' alt='' />
            <div className='card-body card-body-product'>
              <h5 className='card-title'>Emma Rose</h5>
              <h5 className='card-brand'>Marketing Director</h5>
              <p className='card-text'>
                Cat lover🐱 Planning a lot of campaign! Let's subscribe our newsletter💌
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6 mt-5'>
          <div className='card '>
            <img className='card-img-top' src='/assets/mic.jpg' alt='' />
            <div className='card-body card-body-product'>
              <h5 className='card-title'>Erica Hudson</h5>
              <h5 className='card-brand'>Import / Account exective</h5>
              <p className='card-text'>Frequent travelor. Curating best sake for you.</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-sm-6 mt-5'>
          <div className='card '>
            <img className='card-img-top' src='/assets/joseph.jpg' alt='' />
            <div className='card-body card-body-product'>
              <h5 className='card-title'>Ken Kosugi</h5>
              <h5 className='card-brand'>Contents Creator / Translator</h5>
              <p className='card-text'>Translation, contents creation.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
