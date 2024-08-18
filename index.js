require('dotenv').config();

const express = require('express');

const app = express();

const port = 3000;

const githubData = {
    "login": "saubhagya312",
    "id": 175115254,
    "node_id": "U_kgDOCnAL9g",
    "avatar_url": "https://avatars.githubusercontent.com/u/175115254?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/saubhagya312",
    "html_url": "https://github.com/saubhagya312",
    "followers_url": "https://api.github.com/users/saubhagya312/followers",
    "following_url": "https://api.github.com/users/saubhagya312/following{/other_user}",
    "gists_url": "https://api.github.com/users/saubhagya312/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/saubhagya312/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/saubhagya312/subscriptions",
    "organizations_url": "https://api.github.com/users/saubhagya312/orgs",
    "repos_url": "https://api.github.com/users/saubhagya312/repos",
    "events_url": "https://api.github.com/users/saubhagya312/events{/privacy}",
    "received_events_url": "https://api.github.com/users/saubhagya312/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-07-09T11:01:28Z",
    "updated_at": "2024-08-18T11:30:57Z"
};

app.get('/', (req, res) => {
    res.send('Saubhagya Developer');
});
app.get('/github', (req, res) => {
    res.send('Saubhagya312');

});
app.get('/instagram', (req, res) => {
    res.send('<h1> a basic app to deploy </h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2> Saubhagya </h2>');
});
app.get('/login', (req, res) => {
    res.json(githubData);
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);

});
