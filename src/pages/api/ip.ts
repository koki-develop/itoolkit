import { NextApiHandler } from "next";
import { getClientIp } from "request-ip";

const handler: NextApiHandler = (req, res) => {
  const ip = getClientIp(req);
  res.send(ip);
};

export default handler;
