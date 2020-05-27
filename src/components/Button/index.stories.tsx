import React from 'react';
import Button from '.';
import '../../styles/stories.scss';

export default {
  title: 'Button',
  component: Button
};

export const ButtonTypes = () => (
  <div className='container button'>
    <Button type='default'>Default Button</Button>
    <Button type='primary'>Primary Button</Button>
    <Button type='info'>Info Button</Button>
    <Button type='warning'>Warning Button</Button>
    <Button type='danger'>Danger Button</Button>
  </div>
);

export const PlainButtons = () => (
  <div className='container button'>
    <Button type='danger' plain>
      Danger Button
    </Button>
    <Button type='primary' plain>
      Primary Button
    </Button>
  </div>
);

export const HairlineButtons = () => (
  <div className='container button'>
    <Button type='danger' hairline>
      Danger Button
    </Button>
    <Button type='primary' hairline>
      Primary Button
    </Button>
  </div>
);

export const DisabledButtons = () => (
  <div className='container button'>
    <Button type='danger' disabled>
      Disabled Button
    </Button>
    <Button type='primary' disabled>
      Disabled Button
    </Button>
  </div>
);

export const LoadingButtons = () => (
  <div className='container button'>
    <Button type='danger' loading>
      Loading Default
    </Button>
    <Button type='info' loading loadingType='circular' loadingText='Loading...'>
      Loading Circular
    </Button>
    <Button type='primary' loading loadingType='spinner'>
      Loading Spinner
    </Button>
    <Button type='warning' loadingSize='80px' loading loadingType='spinner'>
      Loading Spinner
    </Button>
  </div>
);

export const ButtonShapes = () => (
  <div className='container button'>
    <Button type='info' round>
      Info Button
    </Button>
    <Button type='warning' square>
      Warning Button
    </Button>
  </div>
);

export const ButtonSize = () => (
  <div className='container button'>
    <Button type='info' size='large'>
      Info Button
    </Button>
    <Button type='info' size='small'>
      Info Button
    </Button>
    <Button type='warning' size='mini'>
      Warning Button
    </Button>
  </div>
);

export const ButtonColor = () => (
  <div className='container button'>
    <Button color='FFECB3'>Info Button</Button>
    <Button color='00796B' fontColor='#999'>
      Warning Button
    </Button>
    <Button color='linear-gradient(to right, #4bb0ff, #6149f6)'>
      Warning Button
    </Button>
  </div>
);

export const ButtonTags = () => (
  <div className='container button'>
    <Button tag='a'>A Tag</Button>
    <Button tag='button'>Button Tag</Button>
  </div>
);

export const ButtonNativeTypes = () => (
  <div className='container button'>
    <Button nativeType='button'>Button Type</Button>
    <Button nativeType='reset'>Reset Type</Button>
    <Button nativeType='submit'>Submit Type</Button>
  </div>
);

export const BlockButtons = () => (
  <div className='container column button'>
    <Button>Non Block Button</Button>
    <Button block>Block Button</Button>
  </div>
);

export const IconButton = () => (
  <div className='container button'>
    <Button icon='https://img.yzcdn.cn/vant/logo.png'>
      Custom Icon Button
    </Button>
  </div>
);

export const ButtonURL = () => (
  <div className='container column button'>
    <Button tag='a' url='https://github.com/mxdi9i7/vant-react'>
      Button with URL
    </Button>
    <Button tag='a' replace url='https://github.com/mxdi9i7/vant-react'>
      Open URL in Same Frame
    </Button>
    <Button tag='a' url='https://github.com/mxdi9i7/vant-react'>
      Open URL in New Tab
    </Button>
  </div>
);

export const ButtonAction = () => (
  <div className='container column button'>
    <Button click={(e) => alert(e.target)}>Handle Click</Button>
    <Button touchstart={(e) => alert(e.target)}>Handle Touchstart</Button>
    <Button click={(e) => alert(e.target)} type='primary' disabled>
      Disabled Button
    </Button>
    <Button
      type='info'
      loading
      loadingType='circular'
      loadingText='Loading Button'
      click={(e) => alert(e.target)}
    />
  </div>
);
