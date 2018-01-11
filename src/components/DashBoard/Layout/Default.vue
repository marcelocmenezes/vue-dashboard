<template>
  <v-app id="inspire">
    
    <!-- Toolbar --> 
    <v-toolbar
      color="purple darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Dashboard Material</span>
      </v-toolbar-title>
      
      <v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 500px; min-width: 128px"
      ></v-text-field>
      
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </div>

    </v-toolbar>
    <!-- Toolbar -->

    <!-- Sidebar -->
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <!-- HeaderSideBar -->
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <!-- WrapSideBar -->
      <v-list dense>
        <v-divider />
        <v-list-tile v-for="item in items" :key="item.title" @click="$router.push(item.path)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <!-- Sidebar -->

    <router-view></router-view>

    
  </v-app>
</template>


<script>

import SideBarItems from './sidebar'

  export default {
    data: () => {
      return {
        drawer: null,
        items: SideBarItems
      }
    }    
  }
</script>