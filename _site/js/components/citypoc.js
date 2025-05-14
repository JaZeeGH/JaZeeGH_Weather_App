const  createCityPoc = (currentCity,dashTime,hourlyTemp,hourlyMaxWind,maxTemp,weatherImage,maxWind) => {

return`
<div class="column is-4 has-text-centered">
      <img src="/images/logo.png" alt="Logo">
    </div>

    <div class="column is-4 has-text-weight-bold has-text-black has-text-centered">
      <article class="has-text-weight-bold">
        <p class="content is-size-2">
          <span>${currentCity}</span>
        </p>
        <p class="is-size-3">
          <span>${dashTime}</span>
        </p>
      </article>
      </section>
    </div>

    <div class="column is-4 has-text-centered ">
      <section class="card is-centered has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="header">
          <p class="header-title is-size-2 is-centered has-text-white">
            <span>Right Now</span>
          </p>
        </header>
        <div class="columns">
          <div class="column">
            <p class="is-size-4">Temp</p>
            <p class="is-size-4">${hourlyTemp} °C
            </p>
            </p>
          </div>
          <div class="column">
            <p class="is-size-4">Wind</p>
            <p class="is-size-4">
            ${hourlyMaxWind} km/h
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="column is-5 has-text-centered ">
      <div class="card equal-height">
        <section class="card is-centered has-text-centered has-text-white has-text-weight-bold has-background-black">
          <header class="header">
            <p class="header-title is-size-2 is-centered has-text-white">
              Max Temp
            </p>
          </header>
          <article>
            <p class="is-size-3">${maxTemp} ºC</p>
          </article>
        </section>
      </div>
    </div>

    <div class="column is-2 is-centered">
      <figure class="image">
        <img src="${weatherImage.src}" alt="weather">
        <!-- <a href="https://www.flaticon.com/free-icons/sunshine" title="sunshine icons">Sunshine icons created by Assia Benkerroum  - Flaticon</a>-->
      </figure>
    </div>


    <div class="column is-5 has-text-centered ">
      <section class="card is-centered has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="header">
          <p class="header-title is-size-2 is-centered has-text-white">
            Max Wind
          </p>
        </header>
        <article>
          <p class="is-size-3">${maxWind} km/h</p>
        </article>
      </section>
    </div>
    <div class="column is-4"></div>`

}