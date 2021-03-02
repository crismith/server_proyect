<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="card" >
          <div class="card-header">
            <h1>Service Info</h1>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Service Name</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="" placeholder="Service Name">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Service Type</label>
                <div class="col-sm-8">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>HTTP</option>
                    <option>ICMP Ping</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Check interval in seconds</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="" placeholder="Service Name">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="card" >
          <div class="card-header">
            <h1>Request Details</h1>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Service Endpoint</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="" placeholder="Service Endpoint*">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Service Type</label>
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
                <label for="" class="col-sm-4 col-form-label">Request Timeout</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="" placeholder="Service Name">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">HTTP Headers</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="" placeholder="HTTP Headers">
                </div>
              </div>

               <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Expected response body</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="" placeholder="Expected response body">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Expected response status code</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="" placeholder="Service Name">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Follow redirects</label>
                <div class="col-sm-1">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Verify SSL</label>
                <div class="col-sm-1">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="card" >
          <div class="card-header">
            <h1>Notification Options</h1>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Enable notifications</label>
                <div class="col-sm-1">
                  <input type="checkbox" class="form-check-input" id="">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Service Type</label>
                <div class="col-sm-8">
                  <select class="form-control">
                    <option>Global</option>
                    <option>E-Mail</option>
                    <option>Telegram Notifier</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Notify after failures</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="" placeholder="Service Name">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">Continuously send notifications</label>
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
    name: 'ServiceEdit'
  }
</script>

<style>

</style>