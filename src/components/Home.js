import { Button } from './Button/Button'
import { Card } from './Cards/Card'
import { Hero } from './Section/Hero'

export const Home = () => {
  return (
    <>
      <Hero />
      <div className='container'>
        <div className='circle'></div>
        <div className='row row-content '>
          <h2 className='mb-3 text-md-start text-center'>Choose from 3 types</h2>
          <p className='mb-3 text-md-start text-center'>
            Carefully curated 10-oz bottles, there are 3 plans has 3, 6, 10 bottles for each Light,
            Medium, Heavy plan. plus you earn 6% cashback points to buy your favorites among 300+
            bottles.
          </p>
          <div className='col-4 align-item-center'>
            <Card
              title='Light'
              image='/assets/sake_hero1.jpg'
              description='3 bottles monthly. Will include plum, light, and extra samples.'
              buttontxt='$39/mo'
              buttonlink='/products'
            />
          </div>
          <div className='col-4 '>
            <Card
              title='Medium'
              image='/assets/sake_hero5.jpg'
              description='6 bottles monthly. Will include light-full body sake, and extra samples.'
              buttontxt='$69/mo'
            />
          </div>
          <div className='col-4 '>
            <Card
              title='Heavy'
              image='/assets/sake_hero6.jpg'
              description='10 bottles monthly. Will include all the kind, and extra samples.'
              buttontxt='$129/mo'
            />
          </div>
        </div>

        <div className='row row-content align-items-center'>
          <div className='text-md-start text-center col-sm-12 col-md-6 py-8'>
            <h2>Easy to pair with your favorite food</h2>
            <p>
              It absolutely goes with any kind of your favorite food. Best marriage is with sashimi,
              oden, sushi of course, but also tacos, spaghetti, fried chicken, and humbergers as
              well!
            </p>
          </div>
          <img className='col-sm-12 col-md-6' src='assets/sakedish.png' alt='dog stares at sake' />
        </div>

        <div className='row row-content align-items-center'>
          <div className='col-sm-12 col-md-6 order-sm-2 order-md-1'>
            <img src='assets/sakebox.png' width='90%' alt='sake box' />
          </div>
          <div className='text-md-start text-center col-sm-12 col-md-6 order-sm-1 order-md-2'>
            <h2>Deliver with nice package</h2>
            <p>
              Your first delivery comes with everything you need to start your sake-drinking
              journey. We guide for beginners and mini bottles from the three main sake categories
              (junmai, ginjo, and daiginjo), as well as the popular cloudy sake known as nigori.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container'>
        <div className='row row-content align-items-center'>
          <div className='mx-2 col-sm-12 col-md-6'>
            <h3>Get monthly promo code 😄</h3>
          </div>
          <div className='col-sm-12 col-md-6 form-group row mx-2'>
            <input
              type='email'
              className='form-control btn-light'
              id='email'
              name='email'
              placeholder='Email'
            />
            <Button type='submit'>Subscribe</Button>
          </div>
        </div>
      </div>
    </>
  )
}
