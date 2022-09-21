import { SwiperTest } from "@/demo/swiperTest";
import { ModalManager } from "@/wui/Modal";
import { View } from "@tarojs/components";
import "./index.less";

export default function Index() {

  return (
    <View className="index">
      <SwiperTest/>
      {/* <PickerTest/> */}
      <ModalManager/>
    </View>
  );
}
