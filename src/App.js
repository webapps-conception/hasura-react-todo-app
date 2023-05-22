import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from '@apollo/client/link/context'
import Tasks from './Tasks'
import TodoInput from './TodoInput'

if (! process.env.REACT_APP_HASURA_GRAPHQL_URL) {
  console.error("Erreur de déclaration de la variable REACT_APP_HASURA_GRAPHQL_URL !")
}

if (! process.env.REACT_APP_HASURA_ADMIN_SECRET) {
  console.error("Erreur de déclaration de la variable REACT_APP_HASURA_GRAPHQL_URL !")
}

const authLink = setContext((_, { headers }) => {
  return {
  headers: {
       ...headers, 'x-hasura-admin-secret': process.env.REACT_APP_HASURA_ADMIN_SECRET
     }
   }
})

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_HASURA_GRAPHQL_URL,
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <p>ToDo App</p>
        </header>
        <br />
        <TodoInput />
        <Tasks />
      </div>
    </ApolloProvider>
  )
}

export default App
