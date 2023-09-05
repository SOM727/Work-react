import React from 'react';


function App() {
  return (
    <div className="app">
      <header className='wlo'>
        <h1>The Ultimate Weight Loss Plan</h1>
      </header>
      <article className="article">
        
        <section id="plan-details">
          <h2>Plan Details</h2>
          <p>
            Our weight loss plan is designed to be effective and sustainable. It
            includes the following key components:
          </p>
          <ul>
            <li>
              Plan Name: <strong>Weight Gain plan</strong>
            </li>
            <li>
              Plan Description: <strong>To stay happy and healthy,Gain some more muscle !! </strong>
            </li>
            <li>
              Duration (in weeks): <strong>Everyday or atleast 5 days a week and continue for 3 months</strong>
            </li>
            <li>
              Target Weight (in pounds):{' '}
              <strong>Please Use the BMI calculator for extra details</strong>
            </li>
          </ul>
          <img
          width={380}
            src="https://www.eatingwell.com/thmb/B-lVo_ICjGAKm4GiYoX2UinulTQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7-day-healthy-weight-gain-letter-sized-1-2000-0970128653444e6bbd8d0d55e2257687.jpg"
            alt="Plan Details"
            className="article-image2"
          />
        </section>
        <footer className='wl'>
          <p>
            Start your weight loss journey today and achieve the healthier,
            happier you that you've always dreamed of!
          </p>
        </footer>
      </article>
    </div>
      );
    }
    
    export default App;