<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <b-button class="float-right">Button</b-button>
        <p></p>
      </div>
      <div class="col-sm-12">
        <b-table
          :bordered="bordered"
          :hover="hover"
          :fixed="fixed"
          :head-variant="headVariant"
          :no-border-collapse="noCollapse"
          :items="items"
          :fields="fields"
        >
          <template #cell(actions)="row">
            <b-icon-pencil @click="action(row.item, row.index, $event.target)"></b-icon-pencil>
            <b-icon-bar-chart-line @click="action(row.item, row.index, $event.target)" ></b-icon-bar-chart-line>
            <b-icon-trash @click="action(row.item, row.index, $event.target)" ></b-icon-trash>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          {
            key: "Name",
            label: "Name",
          },
          {
            key: "Status",
            label: "Status",
          },
          {
            key: "Failures 24h",
            label: "Failures 24h",
          },
          { 
            key: "Actions",
            label: "Actions",
          }
        ],
        items: [
          { Name: 'Servicio 1', Status: 'Offline', 'Failures 24h': 0 },
          { Name: 'Servicio 1', Status: 'Offline', 'Failures 24h': 0 },
          { Name: 'Servicio 1', Status: 'Offline', 'Failures 24h': 0 },
          { Name: 'Servicio 1', Status: 'Offline', 'Failures 24h': 0 },
          { Name: 'Servicio 1', Status: 'Offline', 'Failures 24h': 0 },
        ],
        bordered: true,
        hover: false,
        fixed: true,
        headVariant: 'Light',
        noCollapse: true
      }
    },
    methods: {
      action(item, index, $event){
        console.log('item',item)
        console.log('index',index)
        console.log('$event',$event)
      }
    }
  }
</script>