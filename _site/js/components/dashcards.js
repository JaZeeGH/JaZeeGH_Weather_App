const createDashCards = (currentCity,dashWeatherImage,dashMinTemp,dashMaxTemp) => {
  return`
<div class="column is-2">
  <section class="card has-text-centered has-background-black has-text-white">
    <header class="card-header">
      <a class="card-header-title is-size-2 is-centered has-text-white" href="/cityview/?city=${currentCity.city}">
        ${currentCity.name}
      </a>
    </header>
    <div class="card-image">
      <figure class="image">
        <img src="${dashWeatherImage.src}" alt="Weather Image">
      </figure>
    </div>
    <article class="card-content">
      <div class="columns">
        <div class="column">
          <p class="content is-size-4">
            <span>Min: ${dashMinTemp}°C</span>
          </p>
        </div>
        <div class="column">
          <p class="content is-size-4">
            <span>Max: ${dashMaxTemp}°C</span>
          </p>
        </div>
      </div>
    </article>
    <footer class="card-footer"></footer>
  </section>
</div>`
}

    
  