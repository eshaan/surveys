# Welcome to Surveys application 👋

> This application uses an API to fetch a list of surveys and their respective details. Its divided into 2 screens:
  - shows a list of surveys and allows users to choose one to view its results;
  - shows the selected survey details from screen 1.

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```
When you start the application it will be available on:
```text
http://localhost:1234/
```
>By default you will be presented with the homepage showing the list of surveys. 
>You can click on any of the listed surveys by clicking on the "View details" section of each survey. (The View details section should get highlighted on mouse hover.)
>On the Survey Details screen, on the top is the Survey Name and the Survey Response Rate in percentage
It also lists all questions based on the theme, and also shows the average rating for each question. The average rating is shown with some color codes wherein the responses which align with strongly disagree tends to move more towards Red whereas strongly agree would make it more towards Green.
> From the Survey Details screen, you can either use browser back button, or click on the header logo or text to go back to the home page.

NOTE: Currently the data is just coming from a set of json files under /src/data folder.

## Inclusions

- Surveys List with a capability to select to view details
- Survey Details showing overall participation rate as % and also the average rating for each question from (1 to 5)

## Tradeoffs

- Didn't add progressive loader screens:
  I haven't integrated loaders to screens. I would have used progressive loaders using a dummy data set but re-utilizing the container styles to show a loading state till the data is fetched. (Athough I do have in place the flags to detect when the data is in fetching vs fetched state)
- Didn't used any data visualization library/bootstrap components for showing average rating for each question. Instead I've tried using my own implementation with use of linear-gradient.
- Could refactor the styling part to have common styles across different components for reusability.
- Could use pagination for bigger surveys.
- Haven't used any logging library for logging errors.

## Design decesions

- Used flexbox CSS across the application for consistent cross-browser behaviour for UI and for easier responsive design.
- List of Surveys shows a clear average rating with each question, grouped under a single theme group. I've tried to divide the screen into groups under a single header and shown the visual representation with average rating for each question. 
- Fully responsive designs for both list of surveys and survey details screens, with focus on layout for better readability.
- Used a theme file for controlling styling details like fonts, spacing, screen sizes, etc.
- Used redux as the state management tool for easier access to data across components.
- Used separated connectors for components connected to redux for better reusability and making it easier to test.
- Added an ErrorBoundary to the application, for catching any unexpected errors and showing a useful message instead of a blank screen to the user.
- Added a Not Found page as well for unidentified routes.
- Used redux-thunk as the middleware for handling async requests.
- Kept components quite dumb, by doing all the data heavy-lifting in the actions layer instead and components just receive and display data. This makes components more flexible and easier to test, and hence saving on additional processing time in renders.
- Used PropTypes for component props validations.

## Run tests

```sh
npm run test
```
NOTE: For this coding test, I haven't included any tests at this moment. But I can certainly add unit tests to the same provided some additional time.

## Built With

  - Application Bundler: ParcelJS (https://parceljs.org/)
  - Front End Framework: ReactJS
  - Roboto font used across the application
  - Additional Frameworks Used:
    - State management: Redux
    - Middleware for aysnc API requests: redux-thunk
    - For styling components: styled-components
    - For making API requests: axios
    - For page navigations: react-router 

## Author

👤 **Eshaan Mehta**
