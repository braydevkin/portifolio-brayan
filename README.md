## Portilofio Brayan

[Access clicking here](https://portifolio-brayan.vercel.app/)

This project consists of a personal portfolio.

#### Estimated time and time taken

The forecast I gave to some important activities in the creation of the project. 

| Tasks | Estimated time |
| ----------- | ----------- |
| Setup Next Project | 5 minutes |
| Setup Shadcn and Dark Mode | 5 minutes |
| Creating project architecture | 10 minutes |
| Creating responsive header and footer | 30 minutes |
| Creating responsive page about me | 30 minutes |
| Creating responsive page of projects | 30 minutes |
| Creating responsive page of knowledges | 30 minutes |
| configuration of API tools  | 30 minutes |
| Create API  | 01 hour |
| Create from using React Hook Form  | 30 minutes |
| Create Prisma and Docker setup  | 01 hour |
| Documentation  | 30 minutes |

In the middle of process i made some extra activities them are

| Tasks | Time taken |
| ----------- | ----------- |
| Cypress tests |  1 hours |
| Backend unit tests | 20 minutes |
| Docker setup for direct execution with all dependencies and tools | 20 minutes |
| Design UI | 20 minutes |
| Prisma scripts and configs | 40 minutes |
| General Development (UI, responsivity, pagination, context, custom hooks) | 8 hours |

<strong>Total about 11 hours</strong>
<i>Valid observation: it was necessary to reconcile the test with my current work routine, so it took me more time to think and do something different and complete.

-------------------------------------------

<i>Now lets see some technical information...</i>

##### How to run ?
``` bash
# Run Project
docker compose up
# Run Unit Tests
yarn test
# Run Cypress Tests
yarn cypress:open
```

##### Observation about Cypress
<small>You may need to add some dependencies to your Linux or Windows system in order to use cypress, below is a link to download them.</small>
[Cypress setup](https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies)


##### Extra commands 
<small>Take a look at prisma</small>

``` bash
# Prisma studio
prisma:studio
# Prisma generate
yarn prismadb:generate
# Prisma Db Push
yarn prismadb:push
# Prisma Db Pull
yarn prismadb:pull
```

##### Local CURL's

``` bash
#Create Comment
curl --location 'http://localhost:3000/api/comments' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Teste",
    "comment": "Test"
}'
```



##### Technical decisions
<small>Summary of the main decisions throughout the project</small>

<h6>Shadcn</h6>

- In addition to using the necessary core, which would be NextJS and Tailwind, one of the primary choices in terms of styling and design was the use of Shadcn. It has made it possible to create clean and effective components, as well as maintaining a good standard of development. You can access all the components used in Shadcn in the folder [Shadcn Components](/components/ui).

- The dark mode was also created using Shadcn. As well as being effective in dealing with the state of changing the theme via the next-themes hook, it made development and the application standard easier. [Shadcn Dark Mode](https://ui.shadcn.com/docs/dark-mode).

<h6>React Hook Form</h6>

- I chose to use React Hook Form to make it easier to create, validate and organize the form. I have experience using this library with large, complex forms and saw that it would be a good choice. [React Hook Form Doc](https://react-hook-form.com/get-started).

<h6>Prisma</h6>

- The choice of Prisma was very much in line with the choice to use Typescript, it has incredible support for typing, works very well with relational databases, has clear and objective documentation and an incredible tool called Prisma Studio. [Prisma Doc](https://www.prisma.io/docs)

<h6>Typescript</h6>

- Typescript has been the language I've been using the most in my day-to-day life. I chose it because it's easier to deal with types, read functions and variables more accurately and with the choice of Prisma, I didn't use all the tools because the complexity of the project wasn't that high, but I believe I used a good standard.

<h6>Docker</h6

- I chose to implement docker because it's always a good choice to standardize the development environment, making it easier to use the dependencies and run the project locally, as well as uploading all the settings needed to run the project.

<h6>Extra lib</h6

- <strong>react-scroll-to-top</strong> I implemented a smooth scroll on the website and used it to add a button that returns to the top, I could have used Javascript, but I had some problems and didn't invest much time in solving this little challenge.


##### Functionalities implemented

- A session about me, to talk a little about my tastes and personality.
- Project session to show a little about my career.
- Comment session that allows you to add a comment and see the list of existing ones.
- Comment list pagination.
- Footer with contact information and a motivational phrase =)

##### NextJS topics used

- I have created a custom hook that is responsible for updating the URL with the pagination filters. [See Custom Hook](/src/hooks/useCommentsRouter.tsx).
- I've created a context that updates the list of comments as soon as a new comment is created. [See Context](/src/context/CommentsContext.tsx).


##### About SEO and Accessibility

- I confess that accessibility is a point I need to improve, so I may have left something to be desired in the project. Regarding SEO, I implemented a simple structure in NextJS, with stronger points that I believe serve their purpose in the project.


##### What I would improve or do better in the long term

- Implement more accessibility tools.
- organize and clean up the code more.
- set up a deployment environment to stop production in Docker.
- Adopt dynamic SEO if there is a need to add more pages.
- I would better structure the line of reasoning and timing.
