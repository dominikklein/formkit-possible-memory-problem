<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';

const fields = [];
for (let i = 0; i < 100; i++) {
  fields.push({
    $formkit: 'text',
    name: `testing_example_${i}`,
    label: `Testing Example ${i}`,
    key: `testing_example_${i}`,
    validation: 'required',
  });
}

const testSchema = [...fields];
</script>

<template>
  <p>Testing</p>
  <HelloWorld msg="Example" />
  <router-link id="home" to="/">Go to Home</router-link>
  <FormKit type="form">
    <FormKitSchema :schema="testSchema" :data="{}" />
  </FormKit>
</template>
