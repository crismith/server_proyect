<template>
  <section class="container section-services pt-3">
    <div class="row row-services">
      <div class="column-services col-sm-12 d-block text-right mb-3">
        <router-link class="btn btn-primary" to="/services/create">Create</router-link>
      </div>
      <div class="column-services col-sm-12 container-table-services">
        <table class="table-service table table-bordered  table-sm">
          <thead class="head-table">
            <tr class="tr-head">
              <th class="th-head">Name</th>
              <th class="th-head">Status</th>
              <th class="th-head">Failures 24h</th>
              <th class="th-head">Actions</th>
            </tr>
          </thead>
          <tbody class="body-table">
            <tr class="row-table-service" v-for="(item, index) in items" :key="index">
              <td class="name-table">
                <span class="name">
                  {{ item.Name }}
                </span>
              </td>
              <td class="status-table">
                <span class="badge badge-success">
                  {{ item.Status}}
                </span>
              </td>
              <td class="hour-table">
                <span class="hour">
                  {{ item.Failures }}
                </span>
              </td>
              <td class="actions-table">
                <svg @click="editService" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 icon-action bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
                <svg @click="viewService" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 icon-action bi bi-bar-chart" viewBox="0 0 16 16">
                  <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon-delete icon-action bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { Name: 'Test Service 545', Status: 'Offline', Failures: 0 },
          { Name: 'Servicio 1', Status: 'Offline', Failures: 0 },
          { Name: 'Servicio 1', Status: 'Offline', Failures: 0 },
          { Name: 'Servicio 1', Status: 'Offline', Failures: 0 },
        ]
      }
    },
    methods: {
      editService(){
        this.$router.push({ path: "/services/edit/"+1 });
      },
      viewService() {
        this.$router.push({ path: "/services/"+1 });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-services{
    padding-left:7px;
    padding-right: 7px;
    .row-services{
      .column-services{
        .table-service{
          .head-table{
            .tr-head{
              .th-head{
                padding: 1em 0;
                font-size: 12px;
              }
            }
          }
          .body-table{
            .row-table-service{
              .name-table{
                .name{
                  font-size: 14px;
                }
              }
              .hour-table{
                .hour{
                  font-size: 14px;
                }
              }
              .actions-table{
                .icon-action{
                  height: 22px;
                  width: 22px;
                }
                .icon-delete{
                  color: red;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .section-services{
      .row-services{
        .column-services{
          .table-service{
            .head-table{
              .tr-head{
                .th-head{
                  font-size: 14px;
                }
              }
            }
            .body-table{
              .row-table-service{
                td {
                  padding: .8em 0;
                }
                .name-table{
                  .name{
                    font-size: 16px;
                  }
                }
                .hour-table{
                  .hour{
                    font-size: 16px;
                  }
                }
                .actions-table{
                  .icon-action{
                    cursor: pointer;
                    height: 23px;
                    width: 23px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

</style>