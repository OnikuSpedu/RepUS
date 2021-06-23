import axios from 'axios'

export default async (req, res) => {
    try {
        const reqBody = JSON.parse(req.body);

        if (reqBody.query != null && reqBody.query != "") {
            var officials = []

            const response = await axios(`https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.API_KEY}&address=${reqBody.query}`);
            const data = response.data;

            console.log(data)

            for (let i = 0; i < data.offices.length; i++) {
                data.offices[i].officialIndices.forEach(rep => {
                    officials.push({
                        office: data.offices[i].name,
                        name: data.officials[rep].name,
                        party: data.officials[rep].party,
                        photo:  data.officials[rep].photoUrl ? data.officials[rep].photoUrl : null,
                        address: data.officials[rep].address ? data.officials[rep].address : "N/A",
                        urls: data.officials[rep].urls ? data.officials[rep].urls : [],
                        channels: data.officials[rep].channels ? data.officials[rep].channels : [],
                        emails: data.officials[rep].emails ? data.officials[rep].emails : [],
                        phones: data.officials[rep].phones ? data.officials[rep].phones : []
                    })
                });
            }

            res.status(200).json({ success: true, data: officials });
        } else {
            res.status(200).json({ success: false, message: "ERR" });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({ success: false, message: "ERR" });
    }
}