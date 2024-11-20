## Vite micro-frontends using Module Federation

**These folders contain four different services!!**

To start each service, you must install modules if it needs
```
npm ci
```

And then enter the command (for first-app, second-app, sidebar-app)
```
npm run dev
```

And then enter the command (for to-dos-ui-mf)
```
npm run start
```

You can test it 

1. Open the first-app using the link http://localhost:5002/ 
2. Change the text of any button in the sidebar-app
3. You see that it automatically changes in the first-app, to-dos-ui-mf and in second-app too

So, we have a service that implements a sidebar (sidebar-app), and three services between which the sidebar switches us (first-app, second-app and to-dos-ui-mf). Instead of duplicating the sidebar in both services, we implement it separately and pass the sidebar module into each of this two services

The following guide was used for setting up:
https://module-federation.io/guide/start/quick-start.html