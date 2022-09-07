import { View } from '@tarojs/components';
import classNames from 'classnames';
import { useEffect, useMemo, useRef } from 'react';

import { useModalListStore } from '.';

import './style.less';

export type Props = {
  children?: React.ReactNode | React.ReactNode[];
  visible?: boolean;
  onClose?: () => void;
  className?: string;
  position?: 'center' | 'bottom';
  clickMaskHide?: boolean;
};

export function Modal({
  className,
  visible,
  children,
  onClose,
  clickMaskHide = true,
  position = 'center',
}: Props) {
  const { addModal, removeModal } = useModalListStore();

  const onCloseRef = useRef<typeof onClose>();

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const Node = useMemo(() => {
    return (
      <View
        className={classNames({
          [className as string]: Boolean(className),
          'wui-modal-root': true,
        })}
      >
        <View
          className="wui-modal-mask"
          onClick={() => {
            clickMaskHide && onCloseRef.current?.();
          }}
        ></View>
        <View
          className={classNames({
            ['wui-modal-wrap']: true,
            [`wui-modal-center`]: position === 'center',
            [`wui-modal-bottom`]: position === 'bottom',
          })}
        >
          {children}
        </View>
      </View>
    );
  }, [children, className, clickMaskHide, position]);

  useEffect(() => {
    if (!Node) {
      return;
    }
    if (visible) {
      addModal(Node);
    } else {
      removeModal(Node);
    }
    return () => {
      removeModal(Node);
    };
  }, [addModal, removeModal, visible, Node]);

  return null;
}
