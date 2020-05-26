# Navbar

### [Demo](https://vant.bctc.io/?path=/story/navbar--navbar-title)

#### Install

```text
import React from 'react';
import { Button } from 'vant-react';
```

## Usage

#### Basic Usage

```text
<Navbar title='Settings' />
```

#### LeftAndRightText

```text
<Navbar
    title='Settings'
    leftText='Back'
    rightText='More'
/>
<Navbar
    title='Profile'
    leftIcon='arrow-left'
    leftText='Back'
    rightIcon='search'
    rightText='Search'
/>
<Navbar
    title='Home'
    leftIcon='user-o'
    rightIcon='search'
/>
```

#### Fixed

```text
<Navbar
    fixed
    title='Profile'
    leftIcon='arrow-left'
    leftText='Back'
    rightIcon='search'
/>
```

#### BorderBottom

```text
<Navbar
    border
    title='Profile'
    leftIcon='arrow-left'
    leftText='Back'
    rightIcon='search'
/>
```

#### ClickHandler

```text
<Navbar
    title='Title'
    leftIcon='arrow-left'
    leftText='Back'
    rightIcon='search'
    clickLeft={(e) => alert(e.target.innerHTML + ' Left Click')}
    clickRight={(e) => alert(e.target.innerHTML + ' Right Click')}
/>
```

#### WithLongTitle

```text
<Navbar
      title='This is a very very very very very very very very very very long text'
      leftIcon='arrow-left'
      leftText='Back'
      rightIcon='search'
/>
```

## API

#### Props

| Attribute  | Description                                    | Type          | Default | Required   |
| :--------- | :--------------------------------------------- | :------------ | :------ | :--------- |
| `title`    | Title                                          | _**string**_  | -       | _optional_ |
| `lefText`  | Left Text                                      | _**string**_  | -       | _optional_ |
| `righText` | Left Text                                      | _**string**_  | -       | _optional_ |
| `leftIcon` | Left Icon, can be set to `arrow-left` `user-o` | _**string**_  | -       | _optional_ |
| `righIcon` | Left Icon, can be set to `search`              | _**string**_  | -       | _optional_ |
| `border`   | Whether to show bottom border                  | _**boolean**_ | `true`  | _optional_ |
| `fixed`    | Whether to fixed top                           | _**boolean**_ | `true`  | _optional_ |
| `zIndex`   | Z-index                                        | _**number**_  | `1`     | _optional_ |

#### Event

| Event        | Description                     | Arguments      |
| :----------- | :------------------------------ | :------------- |
| `clickLeft`  | Triggered when click left icon  | _event: Event_ |
| `clickRight` | Triggered when click right icon | _event: Event_ |
