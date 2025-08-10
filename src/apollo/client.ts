import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from "@apollo/client";

const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT as string;
const AUTH_KEY = import.meta.env.VITE_AUTH_TOKEN_KEY ?? "auth_token";

const httpLink = createHttpLink({ uri: GRAPHQL_ENDPOINT });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_KEY);
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      ...(token ? { "Authorization": `Bearer ${token}` } : {}),
    },
  }));
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
