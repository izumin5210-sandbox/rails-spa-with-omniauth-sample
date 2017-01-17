# Rails SPA with OmniAuth
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)][license]

## Features
Based on [izumin5210/rails-modern-frontend-with-docker-sample](https://github.com/izumin5210-sandbox/rails-modern-frontend-with-docker-sample)

### Server

- Multiprovider authentication: OmniAuth
- Access token: JWT (generating with jwt gem)


### Client

- Redux + redux-actions + redux-saga
- Access token store: localStorage


## Usage
Command examples:

```
# Run rails server(puma) and watch client scripts/styles
$ docker-compose up [--build]

# Run `bundle install`
$ docker-compose run --rm puma bundle install

# Add node packages
$ docker-compose run --rm yarn yarn add <package>

# Migrate db
$ docker-compose run --rm puma rails db:migrate

# Run server-side tests
$ docker-compose run --rm puma rspec

# Run client-side tests
$ docker-compose run --rm yarn yarn test
```


## License

[MIT License][license].


## Author

Masayuki Izumi ([izumin5210](https://github.com/izumin5210))

[license]: https://izumin.mit-license.org/2017
