import PickerTest from "@/demo/pickerTest2";
import { ModalManager } from "@/wui/Modal";
import { View } from "@tarojs/components";
import "./index.less";

export default function Index() {

  return (
    <View className="index">
      <PickerTest/>
      <ModalManager/>
    </View>
  );
}
