import { Button } from "../Button/Button"

export const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-sm-12 text-md-start text-center col-md-6'>
              <h1>Dive into sake world 🍶</h1>
              <p>
                Curated sake will be delivered to your door. We will strictly select genuine sake
                including Dassai, Gekkeikan, Sho Chiku Bai, Ume Plum, and more!
              </p>
              <Button className='btn-hero' onClick='/products'>
                See Products
              </Button>
            </div>
            <img
              className='d-none d-md-block col-md-6'
              src='/assets/sakeflower-hero.png'
              alt='sake'
            />
          </div>
        </div>
      </div>
    </>
  )
}
