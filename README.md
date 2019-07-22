
# API Project: Timestamp Microservice for FCC

### Usage:
GET https://s-projects18-fcc-51.glitch.me/api/timestamp/DATE
* call the api with a date that is readable by javascript
* the api will return a JSON-string with a unix-timestamp (unix) and a readable format (utc)

#### Example usage:
* https://s-projects18-fcc-51.glitch.me/api/timestamp/2015-12-15
* https://s-projects18-fcc-51.glitch.me/api/timestamp/1450137600000
* https://s-projects18-fcc-51.glitch.me/api/timestamp
* https://s-projects18-fcc-51.glitch.me/api/timestamp/INVALID_FORMAT

#### Example output:
* {"unix":1450137600000,"utc":"Tue, 15 Dec 2015 00:00:00 GMT"}
