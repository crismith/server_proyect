<template>
  <div>
    <div>
      <div class="card" v-for="(container, index) in containers" :key="index">
        <div class="card-body">
          <h5 class="card-title text-left">
            <router-link :to="{ path: '/services/'+index}">
              {{ container.name }}
            </router-link>
          </h5>
          
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column justify-content-center">
              <strong>
                321 ms
              </strong>
              <span class="mt-1">
                Latency last 24h
              </span>
            </div>

            <div class="d-flex flex-column justify-content-center">
              <strong>
                321 ms
              </strong>
              <span class="mt-1">
                Latency last week
              </span>
            </div>
          </div>
          <div>
            <ve-line :data="chartData"></ve-line>
            Panel de chart
          </div>
          <div>
            <span class="badge badge-success">OFFLINE</span>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    }
  }
</script>

<style>

</style>