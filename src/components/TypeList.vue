<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TypeList',
    data() {
        return {
            store,
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.apiBaseUrl}/types`)
                .then((response) => {
                    console.log(response);
                    this.types = response.data.results;
                })

                .catch((error) => {
                    console.log(error);
                });

        }
    },
    created() {
        this.getTypes();
    }


}
</script>
<template>
    <select class="form-select" v-if="types.length > 0">
        <option v-for="type in types"> {{type.name}}</option>

    </select>
</template>