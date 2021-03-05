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

      <div class="col-sm-12 mb-3 column-card">
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
              <div class="container-input-time mb-2 mb-md-0">
                <input class="form-control input-time" type="datetime-local">
              </div>
              <div class="container-input-time mb-2 mb-md-0">
                <input class="form-control input-time" type="datetime-local">
              </div>
              <div class="container-input-time ">
                <select class="form-control input-time select-minutes">
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
              <apexchart type="area" height="400" :options="options" :series="series"></apexchart>

              <!-- <div class="m-1 text-center">
                <p class=" m-0">
                  No entries found for this timeframe
                </p>
              </div> -->
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
              <apexchart type="bar" height="400" :options="chartOptionsB" :series="seriesB"></apexchart>
              <!-- <div class="m-1 text-center">
                <p class="m-0">
                  No entries found for this timeframe
                </p>
              </div> -->
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
    name: 'ServiceDetail',
    data() {
      return{
        seriesB: [{
          name: 'series-2',
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        chartOptionsB: {
          chart: {
            height: 400,
            type: 'bar',
            events: {
              click: function(chart, w, e) {
                // console.log(chart, w, e)
              }
            },
            toolbar: {
              tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
              },
            },
          },
          // colors: colors,
          plotOptions: {
            bar: {
              borderRadius: 6,
              columnWidth: '45%',
              distributed: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: [
              ['John', 'Doe'],
              ['Joe', 'Smith'],
              ['Jake', 'Williams'],
              'Amber',
              ['Peter', 'Brown'],
              ['Mary', 'Evans'],
              ['David', 'Wilson'],
              ['Lily', 'Roberts'], 
            ],
            labels: {
              style: {
                // colors: colors,
                fontSize: '12px'
              }
            }
          }
        },
        series: [{
          name: 'series-1',
          data: [
            [
              "2018-11-08",
              99
            ],
            [
              "2018-11-09",
              208
            ],
            [
              "2018-11-10",
              30
            ],
            [
              "2018-11-11",
              35
            ],
            [
              "2018-11-12",
              30
            ]
          ]
        }],
        options: {
          chart: {
            type: 'area',
            stacked: false,
            height: 400,
            zoom: {
              type: 'x',
              enabled: false,
              autoScaleYaxis: false
            },
            toolbar: {
              tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
              },
            },
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          // title: {
          //   text: 'Stock Price Movement',
          //   align: 'left'
          // },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          yaxis: {
            labels: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0);
              },
            },
            // title: {
            //   text: 'Price'
            // },
          },
          xaxis: {
            type: 'datetime',
          },
          // tooltip: {
          //   shared: false,
          //   y: {
          //     formatter: function (val) {
          //       return (val / 1000000).toFixed(0)
          //     }
          //   }
          // }
        },
      };
    }
  }
</script>

<style lang="scss" scoped>
  .section-detail-service{
    .column-detail-service{
      .column-card{
        padding: 0;
        .card{
          .card-body{
            padding: 1rem .7rem;
            .data-service{
              width: 100%;
              .flex-column{
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

  @media (min-width: 768px) {
    .section-detail-service{
      .column-detail-service{
        .column-card{
          .card{
            .card-body{
              .filters-time{
                justify-content: space-around;
                .container-input-time{
                  width: 32%;
                  .input-time{
                    margin: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  
  @media (min-width: 1024px) {
    .section-detail-service{
      .column-detail-service{
        .column-card{
          .card{
            .card-body{
              .data-service{
                width: 100%;
                .flex-column{
                  width: 25%;
                  .number{
                    font-size: 16px;
                    font-weight: 900;
                  }
                  .first-title{
                    font-size: 13px;
                  }
                }
              }
              .filters-time{
                justify-content: space-evenly;
                .container-input-time{
                  width: 25%;
                  .input-time{
                    margin: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .section-detail-service{
      display: flex;
      justify-content: center;
      .column-detail-service{
        width: 80%;
        .column-card{
          .card{
            .card-body{
              .filters-time{
                justify-content: space-evenly;
                .container-input-time{
                  width: 25%;
                  .input-time{
                    margin: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }


</style>