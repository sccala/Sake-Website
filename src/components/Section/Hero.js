import { Button } from "../Button/Button"

export const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-6 '>
              <h1 className='hero-text'>Dive into sake world 🍶</h1>
              <p>
                Curated sake will be delivered to your door. We will strictly select genuine sake
                including Dassai, Gekkeikan, Sho Chiku Bai, Ume Plum, and more!
              </p>
              <Button className='btn-hero' onClick='/products'>
                See Products
              </Button>
            </div>
            <img className='col-6 ' src='/assets/sakeflower-hero.png' alt='sake' />
          </div>
        </div>
      </div>
    </>
  )
}
