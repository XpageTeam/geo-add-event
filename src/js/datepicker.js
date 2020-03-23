import $ from "jquery"

require("jquery-ui/ui/widgets/datepicker.js");

if (!window.BX){
	window.BX = {};

	BX.message = function(lang){
		return "RU"
	}
}

document.addEventListener("DOMContentLoaded", e => {
	if (BX.message('SITE_LANG') == 'RU')
		require("jquery-ui/ui/i18n/datepicker-ru.js");
	else
		require("jquery-ui/ui/i18n/datepicker-en-GB.js");
})

document.addEventListener("VUELoaded", () => {
	$(".date-input").datepicker({
		language: BX.message('SITE_LANG') == 'RU' ? 'ru' : "en",
		dateFormat: "dd.mm.yy",
		changeMonth: true,
		changeYear: true,
		onSelect(dateText, inst){
			
			// $(".date-input").val(dateText).trigger("change");

			const evt = document.createEvent("HTMLEvents");

			evt.initEvent('input', true, true)
			inst.input[0].dispatchEvent(evt);

			$(".date-input").datepicker("hide");
		},
	});
});