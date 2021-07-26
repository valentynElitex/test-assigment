const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.get('/test/jobs', (req, res) => {
    axios.post('https://www.zippia.com/api/jobs', {
        "companySkills": true,
        "dismissedListingHashes": [],
        "fetchJobDesc": true,
        "jobTitle": "Business Analyst",
        "locations": [],
        "numJobs": 20,
        "previousListingHashes": []
    })
        .then(result => {
            res.json(result.data);
        })
        .catch(err => {
            console.log('Error: ', err.message);
        });

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
