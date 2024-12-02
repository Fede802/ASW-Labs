<script setup>
import axios from 'axios';
import BasicMinimalOptionApiTable from './minimal-options-api/BaseTable.vue';
import AdvancedMinimalOptionApiTable from './minimal-options-api/AdvancedTable.vue';
import BasicAccessibleOptionsApiTable from './accessible-options-api/BaseTable.vue';
import AdvancedAccessibleOptionsApiTable from './accessible-options-api/AdvancedTable.vue';
//Todo
import MinimalCompositionApiTable from './minimal-composition-api/Table.vue';

import AccessibleCompositionApiTable from './accessible-composition-api/Table.vue';
</script>

<template>
    <!-- <BasicMinimalOptionApiTable /> -->
    <AdvancedMinimalOptionApiTable />
    
    <!-- <BasicAccessibleOptionsApiTable /> -->
    <AdvancedAccessibleOptionsApiTable />

    <MinimalCompositionApiTable />
    <AccessibleCompositionApiTable />
</template>
