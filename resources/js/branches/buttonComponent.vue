<template>
    <p>This is a button Illustration</p>
    <button @click="count++">{{ count }}</button>
</template>
<script>

export default {
    data(){
        return{
            count: 56
        }
    }
}
</script>
