<template>
  <div>TEste</div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";
import EnumActions from "../assets/enum/EnumActions";
@Component({
  name: "ModalCadastro",
  components: {},
})
export default class ModalCadastro extends Vue {
  created() {
    //this.$store.dispatch(EnumActions.adicionarProduto);
  }
}
</script>
<style lang="scss"></style>
