<template>
    <div>
        {{ msg }}
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "SlotsAdd",
    props: {
        msg: String
    }
}
</script>

<!-- <template>
    <div>
      <h1>My Component</h1>
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </template> -->