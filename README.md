# react-news-app [![Build Status](https://travis-ci.org/sabrinaluo/react-news-app.svg?branch=master)](https://travis-ci.org/sabrinaluo/react-news-app)

Live Demo: http://sabrinaluo.com/react-news/app

Please note it may take a while to awake the API hosted on heroku due to its [sleeping policy](https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping).

Integrated with:
:white_check_mark: Travis
:white_check_mark: Heroku
:white_check_mark: Github gh-page

## Quick Start
### API Setup
#### Remote API
http://hiitea-api.herokuapp.com/hk01/articles?page=1

#### local server
```
git clone git@github.com:sabrinaluo/api.git
npm install
npm start
```
Runs on port 3000 by default

### APP Setup
```
git clone git@github.com:sabrinaluo/react-news-app.git
yarn install
yarn start
```
You may create a `.env.local` to override `API_ROOT`