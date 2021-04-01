# 한국방송통신대학교 소프트웨어 경진대회에 제출할 작품 Repository.

## 기획의도:

1. 2020년 코로나 19로 많은 사람들이 고통받는 동시에 주식과 부동산 등의 자산들이 치솟기 시작했다.
2. 그리고 사람들은 이 상승에 동참하기 위해 자신들의 자산에 부채까지 동원하게 되는 비이성적인 모습들도 보이고 있다.
3. 자산에 대한 투자는 도박 심리를 자극하는 것이 아닌 우리의 현재와 미래의 삶을 보다 풍요롭게 하기 위함이 아닐까 하는 생각이 들었고.
4. 무엇보다도 우리가 가지고 있는 순자산, 소득 수준 등을 고려한 현실적인 상황에서 앞으로 몇 년 후에 경제적 자유를 얻을 수 있을지를 가늠해보는 프로그램을 만들어보고자 하였다.

## 공식
1. 유명한 투자의 대가들의 연평균 복리성장률은 투자 원금으로부터 n년간의 연평균 복리수익을 나타낸다.
2. 하지만 여기엔 매년 얼마씩 추가로 투입자금이 들어오는지 명확이 나와있지는 않았다.
 (어쩌면 그들은 시드머니를 끊임없이 불려나간 것일지도 모르지만...)
3. 따라서 운용자금이 턱없이 작거나 투자를 지속해서 시드를 늘려야 하는 입장에서는 원금에 연 저축액을 더한 금액에 복리승수를 적용하는 것이 가장 현실적인 계산 방법이라 판단된다.
4. 3과 같은 이유로 기존의 복리계산 공식을 다음과 같이 개량하였다.
--- 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
