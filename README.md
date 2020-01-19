# ItekakoApp

## Run project

Download project, run `npm install` to install all dependencies then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Live built version of this app is on this link: `http://test.wallmusicrecords.com`.

## Tests

I didn't write tests because it is not in specs.

## Info

This app could be done in various ways. Best practies for this solution is to have only one request for getting data and then store that data in global store and distribute it to components, because all 3 pages showing same data in different design. But I make request for every page, because I added resolver for all routes and in real project we don't know is data changed in database.
