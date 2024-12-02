<script setup>
import axios from 'axios';
import MinimalOptionApiTable from './minimal-options-api/Table.vue';
import AccessibleOptionsApiTable from './accessible-options-api/Table.vue';
//Todo
import MinimalCompositionApiTable from './minimal-composition-api/Table.vue';

import AccessibleCompositionApiTable from './accessible-composition-api/Table.vue';
import Test from './Test.vue';
</script>

<template>
    <Test />
    <MinimalOptionApiTable />
    <AccessibleOptionsApiTable />

    <MinimalCompositionApiTable />
    <AccessibleCompositionApiTable />
</template>
