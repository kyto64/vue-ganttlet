# Vue Ganttlet

## Original repository

This repository is a fork of the original repository [zunnzunn/vue-ganttastic](https://github.com/zunnzunn/vue-ganttastic)

## Features

- **[Vue 3](https://v3.vuejs.org/) support**
- **[TypeScript](https://www.typescriptlang.org/) support** _(ships with out of the box type declarations)_
- **Interactivity** _(dynamic, movable and pushable bars)_
- **Reactivity / Responsiveness** (_when changes occur, bars are repositioned accordingly_)
- **Customization options** (_chart/bar styling, slots, event handlers etc._)

## Quickstart

Install using

```
npm install @kyto64/vue-ganttlet
```

Then, initialize the plugin in the starting point of your app (most likely src/main.js):

```js
import { createApp } from "vue"
import App from "./App.vue"
...
import ganttlet from '@kyto64/vue-ganttlet'
...
createApp(App)
  .use(ganttlet)
  .mount('#app')
```

This will globally register the components g-gantt-chart and g-gantt-row and you will be able to use those two components right away.

```html
<template>
  <g-gantt-chart
    chart-start="2021-07-12 12:00"
    chart-end="2021-07-14 12:00"
    precision="hour"
    bar-start="myBeginDate"
    bar-end="myEndDate"
  >
    <g-gantt-row label="My row 1" :bars="row1BarList" />
    <g-gantt-row label="My row 2" :bars="row2BarList" />
  </g-gantt-chart>
</template>

<script setup>
  import { ref } from "vue"

  const row1BarList = ref([
    {
      myBeginDate: "2021-07-13 13:00",
      myEndDate: "2021-07-13 19:00",
      ganttBarConfig: {
        // each bar must have a nested ganttBarConfig object ...
        id: "unique-id-1", // ... and a unique "id" property
        label: "Lorem ipsum dolor"
      }
    }
  ])
  const row2BarList = ref([
    {
      myBeginDate: "2021-07-13 00:00",
      myEndDate: "2021-07-14 02:00",
      ganttBarConfig: {
        id: "another-unique-id-2",
        hasHandles: true,
        label: "Hey, look at me",
        style: {
          // arbitrary CSS styling for your bar
          background: "#e09b69",
          borderRadius: "20px",
          color: "black"
        },
        class: "foo" // you can also add CSS classes to your bars!
      }
    }
  ])
</script>
```

## Contributing

Clone the project, make some changes, test your changes out, create a pull request with a short summary of what changes you made. Contributing is warmly welcomed!

To test your changes out before creating a pull request, create a build:

```
npm run build
```

To test out the build, you should create a tarball using:

```
npm pack
```

Then, place the tarball in some other test project and install the package from the tarball by using:

```
npm install <name_of_the_package>.tgz
```


## About

**License** [MIT](https://choosealicense.com/licenses/mit/)


## Screenshots

![image](https://user-images.githubusercontent.com/28678851/148191571-76bd8d61-4583-4538-8c59-cc2915494890.png)

![image](https://user-images.githubusercontent.com/28678851/148191529-b50c0d17-bcc1-4a78-9d2c-ff2a36b03f52.png)

![image](https://user-images.githubusercontent.com/28678851/148191757-a2520dce-aeed-43df-87b2-3a64e225f9e7.png)
