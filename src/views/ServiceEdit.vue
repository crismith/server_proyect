<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 mt-3 mb-3">
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
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>HTTP</option>
                    <option>ICMP Ping</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Check interval in seconds</label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="" placeholder="Check interval in seconds">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-sm-12 mb-3">
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
                  <input type="number" class="form-control" id="" placeholder="Service Name">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Follow redirects</label>
                <div class="col-sm-1">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                </div>
              </div>

              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-left pl-5">Verify SSL</label>
                <div class="col-sm-1">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-sm-12 ">
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
      <button class="btn btn-primary float">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
      </button>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'ServiceEdit'
  }
</script>

<style>

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	color:#FFF;
	border-radius:50px;
	text-align:center;
}

.my-float{
	margin-top:22px;
}
</style>