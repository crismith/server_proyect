<template>
  <section class="section-detail-service pt-3 pb-3">
    <div class="row column-detail-service ml-2 mr-2">
      <div class="col-sm-12 mb-3 column-card ">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center text-left mb-3">
              <span class="badge badge-success">OFFLINE</span>
              <h5 class="card-title text-left m-0">
                <strong>
                  Test Service
                </strong>
              </h5>
            </div>

            <div class="data-service d-flex align-items-center ">
              <div class="d-flex flex-column">
                <span class="number">
                  323 ms
                </span>
                <span class="mt-3 first-title">
                  Average response last 24 hours
                </span>
              </div>

              <div class="d-flex flex-column">
                <span class="number">
                  323 ms
                </span>
                <span class="mt-3 first-title">
                  Average response last 7 days
                </span>
              </div>

              <div class="d-flex flex-column">
                <span class="number">
                  100.00 %
                </span>
                <span class="mt-3 first-title">
                  Uptime last 24 hours
                </span>
              </div>

              <div class="d-flex flex-column">
                <span class="number">
                  99.89 %
                </span>
                <span class="mt-3 first-title">
                  Uptime last 7 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 mb-3 column-card ">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center text-left mb-2">
              <h5 class="card-title text-left m-0">
                <strong>
                  Timeframe
                </strong>
              </h5>
            </div>

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

      <div class="col-sm-12 mb-3 column-card ">
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
      </div>

      <div class="col-sm-12 mb-3 column-card ">
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
      </div>

      <div class="col-sm-12 column-card">
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
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ServiceDetail'
  }
</script>

<style lang="scss" scoped>
  .section-detail-service{
    .column-detail-service{
      .column-card{
        padding: 0;
        .card{
          .card-body{
            padding: .8rem;
            .data-service{
              .flex-column{
                .number{
                  font-size: 15px;
                }
                .first-title{
                  font-size: 11px;
                }
              }
            }
          }
        }
      }
    }
  }

</style>