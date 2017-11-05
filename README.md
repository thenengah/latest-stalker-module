# Latest Stalker (module)

Check which dependencies in your package are using the latest version.

## Demo

https://latest-stalker.herokuapp.com

## Usage

```bash
npm install latest-stalker
```

### Async/Await

```node
import stalker from 'latest-stalker'

(async() => {
  try {
    console.log(await stalker('./package.json'))
  } catch (er) { console.log(er.stack) }
})()
```

### Promise

```node
const stalker = require('latest-stalker')

stalker('./package.json').then(json =>
  console.log(json)
).catch(er =>
  console.log(er.stack)
)
```

## API 

This module uses the latest-stalker-api:

https://github.com/thenengah/latest-stalker-api


## Contribute

Fork this project, make your changes, and submit a pull request.
