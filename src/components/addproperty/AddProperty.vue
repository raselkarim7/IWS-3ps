<template>
    <div class="p-3">
        <h3 class="py-2">Add Property</h3>
        <div class="add-property px-5">
            <div class="px-5"> 
            <form @submit.prevent="onSubmit">
            
                <div  class="form-row">
                    <div v-for="feature in features" :key="feature.name" class="form-group px-5  mb-4 col-sm-6">

                        <div v-if="feature.type==='number'"> 
                            <label :for="feature.name">{{feature.description}} </label>
                            <input 
                                :name="feature.name"
                                type="number" class="form-control" :id="feature.name" 
                                v-model="feature.value" :placeholder="`Enter ${feature.name}`"
                                 min="0" required
                            >
                            <span class="text-danger" v-if="feature.value < 0">Value can't be empty</span>
                        </div>
                        <div v-if="feature.type==='dropdown'"> 
                            {{ feature.description }} 
                            <select v-model="feature.value" class="form-control" required>
                                <option disabled value="">Please select one</option>
                                <option v-for="(option, index) in featuresKeyValue[feature.name]" 
                                    :key="index"   v-bind:value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                        <div v-if="feature.type==='date'"> 
                            <label :for="feature.name">{{feature.description}} </label>
                            <input 
                                :name="feature.name"
                                type="date" class="form-control" :id="feature.name" 
                                v-model="feature.value" :placeholder="`Enter ${feature.name}`" 
                                required 
                            />
                        </div>
                    </div>
                </div>
                
                <button type="submit" class="ml-5  btn btn-primary text-right">Submit</button>
            </form> 
            </div>
        </div> 
    </div>
</template>

<script>
import _ from 'lodash';
import features from '../features';
import featuresKeyValue from '../featuresKeyValue';
import pythonMapValue from '../pythonMapValue';
console.log('python map value === ', pythonMapValue);
// console.log('featuresKeyValue === ', featuresKeyValue, featuresKeyValue['MSSubClass']);
export default {
    name: 'AddProperty',
    data() {
        return {
            optKey: 0,
            features: features,
            featuresKeyValue: featuresKeyValue, 
            pythonMapValue: pythonMapValue,
            LotFrontage: '555',
        }
    }, 
    methods: {
        onSubmit() {
            //console.log('on Submit called.', this.$vnode );
            const formvalues = {};
            //const formValuesPlainArray = [];
            for (let i = 0; i < this.features.length; i++) {
                formvalues[this.features[i].name] = this.features[i].value
                //formValuesPlainArray[i] = isNaN(this.features[i].value) ? this.features[i].value : parseInt( this.features[i].value)
            }
            //console.log('======', this.pythonMapValue['MSZoning'] );
            //console.log(Object.prototype.hasOwnProperty.call( this.pythonMapValue, 'MSZoning'))
            //console.log(formValuesPlainArray);
            // alert(JSON.stringify(this.features));
            const finalValues = {};
            _.map(formvalues, (fv, key)  => {
                 //console.log(key, fv)
                if (Object.prototype.hasOwnProperty.call( this.pythonMapValue, key)) {
                    if (Object.prototype.hasOwnProperty.call( this.pythonMapValue[key], fv)) {
                        finalValues[key] = this.pythonMapValue[key][fv];
                    } else {
                        finalValues[key] = fv;
                    }
                 } else {
                     finalValues[key] = fv;
                 }
                });
            console.log('FORMvalues : ', formvalues);
            console.log('FinalValues --->', finalValues, _.size(finalValues));
            


            const FinalOutput = [];
            let i = 0;
            _.map(finalValues, fv => {
                   // console.log(fv);
                    FinalOutput[i] = isNaN(fv) ? 3 : parseInt( fv)
                    i++;
            });

            console.log('Final Output ===> ', FinalOutput);

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
