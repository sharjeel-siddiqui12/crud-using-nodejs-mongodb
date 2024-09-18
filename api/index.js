export default function handler(req, res) {
    console.log(`${req.headers['x-forwarded-for'] || req.connection.remoteAddress} is asking for hello`);
    res.send('Here is some hello for you');
}
