import Vue from 'vue'
import App from './App.vue'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// Paste your endpoint for the Simple API here.
// Info: https://github.com/graphcool-examples/vue-apollo-instagram-example#2-create-graphql-api-with-graphcool
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj4u2zy07cee10132wzpqcu4t' });

const apolloClient = new ApolloClient({
  networkInterface,
})

// Install the vue plugin
Vue.use(VueApollo)
Vue.use(VueMaterial)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Start the app
new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
