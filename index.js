const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express()
const url = 'https://www.stackoverflow.com/'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const interactables = []

        $('.flex--item', html).each(function() {
        const name =  $(this).text()
        const url = $(this).find('a').attr('href')
        interactables.push({
            name,
            url
        })
        console.log(interactables)
    
    }).catch(err => console.log(err))


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
})