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

document.addEventListener("DOMContentLoaded", () => {
	$(".date-input").datepicker({
		language: BX.message('SITE_LANG') == 'RU' ? 'ru' : "en",
		dateFormat: "dd.mm.yy",
		changeMonth: true,
		changeYear: true,
		onSelect(dateText, inst){
			$(".date-input").val(dateText).trigger("change");

			$(".date-input").datepicker("hide");
		},
	});
});