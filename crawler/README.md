# Gajumaru Crawler

## install

```
npm install
cp .env.example .env
cp .vscode/settings.json.recommend .vscode/settings.json
```

## run

```
npm run build
node target/index.js [ options ]
```
e.g.  
`node target/src/index.js -c 1 --slack true`

### options

|alias|default|require|
|:--:|:--:|:--:|
|slack|false||

## test

```
npm run test
```

## VSCode user

Following recommendations, install extensions.  
`@recommended:workspace`
