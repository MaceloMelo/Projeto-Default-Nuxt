<template>
  <ComponentHome />
</template>

<script lang="ts">
import Vue from "vue";
import ComponentHome from "../components/Home.vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "Index",
  components: {
    ComponentHome,
  },
})
export default class Index extends Vue {}
</script>
