var app = new Vue({
    el: '#root',
    data: {
      i: 0,
      listaemail: []
    },
    methods:{
      lista_email: function () {
        for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
              this.email = response.data.response;
              let email_ins = this.email;
              this.listaemail.push(email_ins);
            })
          }
          console.log(this.listaemail);
      }
    }
});
