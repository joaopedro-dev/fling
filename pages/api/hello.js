// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function quote(req, res) {
  res.status(200).json([
    {
      author:'Abraham Lincoln',
      text:'A house divided against itself cannot stand.',
   },
   {
      author:'Carl Sandburg',
      text:'Nothing happens unless first we dream.',
   }
  ])
}
