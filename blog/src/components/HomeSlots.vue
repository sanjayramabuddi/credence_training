<template>
    <div>
        <h1>Slots in Vue Js</h1>
        <SlotsAdd msg="Look Below"/>
        <SlotsAdd><h1>I'm rendering using slots</h1></SlotsAdd>
        <SlotsAdd><button>Rendered</button></SlotsAdd>
    </div>
</template>
<script>
import SlotsAdd from './SlotsAdd.vue';
export default {
    name: "HomeSlots",
    components: {
        SlotsAdd
    }
}
</script>

<!-- <div>
    <my-component>
      <template v-slot:header>
        <p>This is the header content</p>
      </template>
      <template v-slot:body>
        <p>This is the body content</p>
      </template>
      <template v-slot:footer>
        <p>This is the footer content</p>
      </template>
    </my-component>
  </div>
</template> -->