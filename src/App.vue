<template>
	<div class="app_container">
		<transition mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>

export default {
	
}
</script>

<style lang="less" scoped>
.v-enter,.v-leave-to{
  opacity: 0;
  transform: translateX(150px);
}
.v-enter-active,.v-leave-active{
  transition: all 0.8s ease;
}
</style>
