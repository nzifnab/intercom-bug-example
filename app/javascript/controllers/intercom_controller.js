import { Controller } from "@hotwired/stimulus"
import Intercom from "@intercom/messenger-js-sdk"

export default class extends Controller {
  static values = {
    // appId: String,
    // apiBase: String,
    settings: Object
  }

  connect() {
    document.addEventListener("turbo:submit-end", (event) => {
      console.log("submit-end");
      // window.turboFormSubmissionFailed = !event.detail.success;

      // if (window.turboFormSubmissionFailed) {
      //   document.dispatchEvent(new Event('turbo:visit'));
      //   document.dispatchEvent(new Event('turbo:before-cache'));
      // }
    });

    document.addEventListener("turbo:render", () => {
      console.log("turbo:render");
      // if (window.turboFormSubmissionFailed) {
      //   document.dispatchEvent(new Event('turbo:load'));
      //   window.turboFormSubmissionFailed = false;
      // }
    });

    document.addEventListener("turbo:load", (e) => {
      console.log("turbo:load");
    })

    document.addEventListener("turbo:visit", (e) => {
      console.log("turbo:visit");
    })

    Intercom.default(this.settingsValue);
  }
}
