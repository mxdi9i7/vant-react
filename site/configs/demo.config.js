
import DemoLoadable from '../src/desktop/components/Loadable';

export default {
  button: DemoLoadable({ loader: () => import('../../src/components/Button/demo') }),
  cell: DemoLoadable({ loader: () => import('../../src/components/Button/demo') }),
  field: DemoLoadable({ loader: () => import('../../src/components/Button/demo') }),
  icons: DemoLoadable({ loader: () => import('../../src/components/Button/demo') }),
  navbar: DemoLoadable({ loader: () => import('../../src/components/Button/demo') }),
  popup: DemoLoadable({ loader: () => import('../../src/components/Button/demo') }),
  rate: DemoLoadable({ loader: () => import('../../src/components/Button/demo') }),
  search: DemoLoadable({ loader: () => import('../../src/components/Button/demo') }),
  tag: DemoLoadable({ loader: () => import('../../src/components/Button/demo') })
};
