# Debug assignment 2 - instructions 36.5/40 !!!

In this assignment, you'll be editing an existing software project. There are several problems in the code, and it's your job to find and fix them all.

## Rules

- Do not ask your classmates (verbally or through any other communication method) for help
- Do not copy/paste any code from someone else or from any online resource
- Do not edit any files in the `instructions` folder
- Do not use ChatGPT or any other AI code tools

## Process

- This repository has been automatically created for you
- **Clone** it onto your machine (**do not** fork it)
- Work on the `main` branch, and make all your commits there
- Run `git push` to sync your local changes with the remote repository
- A pull request (PR) has been automatically created on the remote repository for you (**do not** delete this)
- When you have made your final commits (and pushed), request a review on the PR from your assigned reviewer

## Project context

*Snack Rankings* is a back-end project that allows users to view and vote on their favourite snacks.

This project has two key elements:

- An API that allows users to vote on snacks and see a list of snacks with their total votes
- A database storing the snack data

**The database is not provided to you for this project; you'll need to [configure](#database-6-points) your own.**

## Instructions

- Get the project working without any error messages and with full functionality as described below.
- Create a `Dockerfile` file with the aim of building a custom image for the backend service (see requirements **[here](#containerisation-of-the-api-using-docker-5-points)**)
- Create a `README` file with the aim of documenting the backend service (see requirements **[here](#README-5-points)**)
- Make sure to make frequent commits with clear and descriptive messages (10+ commits is ideal)
- Follow clean code principles 

### API (21 points)

The API should be runnable with a single command. When the server is running, it should listen for requests on port 3000.

The API should have the following routes and functionalities:

| Route | Method | Response |
| --- | --- | --- |
| `/` | `GET` | Returns a JSON object describing the API. |
| `/snacks` | `GET` | Returns a JSON object containing all the snacks. |
| `/snacks` | `POST` | Accepts a JSON object and uses it to create and store a new snack. |
| `/snacks/top` | `GET` | Returns a JSON object representing the snack with the most votes. |
| `/snacks/:id` | `GET` | Returns a JSON object representing a single snack from the collection, selected by `:id`. |
| `/snacks/:id` | `PATCH` | Updates a specific snack, incrementing or decrementing its vote count. |
| `/snacks/:id` | `DELETE` | Deletes a specific snack, selected by `:id`. |

Use an API testing platform such as Hoppscotch, Postman, Thunder or Insomnia to test the API. 

### Database (6 points)

The API codebase contains a setup script for a database, but no database is currently connected.

As part of the assignment, you'll need to connect a database and verify that the setup script (and all queries used in the app) function as expected.

### Containerisation of the API using Docker (5 points)

Make sure your project has a `Dockerfile` that allows the trainer to do the following:

1. Build a Docker custom image for the API using the `Dockerfile`
2. Run a container based on that custom image
3. Access the application on the specified port in the Dockerfile 

### README (5 points)

Make sure your project has a `README` file that contains clear information on the following:

- A summary of the application - e.g: `this application [provides a brief description of what the application does and its main functionality]. It allows users to [describe the primary use case or problem it solves]`
- How to install the required libraries
- How to run the server
- The steps to build a custom image using the `Dockerfile` file & run a container based on that image
- Future features you would want to implement on the application & their benefits - e.g:
  ```
    - Feature 1: [Brief description of Feature 1 and its benefits]
    - Feature 2: [Brief description of Feature 2 and its benefits]
    - Feature 3: [Brief description of Feature 3 and its benefits]
  ```
- Any remaining bugs in the project (please also mention, if there are no bugs left)

---

[Back](../README.md)

---
