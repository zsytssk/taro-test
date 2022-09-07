import { Picker } from "@/wui/Picker";
import { Text, View } from "@tarojs/components";
import { useCallback, useState } from "react";

// const selector = ['美国', '中国', '巴西', '日本'];
// export default function PickerTest() {
//   const [selectorChecked, setSelectorChecked] = useState('')

//   const onChange = useCallback((e:any, value: any) => {
//     console.log(`test:>`, value);
//     setSelectorChecked(e.target.value);
//   }, [])

//   return (
//     <View className="index">
//         <Text>地区选择器</Text>
//             <View>
//               <Picker mode='selector' range={selector} onChange={onChange}>
//                 <View className='picker'>
//                   当前选择：{selectorChecked}
//                 </View>
//               </Picker>
//             </View>
//     </View>
//   );
// }
const selector = ['美国', '中国', '巴西', '日本'];
export default function PickerTest() {
  const [visible, setVisible] = useState(true)
  const [selectorChecked, setSelectorChecked] = useState('')

  const onChange = useCallback((e:any, value: any) => {
    console.log(`test:>`, value);
    setSelectorChecked(e.target.value);
  }, [])

  console.log(`test:>selectorChecked`, selectorChecked);
  return (
    <View className="index">
        <Text>地区选择器</Text>
            <View>
              <Picker title="选择" visible={visible} value={selectorChecked}  onChange={onChange} data={selector.map(item => ({
                label:item,value: item
              }))} onClose={() => setVisible(false)}/>
            </View>
    </View>
  );
}
