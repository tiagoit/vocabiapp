// https://levelup.gitconnected.com/a-guide-to-next-js-api-routes-a287eda1f784

const handleGet = () => {
  console.log(req.body) // The request body
  console.log(req.query) // The url query string
  console.log(req.cookies) // The passed cookies

  let { name } = req.body;
  name = name || 'visitor';

  res.status(200).json({ 'message': `Hello ${name}, API works!`});
};

const handlePost = () => {
  console.log(req.body) // The request body
  console.log(req.query) // The url query string
  console.log(req.cookies) // The passed cookies


}

export default (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET':
      handleGet();
      break
    case 'POST':
      handlePost();
      break
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
