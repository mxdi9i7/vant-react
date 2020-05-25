# Button

### [Demo](https://vant.bctc.io/?path=/story/button--button-types)

### Install

```text
import React from 'react';
import { Button } from 'vant-react';
```

### Usage

####     Type

```text
<Button type="default">Default</Button>
<Button type="primary">Primary</Button>
<Button type="info">Info</Button>
<Button type="danger">Danger</Button>
<Button type="warning">Warning</Button>
```

####     Plain

```text
<Button plain type="primary">Primary</Button
<Button plain type="danger">Danger</Button>
```

####     Disable

```text
<Button disabled type="primary">Diabled</Button>
<Button disabled type="info">Diabled</Button>
```

####     Loading

```text
<Button loading type="primary" />
<Button loading type="primary" loadingType="spinner" />
<Button loading type="info" loadingText="Loading..." />
```

####     Shape

```text
<Button square type="primary">Square</Button>
<Button round type="info">Round</Button>
```

####     Custom Color

```text
<Button color="FFECB3">Pure</Button
<Button color="00796B" plain>Pure</Button>
```

####     Tags

```text
<Button tag="a">A Tag</Button>
<Button tag="button">Button Tag</Button>
```

####     Native Type

```text
<Button nativeType="button">Button Type</Button>
<Button nativeType="reset">Reset Type</Button>
<Button nativeType="submit">Submit Type</Button>
```

####     Block

```text
<Button>Non Block Button</Button>
<Button block>Block Button</Button>
```

####     Icon

```text
<Button icon='https://img.yzcdn.cn/vant/logo.png'>Custom Icon Button</Button>
```

####     Action

```text
<Button click={(e) => alert(e.target)}>Handle Click</Button>
<Button touchstart={(e) => alert(e.target)}>Handle Touchstart</Button>
```

####     URL

```text
<Button tag='a' replace url='https://github.com/mxdi9i7/vant-react'>Open URL in Same Frame</Button>
<Button tag='a' url='https://github.com/mxdi9i7/vant-react'>Open URL in New Tab</Button>
```

### API

####   Props

| Attribute | Description | Type | Default | Required |
| :--- | :--- | :--- | :--- | :--- |
| `type` | Can be set to `primary` `info` `warning` `danger`  | _**string**_ | `default` | _optional_ |
| `text` | Text to be displayed in button | _**string**_ | - | _optional_ |
| `color` | Color, in hex value: `a9s7dn` | _**string**_ | - | _optional_ |
| `icon` | Button icon that appears on the left | _**string**_ | - | _optional_ |
| `tag` | HTML Tag | _**string**_ | - | _optional_ |
| `nativeType` | Native Type Attribute | _**string**_ | ' ' | _optional_ |
| `plain` | Whether to be plain button | _**boolean**_ | `false` | _optional_ |
| `round` | Whether to be round button | _**boolean**_ | `false` | _optional_ |
| `square` | Whether to be square button | _**boolean**_ | `false` | _optional_ |
| `disabled` | Whether to disable button | _**boolean**_ | `false` | _optional_ |
| `loading` | Whether to show loading status | _**boolean**_ | `false` | _optional_ |
| `loadingText` | Loading text | _**string**_ | - | _optional_ |
| `loadingType` | Loading type, can be set to`spinner`   | _**string**_ | `circular` | _optional_ |
| `url` | Link URL | _**string**_ | - | _optional_ |
| `replace` | Whether open in current tab | _**boolean**_ | `false` | _optional_ |

####   Event

| Event | Description | Arguments |
| :--- | :--- | :--- |
| `click` | Triggered when click button and not disabled or loading | _event: Event_ |
| `touchstart` | Triggered when touch start on mobile | _event:TouchEvent_ |

