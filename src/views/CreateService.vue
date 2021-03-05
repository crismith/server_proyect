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
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Service Name</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="" placeholder="Service Name">
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
                  <input type="number" class="form-control" id="" placeholder="Service Name">
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
                  <input type="text" class="form-control" id="" placeholder="Service Endpoint*">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Service Type</label>
                <div class="col-sm-8">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>GET</option>
                    <option>POST</option>
                    <option>PATCH</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Request Timeout</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="" placeholder="Request Timeout">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">HTTP Headers</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="" placeholder="HTTP Headers">
                </div>
              </div>

               <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Expected response body</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="" placeholder="Expected response body">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Expected response status code</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="" placeholder="Expected response status code">
                </div>
              </div>

              <div class="form-group row">
                <label for="checkFollow" class="col-sm-4 col-form-label text-left pl-5">Follow redirects</label>
                <div class="col-sm-1">
                  <input type="checkbox" class="form-check-input" id="checkFollow">
                </div>
              </div>

              <div class="form-group row">
                <label for="securitySSL" class="col-sm-4 col-form-label text-left pl-5">Verify SSL</label>
                <div class="col-sm-1">
                  <input type="checkbox" class="form-check-input" id="securitySSL">
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
                  <input type="text" class="form-control" id="" placeholder="Service Endpoint*">
                </div>
              </div>


              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Request Timeout</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="" placeholder="Request Timeout">
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
                  <input type="checkbox" class="form-check-input" id="">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Service Type</label>
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
                  <input type="number" class="form-control" id="" placeholder="Service Name">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Continuously send notifications</label>
                <div class="col-sm-1">
                  <input type="checkbox" class="form-check-input" id="">
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
        typeService: "http"
      }
    },
    methods: {
      typeServiceChange(event) {
        this.typeService = event.target.value;
      }
    },
    computed: {
      typeServiceSelect() {
        return this.typeService === "http";
      }
    }
  }
</script>

<style>

</style>