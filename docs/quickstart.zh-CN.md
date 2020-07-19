## 快速上手

### Install

``` bash
# Using npm
npm i vant-react -S

# Using yarn
yarn add vant-react
```

### Quickstart

``` js
import React from 'react';
import { Button } from 'vant-react';
import 'vant-react/dist/index.css';

const App = () => {
    return (
        <Button text='Hello World' />
    );
};