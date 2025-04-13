import { defineComponent, ref } from "@vue-mini/core";

defineComponent(() => {
  const greeting = ref("欢迎使用 Vue Mini");
  const bg = ref(
    "bg-gradient-to-r from-[#456789] to-[#987654] h-[123.456px] text-[#fafafa] flex items-center justify-center",
  );

  const onLogin = () => {
    wx.login({
      success: (res) => {
        if (res.code) {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          console.log("res.code", res.code);

          wx.request({
            url: "http://localhost:3000/user",
            method: "POST",
            data: { code: res.code },
            dataType: "json",
            success: (res) => {
              console.log("后端登录返回的结果", res);
              // result = res.data.result
              // wx.setStorageSync('token', result.token)
            },
            fail: (res) => {
              console.log("res", res);
            },
          });
        }
      },
    });
  };
  return {
    greeting,
    bg,
    onLogin,
  };
});
