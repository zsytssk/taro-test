import { Button, View } from "@tarojs/components";
import { useEffect, useState } from "react";

export default function Test() {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true)
  }, []);

  return (
    <View>
      <Button>click</Button>
    </View>
  );
}
