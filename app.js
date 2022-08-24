const express = require('express')
const app = express()

const aboutUs = require('./repo/content.json')
const activities = require('./repo/activities.json')
const news = require('./repo/news.json')
const campaign = require('./repo/campaign.json')
const executive = require('./repo/executive.json')
const staff = require('./repo/staff.json')
const regularEvents = require('./repo/regularEvents.json')
const conference = require('./repo/conference.json')
const branches = require('./repo/branches.json')
const societies = require('./repo/societies.json')
const subCommittee = require('./repo/subCommittee.json')
const pastExecutives = require('./repo/pastExecutives.json')
const pastPresidents = require('./repo/pastPresidents.json')
const photos = require('./repo/photos.json')
const videos = require('./repo/videos.json')

// respond with "hello world" when a GET request is made to the homepage
app.get('/aboutUs', (req, res) => {
    res.json(aboutUs[0])
})

app.get('/presidentMessage', (req, res) => {
    res.json(aboutUs[1])
})

app.get('/secretaryMessage', (req, res) => {
    res.json(aboutUs[2])
})

app.get('/mision', (req, res) => {
    res.json(aboutUs[3])
})

app.get('/councilMember', (req, res) => {
    res.json(aboutUs[4])
})

app.get('/nmaAwards', (req, res) => {
    res.json(aboutUs[5])
})

app.get('/activities', (req, res) => {
    res.json(activities)
})

app.get('/activities/:id', (req, res) => {
    const id = req.params['id'];
    const activity = activities.find(a => a.activities_id === id);
    res.json(activity ?? {})
})

app.get('/news', (req, res) => {
    res.json(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params['id'];
    const newsS = news.find(a => a.news_id === id);
    res.json(newsS ?? {})
})

app.get('/campaign', (req, res) => {
    res.json(campaign)
})

app.get('/campaign/:id', (req, res) => {
    const id = req.params['id'];
    const camp = campaign.find(a => a.campaign_id === id);
    res.json(camp ?? {})
})

app.get('/executive', (req, res) => {
    res.json(executive)
})

app.get('/executive/:id', (req, res) => {
    const id = req.params['id'];
    const exe = executive.find(a => a.board_id === id);
    res.json(exe ?? {})
})

app.get('/staff', (req, res) => {
    res.json(staff)
})

app.get('/staff/:id', (req, res) => {
    const id = req.params['id'];
    const staff = staff.find(a => a.staff_id === id);
    res.json(staff ?? {})
})

app.get('/regularEvents', (req, res) => {
    res.json(regularEvents)
})

app.get('/regularEvents/:id', (req, res) => {
    const id = req.params['id'];
    const regularEvent = regularEvents.find(a => a.events_id === id);
    res.json(regularEvent ?? {})
})

app.get('/conference', (req, res) => {
    res.json(conference)
})

app.get('/conference/:id', (req, res) => {
    const id = req.params['id'];
    const regularEvent = conference.find(a => a.nmacon_id === id);
    res.json(regularEvent ?? {})
})

app.get('/branches', (req, res) => {
    res.json(branches)
})

app.get('/societies', (req, res) => {
    res.json(societies)
})

app.get('/subCommittee', (req, res) => {
    res.json(subCommittee)
})

app.get('/pastExecutives', (req, res) => {
    res.json(pastExecutives)
})

app.get('/pastPresidents', (req, res) => {
    res.json(pastPresidents)
})

app.get('/photos', (req, res) => {
    res.json(photos)
})

app.get('/videos', (req, res) => {
    res.json(videos)
})

app.listen(process.env.PORT || 3000, () =>
    console.log('Example app listening on port 3000!'),
);