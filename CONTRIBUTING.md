# Welcome all of your contribution!

## How to start development

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

The page will reload when you make changes.<br />
You may also see any lint errors in the console.

### `npm test`

Launches the test runner.\
See the section about [Test runner](https://nodejs.org/docs/latest-v18.x/api/test.html) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## How to run repl

```ts
❯ npx tsx
> const n: string = 42; // You can write with TypeScript except actual type checking
> const { shuffleArray } = await import('./src/common/listHelpers');
undefined
> shuffleArray([1, 2, 3, 4, 5]);
[ 4, 2, 1, 3, 5 ]
> shuffleArray([1, 2, 3, 4, 5]);
[ 3, 2, 1, 4, 5 ]
```

## How to update contributors list

Members will update the list with this command after merging your PR.

```bash
npx all-contributors add YOUR_NAME code,YOUR_TOPIC
npx all-contributors generate
```

See the detail at https://allcontributors.org/docs/en/emoji-key
