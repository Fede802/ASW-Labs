const FancyButton = Vue.defineComponent({
    template:`<button :class="last_clicked ? 'bg-green-500' : 'bg-blue-500'" class = "my-14 px-4 py-2 text-white rounded"  v-on:click="clicked"><slot></slot>
            [x{{ multiplier }}] ({{ clicks }} click)
        </button>`,
    data(){
        return {
            clicks: 0
        }
    },   
    props: {
        id: String,
        multiplier: Number,
        last_clicked: Boolean
    },
    methods: {
        clicked() {
            this.clicks += 1;
            this.$emit('clicked-event', this.id, this.multiplier);
        }
    }
});
