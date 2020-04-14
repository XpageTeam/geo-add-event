export default {
	props: {
		citiesList: {
			type: Array,
			default: []
		},
		newCityLink: {
			type: String,
			default: ""
		},
		curCityId: {
			type: Number,
			default: 0
		}
	},
	data: () => ({
		citySearchInput: ""
	}),
	methods: {
		showCityPopup(){
			console.log(123);
			$.fancybox.open({
				src: "#city"
			});
		},
		selectCity(city){
			if (city.id == this.curCityId)
				return;

			location.href = city.href;
		}
	},
	computed: {
		cities(){
			return this.citiesList.filter(city => ~city.name.toLowerCase().indexOf(this.citySearchInput.toLowerCase()));
		},
		curCity(){
			return this.citiesList.filter(city => city.id == this.curCityId)[0];
		}
	},
	template: '\
		<div class="city-select">\
			<div @click="showCityPopup" class="city-select__current">{{ curCity.name }}</div>\
			<div class="city-select__popup">\
				<div id="city" class="city-popup">\
					<div class="city-popup__title">Выбрать город</div>\
					<div class="city-popup__content">\
						<div class="city-popup__content-search">\
							<div class="city-search">\
								<div class="city-search__input">\
									<div class="default-input">\
										<input v-model="citySearchInput" type="search" placeholder="Поиск" class="default-input__input"/>\
									</div>\
								</div>\
								<div class="city-search__btn">\
									<a :href="newCityLink" class="default-btn">Открыть новый город</a>\
								</div>\
							</div>\
						</div>\
						<div class="city-popup__content-list">\
							<ul class="cp-list">\
								<li \
									v-for="(city, key) in cities" \
									:key="key" \
									class="cp-list__item" \
									:class="{\'cp-list__item--active\': city.id == curCityId, \'cp-list__item--marked\': city.marked}"\
									@click="selectCity(city)"\
								>\
									{{ city.name }}\
								</li>\
								<li сlass="cp-list__no-results" v-if="!cities.length">Поиск не дал результатов</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>\
	'
}