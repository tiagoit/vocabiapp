import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography component="h1" variant="h5" color="primary">Improve vocabulary on</Typography>
      </Box>
    </Layout>
  );
}