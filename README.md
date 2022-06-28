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

## Run tests

- `pnpm test:unit:watch` vitest watchmode
- `pnpm test:unit` vitest one time,
- `pnpm test:cypress:open` cypress ui
- `pnpm test:cypress` cypress e2e headless
- `pnpm test:cypress:component` cypress component headless

## Tasks

1. Set up testing frameworks  
   a. Set up [Vitest](https://vitest.dev/)  
   b. Set up [Cypress](https://www.cypress.io/)

Fast forward `git checkout test-setup-done`

2. Write unit tests with Vitest  
   a. `getActiveTasks()` should only get tasks fresher than 1 minute  
   b. `getNumberOfTasksMissed()` should get the number of tasks older than 1 minute and not with status done

3. Write browser tests with Cypress  
   a. New task should be added to todo lane  
   b. Lane should have correct number of tasks  
   c. Tasks should be added to correct lane  
   d. Tasks can be moved to other lane

4. Write component tests with Cypress  
   a. `<AddTask />` component should clear input element on enter  
   b. `<ErrorBox />` component should show message on expand

Fast forward `git checkout completed` for completed tasks
