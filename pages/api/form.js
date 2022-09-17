export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  if (!body) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Email not found' });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: body.email });
}
