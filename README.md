# ReactNative-ContextAPI-Sample-App

This simple react native app shows how to implement Context API in reactnative app. The problem solved here is that of passes data and component states from one screen to another when the tab navigation is clicked.
Bottom tab navigation (custom) was created by @AnatuGreen and @kiyohken2000 used React's context API to make it possible that when the state is changed on the List screen,
it replicated on the Favorites screen and vice versa.

Normally this is easily possible when you use just Native stack navigation (navigation.navigate) (see: https://reactnavigation.org/docs/params/#what-should-be-in-params) to navigate between screens but tab navigation does not follow that protocol

Thanks to https://github.com/kiyohken2000 for making this possible.

20/05/2022
