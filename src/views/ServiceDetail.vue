<template>
  <section class="section-detail-service pt-3 pb-3">
    <div class="row column-detail-service ml-2 mr-2">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center text-left mb-2">
            <span class="badge badge-success">OFFLINE</span>
            <h5 class="card-title text-left m-0">
              <strong>
                Test Service
              </strong>
            </h5>
          </div>

          <div class="d-flex align-items-center">
            <div class="d-flex flex-column">
              <span>
                323 ms
              </span>
              <span class="mt-1">
                Average response 
              </span>
              <span>
                last 24 hours
              </span>
            </div>
            <!-- <div class="">
              <p>
                323 ms
              </p>
              <span>
                Average response 
              </span>
              <span>
                last 7 days
              </span>
            </div>
            <div class="">
              <p>
                100.00 %
              </p>
              <span>
                Uptime last 
              </span>
              <span>
                24 hours
              </span>
            </div>
            <div class="">
              <p>
                100.00 %
              </p>
              <span>
                Uptime 
              </span>
              <span>
                last 7 days
              </span>
            </div> -->
          </div>
        </div>
      </div>

      <div class="card">
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

      <div class="card">
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

      <div class="card">
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

      <div class="card">
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
  </section>
</template>

<script>
  export default {
    name: 'ServiceDetail'
  }
</script>

<style>

</style>