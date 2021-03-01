<template>
  <div class="container">
    <form class="form-inline" v-on:submit.prevent>
      <div class="col-2"></div>
      <div class="col-8 col-sm-11">
        <input class="form-control w-75" type="search" placeholder="Search" aria-label="Search" @keyup.enter="fetchData" v-model="searchQuery">
        <button class="btn btn-outline-primary my-2 my-sm-0" type="button" v-on:click="fetchData()">Search</button>
      </div>
      <div class="col-2"></div>
    </form>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 mt-4 card-deck" v-for="video in pageOfVideos" :key="video.id.videoId">
        <div class="card">
          <img class="card-img-top" :src='video.snippet.thumbnails.high.url'>
          <div class="card-body">
            <a :href="'https://www.youtube.com/watch?v='+video.id.videoId"><h6 class="card-title">
              {{ video.snippet.title }}</h6></a>
            <p class="card-subtitle"><small>{{ video.snippet.channelTitle }}</small></p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <jw-pagination class="justify-content-center" :items="videos.items" :pageSize="9" @changePage="onChangePage"
                       :labels="customLabels"></jw-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/mockData.json';
import axios from 'axios';

const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>',
};
export default {
  data() {
    return {
      videos: sourceData,
      pageOfVideos: [],
      customLabels,
      searchQuery: '',
      apiKey: process.env.VUE_APP_API_KEY_1,
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfVideos = pageOfItems;
    },
    fetchData() {
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${this.apiKey}&q=${this.searchQuery}&type=video&maxResults=50`)
        // eslint-disable-next-line no-return-assign
        .then((response) => (this.videos = response.data))
        .then(() => axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${this.apiKey}&q=${this.searchQuery}&${this.videos.nextPageToken}&type=video&maxResults=50`))
        .then((response2) => {
          this.videos.items.push(...response2.data.items);
        });
    },
  },
};
</script>

<style scoped>
card {
  padding-left: 0;
  padding-right: 0;
}
</style>
