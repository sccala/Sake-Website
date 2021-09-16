import { Button } from "./Button"

export const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 '>
              <h1 className='hero-text justify-content-center'>Dive into sake world</h1>
              <p className='justify-content-center '>
                Curated sake will be delivered to your door. We will strictly select genuine sake
                including Dassai, Gekkeikan, Sho Chiku Bai, Ume Plum, and more!
              </p>
              <Button className='btn-hero' onClick='/products'>See Products</Button>
            </div>
            <img className='col-6 ' src='/assets/sake_herofinal.jpg' alt='sake' />
          </div>
        </div>
      </div>
    </>
  )
}
