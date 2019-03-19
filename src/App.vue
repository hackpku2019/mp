<script>
export default {
  created () {
    // 检查用户是否授权
    wx.getUserInfo({
      withCredentials: false,
      success: res => {
        // TODO: 处理用户信息
      },
      fail: () => {
        wx.reLaunch({ url: '/pages/login/main' })
      }
    })
  }
}
</script>

<style>

</style>

