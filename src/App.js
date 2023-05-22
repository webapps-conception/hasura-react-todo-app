import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import Tasks from './Tasks'
import TodoInput from './TodoInput'

const client = new ApolloClient({
  uri: 'https://tolerant-lark-69.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'c2tit6HG7T2o9UL8YkmfYugOmaMrb5dKJNAYFlN6dBzzw5xpHjrbV6wkkRNgiPqr'
  },
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
