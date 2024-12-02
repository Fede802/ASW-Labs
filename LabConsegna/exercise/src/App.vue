<script setup>
import axios from 'axios';
import AdvancedMinimalOptionApiTable from './minimal-options-api/AdvancedTable.vue';
import AdvancedAccessibleOptionsApiTable from './accessible-options-api/AdvancedTable.vue';
//Todo
import MinimalCompositionApiTable from './minimal-composition-api/Table.vue';

import AccessibleCompositionApiTable from './accessible-composition-api/Table.vue';
</script>

<template>
    <AdvancedMinimalOptionApiTable />
    <AdvancedAccessibleOptionsApiTable />

    <MinimalCompositionApiTable />
    <AccessibleCompositionApiTable />
</template>
