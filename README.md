# README

This is a minimum app solely for the purpose of showing a bug in the intercom widget rendering.

To run:

1. Add a file `.env.development` to the root of this project, and then add an environment variable `INTERCOM_APP_ID=your_app_id`. (See the example file `.env.default`, make that same variable in `.env.development` instead)
2. `bundle install`
3. `bin/dev` should start the server. Now go to `localhost:3000` and you will be met with a very barebones "wizard" form
4. Open the intercom widget, hit next on the form, intercom breaks (but only in firefox, chrome is fine).

(You don't need npm or node or yarn, it uses importmaps so none of that shenanigans, just need a ruby and rails install)

Note that the NPM package `@intercom/messenger-js-sdk` didn't quite work as described, when I use
`Intercom({app_id: 'something'})` it gives an error that "Intercom is not a function". By calling it with
`Intercom.default({app_id: 'somethong'})` it works fine.

You can see the intercom stimulus controller that is loading the widget at `app/javascript/controllers/intercom_controller.js`, as well as some console logging to show that turbo events are being fired.

I have tried multiple strategies, including using the gem, putting the intercom script tag in the body, using the
single-page-app javascript example. They all exhibit this exact same behavior.

I suspect the problem has something to do with advancing the form in question utilizing turbo frames
