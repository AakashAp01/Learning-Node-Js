const express = require('express');
const app = express();

const EventEmmiter = require('events');
const eventEmmiter = new EventEmmiter();



let count = 0

eventEmmiter.on('called', () => {
    count++;
    console.log(`API has been called ${count} times`);
})


app.get('/', (req, resp) => {
    eventEmmiter.emit('called')
    resp.send(`Home API called. Total API Calls: ${count}`);
})


app.get('/search', (req, resp) => {
    eventEmmiter.emit('called')
    resp.send(`Search API called. Total API Calls: ${count}`);
})

app.listen(3000);