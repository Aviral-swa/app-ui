import Product from "./Pages/Product";
import { Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  product: {
    padding: theme.spacing(1), //grid padding
    textAlign: "center",
    color: "black",
    backgroundColor: "#00bfff",
    borderColor: "text.primary",
    marginTop: -10,
    marginLeft: -10,
    marginRight: -10,
  },
}));
const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:9001/graphql",
  });
  const classes = useStyles();

  return (
    <>
      <Row>
        <Col sm={12} className={classes.product}>
          <h2>Product</h2>
        </Col>
      </Row>
      <Divider />
      <ApolloProvider client={client}>
        <Product />
      </ApolloProvider>
    </>
  );
};

export default App;
