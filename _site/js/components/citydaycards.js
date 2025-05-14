const createDayCards = (formattedCardTime,cardWeatherImage,cardMinTemp,cardMaxTemp) => {
    return`
        <div class="column is-1">
        <section class="card has-text-centered has-background-black has-text-white has-text-weight-bold">
          <header class="card-header">
            <p class="card-header-title is-size-4 is-centered has-text-white">
              ${formattedCardTime}
            </p>
        </header>
        <div class="card-image is-centered">
          <figure class="image">
            <img src="${cardWeatherImage.src}" alt="Weather Image">
          </figure>
        </div>
        <article class="card-content">
          <div class="columns">
            <div class="column">
              <p>Min ${cardMinTemp}°C</p>
            </div>
            <div class="column">
              <p>Max ${cardMaxTemp}°C</p>
            </div>
          </div>
        </article>
      </section>
      </div>
      </div>
      `

}
  
