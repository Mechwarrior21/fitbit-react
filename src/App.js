import React, { Component } from 'react';
import './App.css';
import './script.js';

class App extends Component {
      render() {
          return (
              <div id="container" className="main-container charge2">

              <section id="app" className="app-slider">
                  <h1>See the whole picture with the Fitbit app.</h1>
                  <div className="device-slider">

                          <div className="slide slide-1 device-sync" data-slide-title="Sync wirelessly" data-slide-text="Charge 2 syncs wirelessly &amp; automatically to 200+ iPhone, Android and Windows devices."></div>

                          <div className="slide slide-2 device-guided-goals" data-slide-title="Set goals" data-slide-text="Set weekly exercise goals to keep yourself accountable, and see summaries of your key workout stats."></div>

                          <div className="slide slide-3 device-workouts" data-slide-title="Record workouts" data-slide-text="See your workout stats, their impact on your day, and how your performance is improving."></div>

                          <div className="slide slide-4 device-heartrate" data-slide-title="Track heart rate" data-slide-text="Track your resting heart rate trends to understand how your health and fitness changes over time."></div>

                          <div className="slide slide-5 device-weight" data-slide-title="Manage weight" data-slide-text="Reach your weight goals by planning meals, logging food, and tracking your weight, BMI, lean mass &amp; body fat."></div>
                  </div>

                  <h2>Sync wirelessly</h2>

                  <p>Charge 2 syncs wirelessly &amp; automatically to 200+ iPhone, Android and Windows devices.</p>

                  <a className="cta" href="/hk/app">EXPLORE THE FITBIT APP</a>
            </section>
            </div>
        );
    }
}

export default App;
