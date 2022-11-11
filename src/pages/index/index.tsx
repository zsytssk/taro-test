import { Button, View } from "@tarojs/components";
import { useDidShow } from "@tarojs/taro";
import { useEffect, useState } from "react";
import "./index.less";

export default function Index() {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true)
  }, []);

  return (
    <View className="index">
      <Button>click</Button>
      {state ? <Dom1/> : <Dom2/>}
    </View>
  );
}

function Dom1() {
  useDidShow(() => {
    console.log(`useDidShow:Dom1`)
  })
  return null
}
function Dom2() {
  useDidShow(() => {
    console.log(`useDidShow:Dom2`)
  })
  return null
}
