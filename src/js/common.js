import $ from "jquery";
import Vue from "vue";

import citySelect from "./city-select.js";

window.jQuery = $;
window.$ = $;

Vue.component("city-select", citySelect);

require("./jquery.fancybox.js");

document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el: ".head__city"
	})
});