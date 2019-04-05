<template>
    <div class="p-3">
        <h3 class="py-2">Add Property</h3>
        <div class="add-property px-5">
            <div class="px-5"> 
            <form @submit.prevent="onSubmit">
            
                <div  class="form-row">
                    <div v-for="feature in features" :key="feature.name" class="form-group px-5  mb-4 col-sm-6">
                        <label :for="feature.name">{{feature.description}} </label>
                        <input 
                            :name="feature.name"
                            @change="handleChange"
                            type="text" class="form-control" :id="feature.name" 
                            v-model="feature.value" :placeholder="`Enter ${feature.name}`"
                        >
                    </div>
                </div>
                
                <button type="submit" class="ml-5  btn btn-primary text-right">Submit</button>
            </form> 
            </div>
        </div> 
    </div>
</template>

<script>
import featuresJSON from './features';

export default {
    name: 'AddProperty',
    data() {
        return {
            features: featuresJSON
        }
    }, 
    methods: {
        onSubmit() {
            //console.log('on Submit called.', this.features );
            const formvalues = {};
            for (let i = 0; i < this.features.length; i++) {
                formvalues[this.features[i].name] = this.features[i].value
            }
            console.log(formvalues);
            // alert(JSON.stringify(this.features));
        },
        handleChange(event) {
            // console.log('Inside handle change, ', event, event.target.value, event.target.name);
        }
    }

}
</script>

<style>
.add-property {
    text-align: left;
}
</style>
