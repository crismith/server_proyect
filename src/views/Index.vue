<template>
  <section class="section-dashboard">
    <div class="container-services">
      <div class="card-service card mb-3 ml-md-2 mr-md-2" v-for="(container, index) in containers" :key="index">
        <div class="card-body body-service" @click="openService(container.id)">
          <strong class="card-title text-left d-block name-service">
            <router-link class="url-service" :to="{ path: '/services/'+index}">
              {{ container.name }}
            </router-link>
          </strong>
          
          <div class="d-flex justify-content-around info-service mt-2 pb-2">
            <div class="data-hour-week d-flex flex-column justify-content-center">
              <strong class="number">
                321 ms
              </strong>
              <span class="mt-1 title">
                Latency last 24h
              </span>
            </div>

            <div class="data-hour-week d-flex flex-column justify-content-center">
              <strong class="number">
                321 ms
              </strong>
              <span class="mt-1 title">
                Latency last week
              </span>
            </div>
          </div>
          <div class="service-chart">
            <!-- Panel de chart -->
            <!-- <apexchart width="500" type="bar" :options="options" :series="series"></apexchart> -->
            <apexchart type="area" height="200" :options="options" :series="series"></apexchart>
          </div>
          <div class="d-block text-right">
            <span class="badge badge-success" v-if="index / 2 == 0">ONLINE</span>
            <span class="badge badge-danger" v-else>OFFLINE</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container-pagination">
      <div class="pagination-services">
        <div class="pagination-select mr-3">
          <p class="">Items per page</p>
          <div class="">
            <select @change="getServicesCount($event)" class="form-control" name="" id="">
              <option value="3">3</option>
              <option value="12" selected>12</option>
              <option value="24">24</option>
              <option value="48">48</option>
              <option value="96">96</option>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="i-action-pagination mr-2 bi bi-arrow-bar-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="i-action-pagination mr-2 bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
          </svg>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="i-action-pagination mr-2 bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="i-action-pagination bi bi-arrow-bar-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// https://apexcharts.com/docs/vue-charts/
// https://apexcharts.com/vue-chart-demos/line-charts/zoomable-timeseries/
  export default {
    data() {
      return {
        containers: [
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
          {
            "id": "649145ad-bae6-4e30-9792-4a24caab2af5",
            "name": "Servicio 1",
            "type": "ICMP_PING",
            "intervalInSeconds": 30,
            "endpoint": "4444",
            "httpMethod": "GET",
            "requestTimeoutInSeconds": 10,
            "httpHeaders": "",
            "httpBody": "",
            "expectedHttpResponseBody": "",
            "expectedHttpStatusCode": 200,
            "followRedirects": true,
            "verifySsl": true,
            "enableNotifications": true,
            "notifyAfterNumberOfFailures": 2,
            "continuouslySendNotifications": false,
            "notifiers": [
                "global"
            ],
            "createdAt": "2021-02-09T19:16:59.075439Z",
            "updatedAt": "2021-02-09T19:16:59.07544Z"
          },
        ],
        series: [{
          name: 'series-1',
          data: [
            [
              "2018-11-08",
              99
            ],
            [
              "2018-11-09",
              208
            ],
            [
              "2018-11-10",
              30
            ],
            [
              "2018-11-11",
              35
            ],
            [
              "2018-11-12",
              30
            ]
          ]
        }],
        options: {
          chart: {
            type: 'area',
            stacked: false,
            height: 200,
            zoom: {
              type: 'x',
              enabled: false,
              autoScaleYaxis: false
            },
            toolbar: {
              tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
              },
            },
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          // title: {
          //   text: 'Stock Price Movement',
          //   align: 'left'
          // },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          yaxis: {
            labels: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0);
              },
            },
            // title: {
            //   text: 'Price'
            // },
          },
          xaxis: {
            type: 'datetime',
          },
          // tooltip: {
          //   shared: false,
          //   y: {
          //     formatter: function (val) {
          //       return (val / 1000000).toFixed(0)
          //     }
          //   }
          // }
        },
      }
    },
    mounted() {
      // this.getServices();
    },
    methods: {
      getServices() {
        const token = "Basic YWRtaW46YWRtaW4="; 
        const options = {
          method: 'GET',
          headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': token
          },
        };
        console.log('token',token)
        this.axios.get("http://localhost:8081/api/services", options)
          .then((response) => {
            console.log(response.data)
          })
      },
      getServicesCount(event){
        console.log(event.target.value)
      },
      openService(id){
        this.$router.push({ path: `/services/${id}`});
      }
    }
  }
</script>

<style lang="scss" scoped>

  .section-dashboard{
    padding: 1em 0 0 0;
    margin: 0;
    width: 100%;
    .container-services{
      padding: 0 1em;
      .card-service{
        box-shadow: 0 2px 1px -1px rgb(0, 0, 0,  .20), 0 1px 1px 0 rgb(0, 0, 0, .14), 0 1px 3px 0 rgb(0, 0, 0, .12);
        .body-service{
          cursor: pointer;
          .name-service{
            margin: 0;
            .url-service{
              color: #000;
              cursor: pointer;
              font-size: 20px;
            }
          }
          .info-service{
            border-bottom: 1px solid #000;
            .data-hour-week{
              .number{
                font-size: 14px;
              }
              .title{
                font-size: 12px;
              }
            }
          }
          .service-chart{
            height: 200px;
          }
        }
      }
    }
    .container-pagination{
      margin-bottom: 3em;
      display: flex;
      justify-content: flex-end;
      padding-right: 1rem; 
      .pagination-services{
        display: flex;
        .pagination-select{
          p{
            font-size: 13px;
            color: rgb(129, 127, 127);
            margin: 0 0 5px 0;
          }
        }
        .pagination-numbers{
          p{
            color: rgb(129, 127, 127);
            font-size: 13px;
          }
        }
        .pagination-buttons{
          display: flex;
          .i-action-pagination{
            width: 25px;
            cursor: pointer;
            height: 25px;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .section-dashboard{
      padding: 1em 0;
      .container-services{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        .card-service{
          width: 47%;
        }
      }
      .container-pagination{
        justify-content: flex-end;
        padding-right: 2rem; 
        .pagination-services{
          align-items: center;
          .pagination-select{
            display: flex;
            align-items: center;
            p{
              margin: 0 1em 0 0;
            }
          }
          .pagination-buttons{
            .i-action-pagination{
              width: 28px;
              height: 28px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .section-dashboard{
      .container-services{
        .card-service{
          width: 31%;
          .body-service{
            padding: 1rem;
          }
        }
      }
      .container-pagination{
        justify-content: center;
        width: 100%;
        padding: 0;
        .pagination-services{
          .pagination-buttons{
            .i-action-pagination{
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
  }

  
  @media (min-width: 1200px) {
    .section-dashboard{
      .container-services{
        .card-service{
          width: 24%;
        }
      }
      
    }
  }


</style>>
