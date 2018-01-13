<template>
  <v-content>
    <v-container fluid>
      <v-layout row class="mb-2">
        <h1>Clientes</h1>
        <v-spacer></v-spacer>
        <v-text-field
              append-icon="search"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
      </v-layout>

      <v-layout row>
          <v-data-table
            v-bind:headers="headers"
            v-bind:items="items"
            v-bind:search="search"
            rows-per-page-text="Clientes por página:"
            no-results-text="Nenhum resultado encontrado"
            no-data-text=""
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.nome }}</td>
              <td>{{ props.item.rg }}</td>
              <td>{{ props.item.cpf }}</td>
              <td>{{ props.item.idade }}</td>
            </template>
          </v-data-table>
        
      </v-layout>
    </v-container>
    
    <v-btn fab bottom right color="pink" dark fixed @click.stop="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>
    
    <v-dialog v-model="dialog" max-width="870px">
      <v-card>
        <v-card-title>
          <span class="headline">Cadastro de Usuários</span>
          <v-spacer></v-spacer>
          <v-btn icon><v-icon>close</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <v-stepper>
            <v-stepper-header>
              <v-stepper-step step="1" :complete="e1 > 1">Dados Pessoais</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2">Dados Financeiros</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>

              <v-stepper-content step="1">
                <v-card  class="mb-5" height="200px">

                </v-card>
                <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
                
              </v-stepper-content>
              
              <v-stepper-content step="2">
                <v-card color="secondary" class="mb-5" height="200px">

                </v-card>
                <v-btn color="primary" @click.stop="dialog = !dialog">Salvar</v-btn>
                
              </v-stepper-content>
              
            </v-stepper-items>

          </v-stepper>
        </v-card-text>

      </v-card>
    </v-dialog>

  </v-content>
  
</template>

<script>
export default {
  
  data: () => {
    return {
      e1: 0,
      dialog: false,
      search: '',
      headers: [
        { text: 'ID', value: 'id', align: 'left' },
        { text: 'Nome', value: 'nome', align: 'left' },
        { text: 'RG', value: 'rg', align: 'left' },
        { text: 'CPF', value: 'cpf', align: 'left' },
        { text: 'Idade', value: 'idade', align: 'left' }
      ],
      items: [
        { id: 1, nome: 'Marcelo Menezes', rg: '0000000', cpf: '000.000.000-00', idade: 27 },
        { id: 2, nome: 'Alana Camila Pinheiro de Souza', rg: '0000000', cpf: '000.000.000-00', idade: 23 }
      ]
    }
  }
  
}
</script>
