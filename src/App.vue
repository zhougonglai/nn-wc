<template lang="pug">
#app
	keep-alive(v-if="$route.meta.keepAlive")
		router-view
	router-view(v-else)
</template>
