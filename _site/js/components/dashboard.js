const createDashboardSite = (dashTime)  => { //creating the top of the dashboard page
    return`
    <div class="column is-4 has-text-centered">
      <img src="/images/logo.png" alt="Logo">
    </div>

    <div class="column is-4 has-text-weight-bold has-text-black has-text-centered">
      <section>
        <article class="has-text-weight-bold">
          <p class="content is-size-1">
            <span>Dashboard</span>
          </p>
          <p class="is-size-3">
            <span>${dashTime}</span>
          </p>
        </article>
      </section>
    </div>

    <div class="column is-4 has-text-centered ">
    </div>`
}