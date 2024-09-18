export default function handler(req, res) {
    console.log(`${req.headers['x-forwarded-for'] || req.connection.remoteAddress} is asking for water`);
    res.send('Here is some water for you');
}
