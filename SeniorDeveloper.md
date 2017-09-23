# Senior Dev

## Who is SeniorDev

Well, before we dive into a path on becomming senior developer in js, we should stop and answer, who is this mysterious SeniorDev.
As I can judge, SeniorDev is the guy who can solve things. No matter what, any task that was set up for him, he can find a solution.

## Tasks
The tasks are pretty broad. You can't just say "I can solve this, this and this, so I'm SeniorDev".

## Examples

### Git
* move on 3 commits ago


### React steps
 * ESLint (Standard Style) to use one style system
 * move all logic to redux-thunk, in order to keep clean reducers
 * use PureComponent instead of Component
 * add PostCSS, and use plugins for optimization (autoprefixer)
 * move to ES6/ES7 (spread instead of Object.assign(), async/await instead of callback)


 ...in process


 ## Senior Frontend Architect

 ## Architecture in Frontend

 You can rightly ask, What kind of Architecture can be in Frontend. Really? Maybe i confuse Frontend and Backend.
 And truly there are a lof of Architecture problems in Backend. You should think about, where and how to store your data, if it's relational database you should invest
 some time into designing indexes, table optimization and so on. You servers should answer really quick, and your code should work perfect.
 While it's all true about Backend, there is also some interesting stuff in Frontend.
 If your app is small, you don't need any frontArchitecture, because everyting works fine without it.
 But when you go highload, your backend server start to freeze a little, and in this point, in order not to break user experience you need to devise some kind of
 Architecture.

 ## Simple Example

 Suppose you have registration. Again if your site is simple
 1) register user
 2) request user profile
 3) redirect user to profile page
 What if /register and /profile, both takes on 5 sec. That means, your user have to wait for 10 sec, and then go to his profile.
 Not good from UX side.
 What you can do? You can architect frontend in a way, that it doesn't wait for backend server response, but assume some kind of base profile and show this profile to user.
 User enter his base profile page (we still waiting for server), interact with it. Then we got response and we can update user profile with backend real data. So we show some
 kind of popup to user, where we inform him, that his profile changed and display new data (of course without reloading)


 ## Conclusion

 By itself this task can be pretty simple. You just show some default data, then after response you update it. And if it's only one request, it's pretty easy.
 But if you have 10 or 20 such kind of requests? Well in this case you should provide very smart Architecture that will monitor your Frontend solutions and
 interact with user.

 ...in process