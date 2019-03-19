<<template>
    <div>
        <div class="login-wrap">
            <p>HackPKU</p>
            <p>Hacking is the new sexy.</p>
            <button class="login-button" 
                open-type="getUserInfo"
                @getuserinfo="getUserInfoHandler">点击授权</button>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    getUserInfoHandler (e) {
      // TODO: 处理用户信息
      if (e.mp.detail.userInfo) {
        wx.switchTab({url: '/pages/index/main'})
      }
    }
  }
}
</script>

<style>
.login-wrap {
  position: relative;
  top: 210px;
  text-align: center;
}

.login-button {
  display: inline-block;
  width: auto;
  margin-top: 40px;
  /* padding: 8px 8px 8px 8px; */
}
</style>

