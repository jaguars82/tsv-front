<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Carcas',
  props: {
    msg: String
  },
  data () {
    return {
    }
  },
  beforeCreate () {
    this.axios({
      method: 'get',
      url: "http://test.teacher-info.net/vserver/server.php?queryMode=develop&table=razdeli&fields=id, name, real_name, access, default_content, navigation_mode, allow_mode_change&condition=`parent` = 'root' AND `hidden` = '0'&order=order",
      /*
      method: 'post',
      url: '/vserver/server.php',
      data: {
        table: 'razdeli',
        fields: ['id', 'name', 'real_name', 'access', 'default_content', 'navigation_mode', 'allow_mode_change'],
        condition: []
      }
      */
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
