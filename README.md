# workshop-frontend-testing

## Project setup

- [git](https://git-scm.com/)
- [Node](https://nodejs.dev/)
- [pnpm](https://pnpm.io/): `npm install -g pnpm`
- `git clone https://github.com/gautemo/workshop-frontend-testing.git`
- `cd workshop-frontend-testing`
- `pnpm i`

## Run frontend

- `pnpm dev`

## Tasks

1. Set up testing frameworks  
  a. Set up [Vitest](https://vitest.dev/)  
  b. Set up [Cypress](https://www.cypress.io/)  

Fast forward `git checkout test-setup-done`

2. Write unit tests with Vitest
  a. `getTasks()` should get saved tasks  
  b. `getTasks()` should remove tasks older than 3 days  

3. Write browser tests with Cypress