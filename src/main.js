import vue from 'vue'
import App from './App.vue'
import router from './router/index'

new vue({
    render(h) {
        h(App)
    },
    router
}).$mount('#app')
// git clone ''    git add .   get commit -m   git push
//git remote add origin ''         git push -u origin master