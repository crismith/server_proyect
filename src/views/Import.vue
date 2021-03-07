<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col-sm-12">
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab title="General" disabled>
              <b-card-text>General</b-card-text>
            </b-tab>
            <b-tab title="Import" active>
              <b-card-text>
                <div class="text-left">
                  <h4>CSV Import</h4>
                  <div>
                    <label for=": null" class="btn btn-secondary label_photo">
                      Choose File
                      <input
                        @change="uploadFile"
                        accept=".csv"
                        ref="file"
                        style="display:none"
                        name=": null"
                        id=": null"
                        type="file"
                      />
                    </label>
                    <p v-if="nameFile" v-text="nameFile"></p>
                  </div>
                  <div class="col-sm-12">
                    <b-button class="float-right btn btn-success" :disabled="!enabledButton" @click="sendCSV">Upload</b-button>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Notifiers" disabled>
              <b-card-text>Notifiers</b-card-text>
            </b-tab>
            <b-tab title="E-Mail">
              <b-card-text>
                <h4 class="text-left">
                  E-Mail
                </h4>
                <form>
                  <div class="form-group row">
                    <label for="Enabled" class="col-sm-4 col-form-label text-left pl-4">Enabled</label>
                    <div class="col-sm-1">
                      <input v-model="email.enabled" id="Enabled" class="form-check-input" type="checkbox" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Host" class="col-sm-4 col-form-label text-left pl-4">Host</label>
                    <div class="col-sm-8">
                      <input
                        v-model="email.host"
                        type="text"
                        placeholder="Host*"
                        class="form-control"
                        id="Host" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Port" class="col-sm-4 col-form-label text-left pl-4">Port</label>
                    <div class="col-sm-8">
                      <input
                        v-model="email.port"
                        type="number"
                        placeholder="Port*"
                        class="form-control"
                        id="Port"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="From" class="col-sm-4 col-form-label text-left pl-4">From</label>
                    <div class="col-sm-8">
                      <input
                        v-model="email.from"
                        type="text"
                        placeholder="From*"
                        class="form-control"
                        id="From"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Password" class="col-sm-4 col-form-label text-left pl-4">Password</label>
                    <div class="col-sm-8">
                      <input
                        v-model="email.password"
                        type="password"
                        placeholder="Password*"
                        class="form-control"
                        id="Password"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="To" class="col-sm-4 col-form-label text-left pl-4">To</label>
                    <div class="col-sm-8">
                      <input
                        v-model="email.to"
                        type="text"
                        placeholder="To*"
                        class="form-control"
                        id="To"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Subject" class="col-sm-4 col-form-label text-left pl-4">Subject</label>
                    <div class="col-sm-8">
                      <input
                        v-model="email.subject"
                        type="text"
                        placeholder="Subject*"
                        class="form-control"
                        id="Subject"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Up" class="col-sm-4 col-form-label text-left pl-4">Up Up</label>
                    <div class="col-sm-8">
                      <textarea
                        v-model="email.SERVICE_UP_TEMPLATE"
                        class="form-control"
                        id="Up"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Down" class="col-sm-4 col-form-label text-left pl-4">Down template</label>
                    <div class="col-sm-8">
                      <textarea 
                        v-model="email.SERVICE_DOWN_TEMPLATE"
                        class="form-control" 
                        id="Down" 
                        rows="3">
                      </textarea>
                    </div>
                  </div>
                </form>
                
                <div class="d-flex justify-content-end">
                  <button :disabled="!enabledButtonTelegram" class="btn btn-primary mr-1">
                    Test up message
                  </button>
                  <button :disabled="!enabledButtonTelegram" class="btn btn-primary mr-1">
                    Test down message
                  </button>
                  <button :disabled="!enabledButtonTelegram" class="btn btn-primary">Save</button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Telegram Notifier">
              <b-card-text>
                <h4 class="text-left">
                  Telegram Notifier
                </h4>
                <form>
                  <div class="form-group row">
                    <label for="Telegram" class="col-sm-4 col-form-label pl-3 text-left">Enabled</label>
                    <div class="col-sm-1">
                      <input
                        v-model="telegram.enabled"
                        class="form-check-input"
                        type="checkbox"
                        id="Telegram"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Token" class="col-sm-4 col-form-label pl-3 text-left">Api Token</label>
                    <div class="col-sm-8">
                      <input
                        v-model="telegram.apiToken"
                        type="text"
                        placeholder="Api Token*"
                        class="form-control"
                        id="Token"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Channel" class="col-sm-4 col-form-label pl-3 text-left">Channel</label>
                    <div class="col-sm-8">
                      <input
                        v-model="telegram.channel"
                        type="number"
                        placeholder="Channel*"
                        class="form-control"
                        id="Channel"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="UpT" class="col-sm-4 col-form-label pl-3 text-left">Up template</label>
                    <div class="col-sm-8">
                      <textarea
                        v-model="telegram.SERVICE_UP_TEMPLATE"
                        class="form-control"
                        id="UpT"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="DownT" class="col-sm-4 col-form-label pl-3 text-left">Down template</label>
                    <div class="col-sm-8">
                      <textarea 
                        class="form-control" 
                        id="DownT" 
                        v-model="telegram.SERVICE_DOWN_TEMPLATE"
                        rows="3">
                      </textarea>
                    </div>
                  </div>
                </form>
                <div class="d-flex justify-content-end">
                  <button :disabled="!enabledButtonTelegram" class="btn btn-primary mr-2">Test up message</button>
                  <button :disabled="!enabledButtonTelegram" class="btn btn-primary mr-2">Test down message</button>
                  <button :disabled="!enabledButtonTelegram" class="btn btn-primary">Save</button>
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
  name: "Import",
  data() {
    return {
      nameFile: null,
      fileCSV: null,
      email: {
        SERVICE_DOWN_TEMPLATE: "",
        SERVICE_UP_TEMPLATE: "",
        enabled: false,
        from: "",
        host: "",
        password: "",
        port: null,
        subject: "",
        to: ""
      },
      telegram: {
        SERVICE_DOWN_TEMPLATE: "",
        SERVICE_UP_TEMPLATE: "",
        apiToken: "",
        channel: "",
        enabled: false
      }
    };
  },
  methods: {
    uploadFile(e) {
      const file = this.$refs.file.files[0];
      this.nameFile = file.name;
      this.fileCSV = e.target.files[0];
    },
    sendCSV(){
      // const file = this.fileCSV
      // axios.post('http://localhost:8081/api/import', file, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      // })

      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Import result",
          text:
            "Service imported!",
          confirmButtonText: "Ok",
        })
    },
    telegramNotifier() {

      // http://localhost:8081/api/notifiers/telegram
    },
    templateEmailUp() {
      // http://localhost:8081/api/notifiers/email/test/up
    },
    templateEmailDown() {
      // http://localhost:8081/api/notifiers/email/test/down
    },
    templateTelegramUp() {
      // http://localhost:8081/api/notifiers/telegram/test/up

    },
    templateTelegramDown() {
      // http://localhost:8081/api/notifiers/telegram/test/down
    },
  },
  computed: {
    enabledButton() {
      return this.fileCSV !== null
    },
    enabledButtonEmail() {
      const { SERVICE_DOWN_TEMPLATE, SERVICE_UP_TEMPLATE, apiToken, channel, enabled, from, host, password, port, to, subject } = this.email;
      let validation = SERVICE_DOWN_TEMPLATE != "" &&
                       SERVICE_UP_TEMPLATE != "" &&
                       apiToken != "" &&
                       channel != "" &&
                       from != "" &&
                       host != "" &&
                       password != "" &&
                       port != "" &&
                       to != "" &&
                       subject != "" &&
                       enabled != false;
      return validation;
    },
    enabledButtonTelegram() {
      const { SERVICE_DOWN_TEMPLATE, SERVICE_UP_TEMPLATE, apiToken, channel, enabled } = this.telegram;
      let validation = SERVICE_DOWN_TEMPLATE != "" &&
                       SERVICE_UP_TEMPLATE != "" &&
                       apiToken != "" &&
                       channel != "" &&
                       enabled != false;
      return validation;
    }

  }
};
</script>

<style></style>
