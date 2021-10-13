$('.my-paroller').paroller();


var vm = new Vue({
    el: '#tablas',
    data () {
        return {
            tabla18Oct: tabla18,
            tabla19Oct: tabla19,
            tabla20Oct: tabla20,
            tabla21Oct: tabla21,
            tabla22Oct: tabla22,
            tablaActividades: tablaAct
        }
    },
    methods: {
        async updateTablas () {
            const url = 'https://firebasestorage.googleapis.com/v0/b/voces2021-53ac9.appspot.com/o/tablas.json?alt=media'
            const res = await axios.get(url)
            const tablas = res.data
            this.tabla18Oct= tablas.tabla18
            this.tabla19Oct= tablas.tabla19
            this.tabla20Oct= tablas.tabla20
            this.tabla21Oct= tablas.tabla21
            this.tabla22Oct= tablas.tabla22
        }
    },
    mounted () {
        this.updateTablas()
        
            
    }

})

