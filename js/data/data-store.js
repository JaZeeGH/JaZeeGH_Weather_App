const dataStore = {
  data: [
        {
          city: "amsterdam",
          name: "Amsterdam",
        },
        {
          city: "berlin",
          name: "Berlin",
        }
        {
          city: "copenhagen",
          name: "Copenhagen",
        },
        {
          city: "cork",
          name: "Cork",
          imageUrl: "https://unsplash.com/photos/a-large-city-with-a-clock-tower-vV-wXd-V2CQ"
        },
        {
          city: "paris",
          name: "Paris",
          imageUrl: "https://unsplash.com/photos/vehicles-travelling-on-road-surrounded-by-buildings-during-daytime-DXuxHw3S5ak"
        },
        {
          city: "waterford",
          name: "Waterford",
          imageUrl: "https://www.pexels.com/photo/aerial-view-of-tramore-s-scenic-playground-31575501/"
        }
      ],

    list(){
        return this.data
    },
}