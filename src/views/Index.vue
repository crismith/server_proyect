<template>
  <section class="section-services">
    <div class="container-services">
      <div class="card-service card mb-3 ml-2 mr-2" v-for="(container, index) in containers" :key="index">
        <div class="card-body body-service">
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
            Panel de chart
          </div>
          <div class="d-block text-right">
            <span class="badge badge-success">OFFLINE</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VeLine from 'v-charts/lib/line.common'
  export default {
    components: { VeLine },
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
        chartData: {
          height: 200,
          columns: ['date', 'PV'],
          rows: [
            { 'date': '01-01', 'PV': 1231 },
            { 'date': '01-02', 'PV': 1223 },
            { 'date': '01-03', 'PV': 2123 },
            { 'date': '01-04', 'PV': 4123 },
            { 'date': '01-05', 'PV': 3123 },
            { 'date': '01-06', 'PV': 7123 }
          ]
        }
      }
    },
    mounted() {
      this.getServices();
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-services{
    .container-services{
      .card-service{
        box-shadow: 0 2px 1px -1px rgb(0, 0, 0,  .20), 0 1px 1px 0 rgb(0, 0, 0, .14), 0 1px 3px 0 rgb(0, 0, 0, .12);
        .body-service{
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
            border: 1px solid;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .section-services{
      padding: 1em 0;
      .container-services{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        .card-service{
          width: 47%;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .section-services{
      .container-services{
        .card-service{
          width: 31%;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .section-services{
      .container-services{
        .card-service{
          width: 24%;
          .body-service{
            padding: 1rem;
          }
        }
      }
    }
  }

</style>>
