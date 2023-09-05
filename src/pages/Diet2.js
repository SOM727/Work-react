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
              Plan Name: <strong>Weight loss plan</strong>
            </li>
            <li>
              Plan Description: <strong>To stay happy and healthy,lose your extra fats! </strong>
            </li>
            <li>
              Duration (in weeks): <strong>5 days per week and continue for 3 months</strong>
            </li>
            <li>
              Target Weight (in pounds):{' '}
              <strong>Please Use the BMI calculator for extra details</strong>
            </li>
          </ul>
          <img
          width={380}
            src="https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2021/05/4-May.png"
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