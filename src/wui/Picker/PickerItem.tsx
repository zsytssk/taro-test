import { View } from '@tarojs/components';
import classNames from 'classnames';

import styles from './index.module.less';

export function PickerItem() {
  return <View className={classNames(styles.picker)}></View>;
}
