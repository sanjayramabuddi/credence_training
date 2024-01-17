<template>
    <div>
        <h2>Learning Filters</h2>
        <b>{{ name | uCase }}</b><br>
        <b>{{ amount | cConvert }}</b>
    </div>
</template>
<script>
export default {
    name: "FilterLearn",
    data() {
        return {
            name: "Sanjay Ramabuddi",
            amount: 1344
        }
    }
}
</script>