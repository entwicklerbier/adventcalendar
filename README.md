# Adventcalendar
A nice little advent calendar written with [redux](https://github.com/rackt/redux).

## Run Development/Test/Build
For hot reloading I recommend installing the [better vagrant/rsync plugin](https://github.com/smerrill/vagrant-gatling-rsync).

```
vagrant up
vagrant ssh
cd app
```

### Development
```
npm start
```
open `localhost:8080` and enjoy the hot reloading

### Test
```
npm run test:watch
```

### Build
```
npm run build
```

You will find the resulting js in `dist`
