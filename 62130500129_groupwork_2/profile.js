    const app = {
        data() {
            return {
                images : "https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80"
               , name : "Priyanut Buadum"
               , position : "Associate developer"
               ,article : "Article"
               ,n_article :"34"
               ,followers :"Followers"
               ,n_followers :"940"
               ,ratings : "Ratings"
               ,n_ratings:"9.9"
            }
        }

    }
    mountedApp = Vue.createApp(app).mount('#app')