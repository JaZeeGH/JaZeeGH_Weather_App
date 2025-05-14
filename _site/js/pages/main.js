document.addEventListener('DOMContentLoaded', () => {
      const main = document.querySelector('main');
    main.innerHTML = main.innerHTML + createCityViewMain(cityViewMain);

    const createCityViewMain = (cityViewMain) => {
    return `
    <div class="column is-6 has-text-centered">
    <img src="/images/logo.png" alt="Logo">
  </div>

  <div class="column is-2 has-text-weight-bold has-text-black has-text-centered">
    <article class="has-text-weight-bold">
      <p class="content is-size-2">
        <span>'city'</span>
      </p>
    </article>
    <footer>
      <p class="is-size-3"><span id="time"></span></p>
    </footer>
    </section>
  </div>

  <div class="column is-4 has-text-centered ">
    <section class="card is-centered has-text-centered has-text-white has-text-weight-bold has-background-black">
      <header class="header">
        <p class="header-title is-size-3 is-centered has-text-white">
          Right Now
        </p>
        <br>
        <br>
      </header>
      <div class="columns">
        <div class="column">
          <p class="is-size-2"><span id="hourlyTemp"></span></p>
          </p>
        </div>
        <div class="column">
          <p class="is-size-2">10 km/h</p>
        </div>
      </div>
    </section>
  </div>

  <div class="column is-5 has-text-centered ">
    <div class="card equal-height">
      <section class="card is-centered has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="header">
          <p class="header-title is-size-3 is-centered has-text-white">
            Max Temp
          </p>
        </header>
        <article>
          <p class="is-size-2"><span id="maxTemp"></span><span> ºC</span></p>
        </article>
      </section>
    </div>
  </div>

  <div class="column is-1 is-centered">
    <figure class="image">
      <img id="weather-image" alt="sunshine">
      <!-- <a href="https://www.flaticon.com/free-icons/sunshine" title="sunshine icons">Sunshine icons created by Assia Benkerroum  - Flaticon</a>-->
    </figure>
  </div>


  <div class="column is-5 has-text-centered ">
    <section class="card is-centered has-text-centered has-text-white has-text-weight-bold has-background-black">
      <header class="header">
        <p class="header-title is-size-3 is-centered has-text-white">
          Max Wind
        </p>
      </header>
      <article>
        <p class="is-size-2"><span id="maxWind"></span><span> km/h</span></p>
      </article>
    </section>
  </div>
  <div class="column is-4"></div>`
    }


});

