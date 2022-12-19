// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'POST') {
    if (req.body.userName === "demo" && req.body.password === "demo"){
      res.status(200).json({message: "ok" })
    } else {
      // console.log(req.body)
      res.status(403).json({message: "not registered"})
    }
  } else {
    res.status(400).json({message: "nope only post"})
  }
}
