# Developer Toolbox API

A backend API that provides common developer utilities such as encoding, hashing, and metadata extraction.

This project is built as a learning exercise to explore backend architecture, middleware, caching, and infrastructure deployment.

## Features

* Base64 encode / decode
* Hash generation (md5, sha1, sha256)
* URL metadata extraction
* Request logging with Morgan
* Rate limiting middleware
* Error handling middleware
* Redis integration (for caching)

## API Endpoints

### Base64

POST `/api/v1/base64/encode`

POST `/api/v1/base64/decode`

### Hash

POST `/api/v1/hash`

### URL Metadata

POST `/api/v1/url/metadata`

## Tech Stack

* Node.js
* Express
* Redis
* Docker
* Axios
* Cheerio
* Morgan

## Project Structure

src/
controllers/
services/
routes/
middlewares/
utils/

## Running Locally

Install dependencies:

npm install

Run Redis:

docker run -d -p 6379:6379 redis

Start the API:

npm run dev

Server will run on:

http://localhost:3000
