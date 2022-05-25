import { createApp } from 'vue'
import App from './App.vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import Grid from './components/Grid.vue'
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";
import Feature from "./components/Feature.vue";
import Header from "./components/Header.vue";
import Restaurants from "./components/Restaurants.vue"
import MyArticles from "./components/MyArticles.vue"

 

const app = createApp(App)

app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);
app.component("Restaurants", Restaurants);
app.component("Header", Header);
app.component("MyArticles", MyArticles);


app.use(StoryblokVue, {
    accessToken: 'V2skYQlpnlNyHXKYQd9IMwtt',
    bridge: process.env.NODE_ENV !== "production", // optimises by excluding the bridge on production
    use: [apiPlugin],
  });



app.mount('#app')
