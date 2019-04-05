<template>
    <div class="">
        <h1 class="display-4 mb-3">Property Price Prediction</h1>
        <div class="d-flex justify-content-around">
            <button 
                class="btn btn-success" :disabled="addProperty"
                @click="addBtnSelect">
                Add Property
            </button>
            <button 
                class="btn btn-success" :disabled="viewProperty"
                @click="viewBtnSelect">
                View Property
            </button>
        </div>
        <div> 
            <AddProperty v-if="addProperty" />

            <ViewProperty v-if="viewProperty" />

        </div>
    </div>
</template>

<script>
import featuresKeyValue from './featuresKeyValue'; 
// console.log('Property.vue, featuresKeyValue === ===', featuresKeyValue);
import AddProperty from  './addproperty//AddProperty'; // './AddProperty';
import ViewProperty from './ViewProperty';
export default {
    name: 'property',
    components: {
        AddProperty,
        ViewProperty
    },
    data() {
        return {
            addProperty: true,
            viewProperty: false
        }
    },
    methods: {
        addBtnSelect() {
            this.addProperty = true;
            this.viewProperty = false;
        },
        viewBtnSelect() {
            this.addProperty = false;
            this.viewProperty = true;
        }
    }
}
</script>

<style>

h3 {
    font-weight: 400;
}

</style>
