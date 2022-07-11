import NextCors from 'nextjs-cors'
import axios from 'axios'

const handler = async (req, res) => {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	})
	if (req.query.clanId.includes('#')) {
		try {
			const resp = await axios.get(
				`https://api.clashroyale.com/v1/clans/${encodeURIComponent(
					req.query.clanId
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
		} catch (err) {
			res.json(err)
		}
	} else {
		try {
			const resp = await axios.get(
				`https://api.clashroyale.com/v1/clans/%23${req.query.clanId}`,
				{
					headers: {
						Authorization: `Bearer ${process.env.API_TOKEN}`,
						'Access-Control-Allow-Origin': '*',
					},
				}
			)
			const info = await resp.data
			res.json(info)
		} catch (err) {
			res.json(err)
		}
	}
}
export default handler
