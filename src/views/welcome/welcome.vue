<template>
  <div class="welcome">
    <h4>Welcome to V-try,thank you!</h4>
    <div class="login-box">
      <mt-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"/>
      <mt-field
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        type="password"/>
      <mt-button
        type="primary"
        @click="login">登录</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
  	return {
  		username: '',
  		password: ''
  	}
  },
  methods: {
  	login () { // 登录成功的操作
  		this.$toast({
  			message: '登录成功',
  			duration: 1000
  		})
  		this.$router.push({path: '/index'})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.welcome{
		background: #ebebeb;
		height: 100vh;
		padding: 1px 5px;
	}
	h4{
		text-align: center;
		height: 10vh;
		padding-top: 10vh
	}
	.login-box{
		margin-top: 10vh;
		text-align: center;
	}
	.login-box>.mint-button--primary{
		width: 90%;
		margin-top: 5vh;
	}
</style>
