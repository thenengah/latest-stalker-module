# Latest Stalker (Module)

Check which dependencies in your package are using the latest version.

Checkokut the [demo](https://latest-stalker.herokuapp.com) and the [api](https://github.com/thenengah/latest-stalker-api).

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

## Contribute

To contribute fork this project, make your changes, and submit a pull request.

### Development

```text
git clone https://github.com/thenengah/latest-stalker-module.git
cd latest-stalker-module
npm intall
npm run build
npm test 
```
