<template>
  <v-app id="inspire">
    
    <top-navbar></top-navbar>
    
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-tooltip right>
            <v-btn icon large :href="source" target="_blank" slot="activator">
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
        </v-layout>
      </v-container>
    </v-content>
    
    <sidebar></sidebar>
    
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    
  </v-app>
</template>

<!--template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >


      <p>Conteudo da View</p>
    </v-navigation-drawer>
  </v-app>
</template-->


<script>

  import TopNavbar from './TopNavBar.vue'
  import Sidebar from './Sidebar/SideBar.vue'

  export default {
    components:{
      TopNavbar,
      Sidebar
    },

    data: () => ({
      drawer: null,
      items: [
        { icon: 'dashboard', text: 'Overview'},
        { icon: 'home', text: 'Imóveis' },
        { icon: 'person', text: 'Clientes' },
        { icon: 'assignment', text: 'Contratos' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'settings', text: 'Configurações' },
        { icon: 'help', text: 'Help' }
      ]
    }),
    props: {
      sources: String 
    }
  }
</script>