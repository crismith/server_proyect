<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab title="General" disabled
              ><b-card-text>General</b-card-text></b-tab
            >
            <b-tab title="Import" active>
              <b-card-text>
                <div>
                  <h2>CSV Import</h2>
                  <div>
                    <label for="fileCSV" class="btn btn-primary label_photo">
                      Choose File
                      <input
                        @change="uploadFile"
                        accept=".csv"
                        ref="file"
                        style="display:none"
                        name="fileCSV"
                        id="fileCSV"
                        type="file"
                      />
                    </label>
                    <p v-if="nameFile" v-text="nameFile"></p>
                  </div>
                  <div class="col-sm-12">
                    <b-button class="float-right" disabled> Upload </b-button>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Notifiers" disabled
              ><b-card-text>Notifiers</b-card-text></b-tab
            >
            <b-tab title="E-Mail">
              <b-card-text>
                <h2>
                  E-Mail
                </h2>
                <form>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Enabled</label
                    >
                    <div class="col-sm-8">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Host</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="text"
                        placeholder="Host*"
                        class="form-control"
                        id="staticEmail"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Port</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="number"
                        placeholder="Port*"
                        class="form-control"
                        id="staticEmail"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >From</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="text"
                        placeholder="From*"
                        class="form-control"
                        id="staticEmail"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Password</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="password"
                        placeholder="Password*"
                        class="form-control"
                        id="staticEmail"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >To</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="text"
                        placeholder="To*"
                        class="form-control"
                        id="staticEmail"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Subject</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="text"
                        placeholder="Subject*"
                        class="form-control"
                        id="staticEmail"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Up template</label
                    >
                    <div class="col-sm-8">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword" class="col-sm-4 col-form-label"
                      >Down template</label
                    >
                    <div class="col-sm-8">
                      <textarea class="form-control" id="" rows="3"></textarea>
                    </div>
                  </div>
                </form>
                <div>
                  <button class="btn btn-primary">Test up message</button>
                  <button class="btn btn-primary">Test down message</button>
                  <button class="btn btn-primary">Save</button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Telegram Notifier">
              <b-card-text>
                <form>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Enabled</label
                    >
                    <div class="col-sm-8">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Api Token</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="text"
                        placeholder="Api Token*"
                        class="form-control"
                        id="staticEmail"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Channel</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="number"
                        placeholder="Channel*"
                        class="form-control"
                        id="staticEmail"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >Up template</label
                    >
                    <div class="col-sm-8">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword" class="col-sm-4 col-form-label"
                      >Down template</label
                    >
                    <div class="col-sm-8">
                      <textarea class="form-control" id="" rows="3"></textarea>
                    </div>
                  </div>
                </form>
                <div>
                  <button class="btn btn-primary">Test up message</button>
                  <button class="btn btn-primary">Test down message</button>
                  <button class="btn btn-primary">Save</button>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameFile: null,
    };
  },
  methods: {
    uploadFile(e) {
      const file = this.$refs.file.files[0];
      this.nameFile = file.name;
      console.log("file", file);
      console.log("e", e);
    },
  },
};
</script>

<style></style>
