import { Picker, Text, View } from "@tarojs/components";
import { useCallback, useState } from "react";

const selector = ['美国', '中国', '巴西', '日本'];
export default function PickerTest() {
  const [selectorChecked, setSelectorChecked] = useState('')

  const onChange = useCallback((e:any, value: any) => {
    console.log(`test:>`, value);
    setSelectorChecked(e.target.value);
  }, [])

  return (
    <View className="index">
        <Text>地区选择器</Text>
            <View>
              <Picker mode='selector' range={selector} onChange={onChange}>
                <View className='picker'>
                  当前选择：{selectorChecked}
                </View>
              </Picker>
            </View>
    </View>
  );
}
