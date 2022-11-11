import { usePageActive } from "@/hooks/usePageActive";
import { Button, View } from "@tarojs/components";
import Taro, { useDidShow, useRouter } from "@tarojs/taro";
import { useEffect, useState } from "react";
import "./index.less";

export default function Index() {
  const [state, setState] = useState(false);

  useEffect(() => {
    global.test = () => {
      setState(true)
    }
  }, []);

  return (
    <View className="index">
      111
      <Button onClick={() => Taro.navigateTo({
        url: '/pages/test/index'
      })}>click</Button>
      {state ? <Dom1/> : <Dom2/>}
    </View>
  );
}

function Dom1() {
  const active = usePageActive();
  const router = useRouter();

  useEffect(() => {
    console.log(`test:>active`,active,router)
  }, [active,router]);

  return <View>active</View>
}
function Dom2() {
  return null
}
