const  createCityPoc = (currentCity,dashTime,hourlyTemp,hourlyMaxWind,maxTemp,weatherImage,maxWind) => {

return`
<div class="column is-4 has-text-centered">
      <img src="/images/logo.png" alt="Logo">
    </div>

    <div class="column is-4 has-text-weight-bold has-text-black has-text-centered">
    <section class="card is-centered has-text-centered>
      <header class="header">
        <p class="header-title is-size-2 is-centered has-text-black">
          <span>${currentCity}</span>
        </p>
        <p class="is-size-3">
          <span>${dashTime}</span>
        </p>
      </header>
      </section>
      <article>
    <div class="dropdown is-hoverable">
    <!-- This is coming from Bulma - https://bulma.io/documentation/components/dropdown/ Hoverable Dropdown Menu -->
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Look at other Cities</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item">
          <a href="/cityview/?city=amsterdam" class="dropdown-item"> Amsterdam </a>
          <a href="/cityview/?city=berlin" class="dropdown-item"> Berlin </a>
          <a href="/cityview/?city=copenhagen" class="dropdown-item"> Copenhagen </a>
          <a href="/cityview/?city=cork" class="dropdown-item"> Cork </a>
          <a href="/cityview/?city=new_york" class="dropdown-item"> New York </a>
          <a href="/cityview/?city=paris" class="dropdown-item"> Paris </a>
          <a href="/cityview/?city=san_francisco" class="dropdown-item"> San Francisco </a>
          <a href="/cityview/?city=tromso" class="dropdown-item"> Tromso </a>
          <a href="/cityview/?city=waterford" class="dropdown-item"> Waterford </a>
        </div>
      </div>
    </div>
  </div>
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