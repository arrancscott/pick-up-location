# Pick-up Location search box

This repo contains a replica of the search box that can be found on www.rentalcars.com.

It uses Node.js with Express for the backend and Vue.js on the frontend.

The endpoints for the backend can be found in `app.js`.

The frontend app can be found in the following directory: `frontend`.

## Usage

Clone the repo, `cd` into the directory, then run:

```bash
$ npm install
```

After this has finished, `cd` into the `frontend` directory, then run:

```bash
$ npm install
```

Now, `cd` back into the root dir and run:

```bash
$ nf start
```

This will start the backend and frontend as separate services.

Now head to http://localhost:8080 and voilà!

## Tests

Jest is used as the test framework. To run the test suite, run the following in the root dir:

```bash
$ npm test
```

## Codestyle

standard JS is used for codestyle. To check, run the following in the root dir:

```bash
$ standard
```

If there is nothing returned, that's good.