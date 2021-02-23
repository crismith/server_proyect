<template>
  <div>
    <div>
      <div class="card" v-for="(container, index) in containers" :key="index">
        <div class="card-body">
          <h1>
            {{ container.name }}
          </h1>
          <div>
            <div>
              <p>
                321 ms
              </p>
              <span>
                Latency last 24h
              </span>
            </div>
            <div>
              <p>
                434 ms
              </p>
              <span>
                Latency last week
              </span>
            </div>
          </div>
          <div>
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
        ]
      }
    }
  }
</script>

<style>

</style>