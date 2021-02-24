<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="card" style="width: 100%;">
          <div class="card-body">
            <span class="badge badge-success">OFFLINE</span>
            <h5 class="card-title">
              Test Service
            </h5>
            <div class="d-flex">
              <div class="m-1">
                <p>
                  323 ms
                </p>
                <span>
                  Average response last 24 hours
                </span>
              </div>
              <div class="m-1">
                <p>
                  323 ms
                </p>
                <span>
                  Average response last 7 days
                </span>
              </div>
              <div class="m-1">
                <p>
                  100.00 %
                </p>
                <span>
                  Uptime last 24 hours
                </span>
              </div>
              <div class="m-1">
                <p>
                  100.00 %
                </p>
                <span>
                  Uptime last 7 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="card" style="width: 100%;">
          <div class="card-body">
            <h5 class="card-title">
              Timeframe
            </h5>
            <div class="">
              <div class="m-1">
                <input  
                  class="form-control" 
                  type="datetime-local">
              </div>
              <div class="m-1">
                <input  
                  class="form-control" 
                  type="datetime-local">
              </div>
              <div class="m-1">
                <select class="form-control">
                  <option>1 minute</option>
                  <option>5 minute</option>
                  <option selected>15 minute</option>
                  <option>30 minute</option>
                  <option>1 hour</option>
                  <option>3 hour</option>
                </select>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="card" style="width: 100%;">
          <div class="card-body">
            <h5 class="card-title">
              Service latency
            </h5>
            <div class="d-flex">
              <div class="m-1">
                <h4>
                  No entries found for this timeframe
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="card" style="width: 100%;">
          <div class="card-body">
            <h5 class="card-title">
              Service failures by day
            </h5>
            <div class="d-flex">
              <div class="m-1">
                <h4>
                  No entries found for this timeframe
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="card" style="width: 100%;">
          <div class="card-body">
            <h5 class="card-title">
              Failures
            </h5>
            <div class="d-flex">
              <div class="m-1">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Reason</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                    </tr>
                  </tbody>
                </table>
                <h4>
                  No entries found for this timeframe
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServiceDetail'
  }
</script>

<style>

</style>