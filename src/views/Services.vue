<template>
  <section class="container section-services pt-3">
    <div class="row row-services">
      <div class="column-services col-sm-12 d-block text-right mb-3">
        <router-link class="btn btn-primary" to="/services/create"
          >Create</router-link
        >
      </div>
      <div class="column-services col-sm-12 container-table-services">
        <table class="table-service table table-bordered table-sm">
          <thead class="head-table">
            <tr class="tr-head">
              <th class="th-head">Name</th>
              <th class="th-head">Status</th>
              <th class="th-head">Failures 24h</th>
              <th class="th-head">Actions</th>
            </tr>
          </thead>
          <tbody class="body-table">
            <tr
              class="row-table-service"
              v-for="(item, index) in items"
              :key="index"
            >
              <td class="name-table">
                <span class="name">
                  {{ item.Name }}
                </span>
              </td>
              <td class="status-table">
                <span class="badge badge-success">
                  {{ item.Status }}
                </span>
              </td>
              <td class="hour-table">
                <span class="hour">
                  {{ item.Failures }}
                </span>
              </td>
              <td class="actions-table">
                <svg
                  @click="editService"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-2 icon-action bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  />
                </svg>
                <svg
                  @click="viewService"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-2 icon-action bi bi-bar-chart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
                  />
                </svg>

                <svg
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  @click="deleteService"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="icon-delete icon-action bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container-pagination">
      <div class="pagination-services">
        <div class="pagination-select mr-3">
          <p class="">Items per page</p>
          <div class="">
            <select
              @change="servicesCount($event)"
              class="form-control"
              name=""
              id=""
            >
              <option value="3">5</option>
              <option value="10" selected>10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        <div class="pagination-numbers mr-3">
          <p class="m-0">
            <span>
              1 -
            </span>
            <span>
              3
            </span>
            <span>
              of 14
            </span>
          </p>
        </div>
        <div class="pagination-buttons">
          <svg
            @click="firstPage"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="i-action-pagination mr-2 bi bi-arrow-bar-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
            />
          </svg>

          <svg
            @click="previousPage"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="i-action-pagination mr-2 bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>

          <svg
            @click="nextPage"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="i-action-pagination mr-2 bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>

          <svg
            @click="lastPage"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="i-action-pagination bi bi-arrow-bar-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// http://localhost:8081/api/services?pageSize=24&page=0
export default {
  name: "Services",
  data() {
    return {
      modalDelete: false,
      items: [
        { Name: "Test Service 545", Status: "Offline", Failures: 0 },
        { Name: "Servicio 1", Status: "Offline", Failures: 0 },
        { Name: "Servicio 1", Status: "Offline", Failures: 0 },
        { Name: "Servicio 1", Status: "Offline", Failures: 0 },
      ],
    };
  },
  methods: {
    editService() {
      this.$router.push({ path: "/services/edit/" + 1 });
    },
    viewService() {
      this.$router.push({ path: "/services/" + 1 });
    },
    deleteService() {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Delete Service",
          text:
            "Are you sure you want to delete service 'Linea 1'? This will also delete all failures and checkins for this service.",
          showCancelButton: true,
          confirmButtonText: "Ok",
          cancelButtonText: "Cancel",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your service has been deleted.",
              "success"
            );
          }
        });
    },
    servicesCount(event) {
      // http://localhost:8081/api/services?pageSize=5&page=2
      console.log(event.target.value);
    },
    firstPage() {
      // http://localhost:8081/api/services?pageSize=5&page=0
    },
    previousPage() {
      // http://localhost:8081/api/services?pageSize=5&page=1
    },
    nextPage() {
      // http://localhost:8081/api/services?pageSize=5&page=2
    },
    lastPage() {
      // http://localhost:8081/api/services?pageSize=5&page=2
    },
  },
};
</script>

<style lang="scss" scoped>
.section-services {
  padding-left: 7px;
  padding-right: 7px;
  .row-services {
    .column-services {
      .table-service {
        .head-table {
          .tr-head {
            .th-head {
              padding: 1em 0;
              font-size: 12px;
            }
          }
        }
        .body-table {
          .row-table-service {
            .name-table {
              .name {
                font-size: 14px;
              }
            }
            .hour-table {
              .hour {
                font-size: 14px;
              }
            }
            .actions-table {
              .icon-action {
                height: 22px;
                width: 22px;
                cursor: pointer;
              }
              .icon-delete {
                color: red;
              }
            }
          }
        }
      }
    }
  }
  .container-pagination {
    margin-bottom: 3em;
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    .pagination-services {
      display: flex;
      .pagination-select {
        p {
          font-size: 13px;
          color: rgb(129, 127, 127);
          margin: 0 0 5px 0;
        }
      }
      .pagination-numbers {
        p {
          color: rgb(129, 127, 127);
          font-size: 13px;
        }
      }
      .pagination-buttons {
        display: flex;
        .i-action-pagination {
          width: 25px;
          cursor: pointer;
          height: 25px;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .section-services {
    .container-pagination {
      justify-content: flex-end;
      padding-right: 2rem;
      .pagination-services {
        align-items: center;
        .pagination-select {
          display: flex;
          align-items: center;
          p {
            margin: 0 1em 0 0;
          }
        }
        .pagination-buttons {
          .i-action-pagination {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .section-services {
    .container-pagination {
      justify-content: center;
      width: 100%;
      padding: 0;
      .pagination-services {
        .pagination-buttons {
          .i-action-pagination {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .section-services {
    .row-services {
      .column-services {
        .table-service {
          .head-table {
            .tr-head {
              .th-head {
                font-size: 14px;
              }
            }
          }
          .body-table {
            .row-table-service {
              td {
                padding: 0.8em 0;
              }
              .name-table {
                .name {
                  font-size: 16px;
                }
              }
              .hour-table {
                .hour {
                  font-size: 16px;
                }
              }
              .actions-table {
                .icon-action {
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
