<template lang="html">
    <article>
        <section>
            <articleSummary v-for="article in articlesData"
                :title="article.title"
                :subtitle="article.subtitle"
                :date="article.date"
                :article="article.article"
                :commentCount="article.comments.length"
                :tags="article.tags"
            />
        </section>
    </article>
</template>

<script>
import articleSummary from '../../components/ArticleSummary'
import data from '../../json/data.json'
export default {
  name: 'articles',
  data: function () {
    return {
        articlesData: [],
    }
  },
  mounted: function() {
      var dataJson = data;
      this.$data.articlesData = dataJson;
  },
  components: { articleSummary, }
}
</script>

<style lang="css">

</style>
