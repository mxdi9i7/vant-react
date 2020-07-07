import * as React from 'react';
import Layout from '../content';

import { II18nProps } from './types';

export default class CNWrapper extends React.Component<II18nProps> {
  componentDidMount() {
    const { changeI18N, i18n } = this.props.pass;
    if (i18n !== 'en-US') {
      changeI18N('en-US');
    }
  }

  render() {
    const { children, pass } = this.props;
    return <Layout {...pass}>{children}</Layout>;
  }
}
