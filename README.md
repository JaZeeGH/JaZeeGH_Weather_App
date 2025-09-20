# JaZeeGH Weather App

A responsive web application that displays current conditions and a 7‑day forecast for nine major cities worldwide. Developed for the Web Development course of the HDip in Computer Science at South East Technological University (SETU).

* * *

## Table of Contents

1.  [Overview]
2.  [Features]
3.  [Demo]
4.  [Installation & Local Development]
5.  [Technology Stack]
6.  [Project Structure]
7.  [Contributing]
8.  [License]
9.  [Contact]

* * *

## Overview

The application consists of two primary pages:

### Dashboard

*   Shows the nine predefined cities.
*   Each city card displays a weather icon, the current minimum and maximum temperature for the day, and a quick visual summary.

### City View

*   Provides a detailed view for the selected city.
*   Displays:
    *   Current (hourly) temperature and wind speed.
    *   Hourly weather icons.
    *   Daily maximum temperature and maximum wind speed.
    *   A 7‑day forecast with weather icons, minimum and maximum temperatures.

> Note: The weather data is static sample data refreshed periodically; it does not represent real‑time forecasts. Do not rely on it for clothing or travel decisions.

* * *

## Features

| Category | Description |
| --- | --- |
| Static Forecast Data | Pre‑populated weather information for nine global cities, refreshed daily/hourly in the dataset. |
| Responsive UI | Mobile‑friendly layout built with the Bulma CSS framework. |
| Interactive Navigation | Click a city on the dashboard to view details; use the “Look at other Cities” dropdown on the city page to switch between locations. |
| Date Handling | Utilises Day.js for easy formatting and manipulation of dates and times. |
| Templating | Powered by Eleventy (11ty) with Nunjucks templates for clean, reusable markup. |
| Iconography | Royalty‑free weather icons sourced from Flaticon. |

* * *

## Demo

*   Source Code: [https://github.com/JaZeeGH/JaZeeGH\_Weather\_App](https://github.com/JaZeeGH/JaZeeGH_Weather_App)

* * *

## Installation & Local Development

`# Clone the repository git clone https://github.com/JaZeeGH/JaZeeGH_Weather_App.git cd JaZeeGH_Weather_App # Install dependencies npm install   # (Eleventy and related packages) # Build and serve locally npm run build   # Generates the static site npm run serve   # Starts a local development server (usually http://localhost:4000)`

> Ensure you have Node.js (v14 or later) installed.

* * *

## Technology Stack

*   HTML5 – Semantic markup
*   JavaScript (ES6+) – Interactive behavior and data handling
*   Bulma CSS – Modern, responsive styling framework ([https://bulma.io/](https://bulma.io/))
*   Day.js – Lightweight date library ([https://day.js.org/](https://day.js.org/))
*   Eleventy (11ty) – Static site generator ([https://www.11ty.dev/](https://www.11ty.dev/))
*   Nunjucks – Templating language for reusable components
*   Netlify – Hosting platform for the live demo

* * *

## Project Structure

`JaZeeGH_Weather_App/ ├─ src/ │  ├─ _includes/        # Nunjucks partials (header, footer, etc.) │  ├─ assets/ │  │   ├─ css/          # Custom styles (Bulma overrides) │  │   └─ img/          # Weather icons (royalty‑free) │  ├─ data/             # Static weather JSON files for the nine cities │  ├─ pages/ │  │   ├─ index.njk     # Dashboard page │  │   └─ city.njk      # City‑detail template │  └─ _data/            # Global site data (e.g., city list) ├─ .eleventy.js         # Eleventy configuration ├─ package.json         # npm scripts and dependencies └─ README.md            # This document`

* * *

## Contributing

Contributions are encouraged! To contribute:

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/your-feature`).
3.  Implement your changes, ensuring the site builds without errors.
4.  Submit a pull request with a clear description of the modifications.

Please adhere to the existing coding style and include any necessary documentation updates.

* * *

## License

This project is released under the MIT License. See the `LICENSE` file for full terms.

* * *

## Contact

*   Author: JaZeeGH
*   GitHub: [https://github.com/JaZeeGH](https://github.com/JaZeeGH)

Feel free to open an issue or reach out directly with questions, suggestions, or feedback. Thank you for exploring the JaZeeGH Weather App!
