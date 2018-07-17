var app =  new Vue({
    el: '#root',
    data:{
        name:'Eddie',
        age:27,
        x: 0,
        y: 0,
    },
    methods:{
        add:function(inc){
            this.age += inc;
        },
        subtract:function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});