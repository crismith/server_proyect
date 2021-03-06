<template>
  <div class="container pt-3  ">
    <div class="row">
      <div class="col-sm-12 mb-3">
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title text-left d-block">
              <strong>
                Service Info
              </strong>
            </h5>
            <form>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Service Name*</label>
                <div class="col-sm-8">
                  <input type="text" v-model="service.name" class="form-control" id="" placeholder="Service Name*">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Service Type</label>
                <div class="col-sm-8">
                  <select class="form-control" @change="typeServiceChange($event)">
                    <option value="http" selected>HTTP</option>
                    <option value="icmp-ping">ICMP Ping</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Check interval in seconds</label>
                <div class="col-sm-8">
                  <input type="number" v-model="service.intervalInSeconds" class="form-control" id="" placeholder="Service Name">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-sm-12 mb-3" v-if="typeServiceSelect">
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title text-left d-block">
              <strong>
                Request Details
              </strong>
            </h5>
            <form>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Service Endpoint</label>
                <div class="col-sm-8">
                  <input type="text" v-model="service.endpoint" class="form-control" placeholder="Service EndpointXXS*">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">HTTP Method</label>
                <div class="col-sm-8">
                  <select class="form-control" @change="methodHttpChange($event)">
                    <option 
                      v-for="(method, index) in methodsHttp"
                      :selected="method.value === 'GET'"
                      :key="index" 
                      :value="method.value">
                      {{ method.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Request Timeout</label>
                <div class="col-sm-8">
                  <input type="number" v-model="service.requestTimeoutInSeconds" class="form-control" placeholder="Request Timeout">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">HTTP Headers</label>
                <div class="col-sm-8">
                  <input type="text" v-model="service.httpHeaders" class="form-control" placeholder="Content-Type:application/json;Authorization:Foo">
                </div>
              </div>

               <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Expected response body</label>
                <div class="col-sm-8">
                  <input type="text" v-model="service.httpBody" class="form-control" placeholder=".*monhttp.*">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Expected response status code</label>
                <div class="col-sm-8">
                  <input type="number" v-model="service.expectedHttpStatusCode" class="form-control" placeholder="Expected response status code">
                </div>
              </div>

              <div class="form-group row">
                <label for="checkFollow" class="col-sm-4 col-form-label text-left pl-5">Follow redirects</label>
                <div class="col-sm-1">
                  <input v-model="service.followRedirects" type="checkbox" class="form-check-input">
                </div>
              </div>

              <div class="form-group row">
                <label for="securitySSL" class="col-sm-4 col-form-label text-left pl-5">Verify SSL</label>
                <div class="col-sm-1">
                  <input v-model="service.verifySsl" type="checkbox" class="form-check-input">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

       <div class="col-sm-12 mb-3" v-else>
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title text-left d-block">
              <strong>
                Request Details
              </strong>
            </h5>
            <form>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Service Endpoint</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" v-model="service.endpoint" placeholder="Service Endpoint*">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Request Timeout</label>
                <div class="col-sm-8">
                  <input type="number" v-model="service.requestTimeoutInSeconds" class="form-control" placeholder="Request Timeout">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title text-left d-block">
              <strong>
                Notification Options
              </strong>
            </h5>
            <form>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Enable notifications</label>
                <div class="col-sm-1">
                  <input v-model="service.enableNotifications" type="checkbox" class="form-check-input">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Notifiers</label>
                <div class="col-sm-8">
                  <select class="form-control">
                    <option>Global</option>
                    <option>E-Mail</option>
                    <option>Telegram Notifier</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Notify after failures</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" v-model="service.notifyAfterNumberOfFailures" placeholder="Notify after failures">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Continuously send notifications</label>
                <div class="col-sm-1">
                  <input type="checkbox" class="form-check-input" v-model="service.continuouslySendNotifications">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div class="col-sm-12">
        <button class="btn btn-primary">
          <b-icon-soundwave ></b-icon-soundwave>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateService',
    data() {
      return {
        service: {
          name: "",
          typeService: "http",
          intervalInSeconds: 30,
          endpoint: "",
          httpMethod: "GET",
          requestTimeoutInSeconds: 10,
          httpHeaders: "",
          httpBody: "",
          expectedHttpStatusCode: 200,
          followRedirects: true,
          verifySsl: true,
          enableNotifications: true,
          notifiers: [],
          notifyAfterNumberOfFailures: 2,
          continuouslySendNotifications: true,
        },
        methodsHttp: [
          {name: 'GET', value: "GET"},
          {name: 'POST', value: "POST"},
          {name: 'PATCH', value: "PATCH"},
          {name: 'PUT', value: "PUT"},
          {name: 'DELETE', value: "DELETE"}
        ]
      }
    },
    methods: {
      typeServiceChange(event) {
        this.service.typeService = event.target.value;
      },
      methodHttpChange(event) {
        this.typeService = event.target.value;
      }
    },
    computed: {
      typeServiceSelect() {
        return this.service.typeService === "http";
      },
      isEmptyName() {
        return this.service.name !== "";
      },
      isEmptyIntervalInSeconds(){
        return this.service.intervalInSeconds !== null;
      },
      isEmptyEndpoint(){
        return this.service.endpoint !== "";
      },
      disabledButtonSave(){
        return this.isEmptyName && this.isEmptyIntervalInSeconds && this.isEmptyEndpoint
      }
    }
  }
</script>

<style scoped>
  input::placeholder{
    font-size: 14px;
  }

</style>