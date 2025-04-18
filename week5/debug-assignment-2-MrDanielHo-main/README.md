# Debug assignment 2 - SNACKS
## Table of contents
* [Overview](#overview)
* [Getting Started](#getting-started)
    * [Prerequisities](#prerequisites)
    * [Installation](#installation)
        * [Docker](#docker)
        * [Node](#node)
    * [Database Schema](#database-schema)
* [API Endpoints](#api-endpoints)
    * [Base URL](#base-url)
    * [API Endpoints](#api-endpoints-1)
* [Get All Countries](#get-all-countries)
    * [Example Request](#example-request)
    * [Example Response](#example-response)
* [Contributors](#contributors)
* [Thanks to](#thanks-to)

## Overview

A Country API that allows you to add, remove and view countries. 

## Getting Started

### Prerequisites
- Docker
    - Alternatively:
    - Node.js
    - NPM
    - A cloud-based database hosting platform, such as Supabase 
  
### Installation

#### Docker
1. Clone the repository

    - Run `git clone https://github.com/LaFosseAcademy/debug-assignment-2-MrDanielHo.git` in the CLI of your choice

2. Navigate to the project directory

    - Navigate to the project with `cd api`

3. Build the Docker image for the application

    - Run `docker build -t mrdanielho/snacks-app:0.0.1.RELEASE .` to build the image

4. Build the Docker image for the database

    - Run `docker build -t mrdanielho/snacks-db:0.0.1.RELEASE .` to build the image

5. Run the Database Docker Image

    - Run `docker run -d -p 3005:5000 mrdanielho/snacks-db:0.0.1.RELEASE` to create the docker image

6. Run the Application Docker image

    - Run `docker run -d -p 3005:5000 mrdanielho/snacks-app:0.0.1.RELEASE` to create the docker image


#### Node
1. Clone the repository

    - Run `git clone https://github.com/LaFosseAcademy/debug-assignment-2-MrDanielHo.git` in the CLI of your choice

2. Navigate to the project directory

    - Navigate to the project with `cd api`

3. Install dependencies

    - Run `npm install` to install all dependencies for the project

4. Setup your database

    - Create a database instance on [Supabase](https://supabase.com/) (or other cloud-based database hosting platforms)
    - Retrieve the database URL & copy it
    - Create a `.env` file in the root directory with the following:
    
      ```
      DB_URL=<your_database_url>
      ```
      
    - Replace `<your_database_url>` with the database URL you just copied
    - Run `npm run setup-db` to setup the database

5. Setup your port
  
    - Add A `PORT` key assigned to the port of your choice in your `.env` file
    
        ```
        PORT=<port-of-your-choice>
        ```

6. Run the server

    - Run `npm run dev` to run the server in development mode
    - Run `npm start` to run the server in production mode

### Database Schema

`Country Table`

```
country_id: Primary Key
name: String, not null 
capital: String, not null 
population: Integer, not null 
etc..
```

## API Endpoints

All available API endpoints with their methods and descriptions.

### Base URL
`http://localhost:<port>/countries` (or your deployed URL)

### API Endpoints

| Method | Endpoint                  | Description                  |
|--------|---------------------------|------------------------------|
| GET    | /countries                | Retrieves all countries          |
| GET    | /countries/:name            | Retrieves a single country      |
| POST   | /countries                | Creates a new country           |
| DELETE | /countries/:name            | Deletes a country               |

## Get all countries

### Example Request

To retrieve all countries, you can use the following GET request - `GET /countries`

`curl -X GET http://localhost:<port>/countries`

### Example Response

A successful response will return a JSON array of countries objects, similar to the following:
      
  ```json
  [
    {
          "id": 1,
          "name": "country1",
          "capital": "capital1",
          "population": 1,
          "languages": "language1",
          "fun_fact": "fact1",
          "map_image_url": "url1"
     },
     {
          "id": 2,
          "name": "country2",
          "capital": "capital2",
          "population": 2,
          "languages": "language2",
          "fun_fact": "fact2",
          "map_image_url": "url2"
      },
  ]
  ```

## Contributors
Daniel Ho

## Thanks to
* Clare Cullimore
* Emilie Sherrott
* Monia Favaro
* Simon Clemson

Thanks for getting us through the Academy.<br>
Greatly appreciate it