import { View } from '@tarojs/components';
import classNames from 'classnames';
import { useState } from 'react';
import { Modal } from '../Modal';

import styles from './index.module.less';

export function Picker() {
  const [visible, setVisible] = useState(false);
  return <Modal className={classNames(styles.picker)} visible={visible} onClose={() => setVisible(false)} position={"bottom"}>
    <View className="title">请选择可取餐时间</View>
  </Modal>;
}

