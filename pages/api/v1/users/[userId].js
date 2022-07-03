import NextCors from 'nextjs-cors'
import axios from 'axios'

const handler = async (req, res) => {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	})
	if (req.query.userId.includes('#')) {
		const resp = await axios.get(
			`https://api.clashroyale.com/v1/players/${encodeURIComponent(
				req.query.userId
			)}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.API_TOKEN}`,
					'Access-Control-Allow-Origin': '*',
				},
			}
		)
		const info = await resp.data
		res.json(info)
	} else {
		const resp = await axios.get(
			`https://api.clashroyale.com/v1/players/%23${req.query.userId}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.API_TOKEN}`,
					'Access-Control-Allow-Origin': '*',
				},
			}
		)
		const info = await resp.data
		res.json(info)
	}
}
export default handler
