<template>
  <modal-cadastro></modal-cadastro>
</template>
<script lang="ts">
import Vue from "vue";
import ModalCadastro from "../components/ModalCadastro.vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "Home",
  components: {
    ModalCadastro,
  },
})
export default class Home extends Vue {}
</script>
<style></style>
