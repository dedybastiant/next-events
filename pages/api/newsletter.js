function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({
        error: "INVALID_EMAIL",
        message: "Email should be valid",
      });
      return;
    }
    res.status(201).json({ message: "success" });
  }
}

export default handler;
