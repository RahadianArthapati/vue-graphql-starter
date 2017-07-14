<template>
  <div class="post">
          <md-card md-with-hover>
          <!--<img :src='post.imageUrl' v-bind:style='image'>
          <div>{{ post.description }}</div>-->
          <md-card-media md-ratio="1:1">
            <md-image :md-src="post.imageUrl"></md-image>
          </md-card-media>
          <md-card-content style="color: #42b983;">
                {{post.description}}
          </md-card-content>
          </md-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      image: {
        'min-width': '60%',
        'max-width': '60%'
      }
    }),
    props: {
      post: {
        type: Object,
        default: function () {
          return { description: '', imageUrl: '' }
        }
      },
    },
  }
</script>
<style scoped>
.title{
  color: #42b983;
}
.post{
  width: 200px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 60px;

}
</style>
