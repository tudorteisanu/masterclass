const app = new Vue({
    el : "#app",
    data : {
        counter : 0,
        form : {}
    },

    methods : {
       addCount(value) {
           if (value === -1 && this.counter === 0) {
               return
           }
            this.counter+=value    
       },
    
async  submit(){
    console.log('form');
        const response=await fetch("https://mail.testways.online",
         {method:"POST", headers :{
             "Content-type":"application/json"
         },
         body: JSON.stringify(this.form)
        })
    }
    },


})