<template>
  <section class="section-detail-service pt-3 pb-3">
    <div class="row column-detail-service ml-2 mr-2">
      <div class="col-sm-12 mb-3 column-card ">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center text-left mb-3">
              <span class="badge badge-success">OFFLINE</span>
              <h6 class="card-title text-left m-0">
                <strong>
                  Test Service
                </strong>
              </h6>
            </div>

            <div class="data-service d-flex ">
              <div class="text-center flex-column">
                <span class="number">
                  323 ms
                </span>
                <p class="mb-0 mt-3  first-title">
                  Average response last 24 hours
                </p>
              </div>

              <div class="text-center flex-column">
                <span class="number">
                  323 ms
                </span>
                <p class="mb-0 mt-3  first-title">
                  Average response last 7 days
                </p>
              </div>

              <div class="text-center flex-column">
                <span class="number">
                  100.00%
                </span>
                <p class="mb-0 mt-3  first-title">
                  Uptime last 24 hours
                </p>
              </div>

              <div class="text-center flex-column">
                <span class="number">
                  99.89%
                </span>
                <p class="mb-0 mt-3  first-title">
                  Uptime last 7 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 mb-3 column-card ">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center text-left mb-2">
              <h6 class="card-title text-left m-0">
                <strong>
                  Timeframe
                </strong>
              </h6>
            </div>

            <div class="filters-time d-md-flex mt-md-3">
              <div class="container-input-time mb-3 mt-3 mb-md-0 mt-md-0 ml-md-3 mr-md-3">
                <input class="form-control input-time" type="datetime-local">
              </div>
              <div class="container-input-time mb-3 mt-3 mb-md-0 mt-md-0 ml-md-3 mr-md-3">
                <input class="form-control input-time" type="datetime-local">
              </div>
              <div class="container-input-time mb-3 mt-3 mb-md-0 mt-md-0 ml-md-3 mr-md-3">
                <select class="form-control input-time">
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
            <div class="d-flex align-items-center text-left mb-2">
              <h6 class="card-title text-left m-0">
                <strong>
                  Service latency
                </strong>
              </h6>
            </div>
            <div class="">
              <div class="m-1 text-center">
                <p class=" m-0">
                  No entries found for this timeframe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 mb-3 column-card ">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center text-left mb-2">
              <h6 class="card-title text-left m-0">
                <strong>
                  Service failures by day
                </strong>
              </h6>
            </div>
            <div class="">
              <div class="m-1 text-center">
                <p class="m-0">
                  No entries found for this timeframe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 column-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center text-left mb-2">
              <h6 class="card-title text-left m-0">
                <strong>
                  Failures
                </strong>
              </h6>
            </div>

            <div class="">
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
                <p class="text-center m-0">
                  No entries found for this timeframe
                </p>
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
    margin-bottom: 50em;
    .column-detail-service{
      .column-card{
        padding: 0;
        .card{
          .card-body{
            padding: 1rem .7rem;
            .data-service{
              width: 100%;
              .flex-column{
                // padding: 0 .2rem;
                width: 25%;
                .number{
                  font-size: 15px;
                }
                .first-title{
                  font-size: 10px;
                }
              }
            }
            .filters-time{
              .container-input-time{
                .input-time{
                  height: 50px;
                }
              }
            }
          }
        }
      }
    }
  }

</style>