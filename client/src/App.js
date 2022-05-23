import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  from,
  HttpLink
} from "@apollo/client";
import { onError } from "@apollo/client/link/error"
import GetBooks from './component/GetBooks';

const link = from([
  onError(({ graphqlErrors, networkError }) => {
    if(graphqlErrors){
      graphqlErrors.map(({message,location,path}) => {
        alert(`GraphQl error ${message}`)
      })
    }
  }),
  new HttpLink({ uri: "http://localhost:4000/graphql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
   <ApolloProvider client={client}>
     <GetBooks/>
   </ApolloProvider>
  );
}

export default App;
