var Home = {
	template: `
		<section>
			<div class="banner-template">
				<div class="banner-rep">
					<img class="banner-relative" :src="bannerImg" :alt="titleH1" />
					<div class="sologan-cherry">
						<h1>{{ titleH1 }}</h1>
						<h2>{{ titleH2 }}</h2>
					</div>
				</div>
				<div class="cloud">
					<div class="bg-pink" id="mainnav">
						<div class="container">
							<div class="tab-cherry">
								<div>
									<a href="#popular">
										<div class="tabs-popular tabs-popular1">
											<img class="icon-camera" src="/en/area/cherry-blossom/img/icon-flower.png" alt="camera" />
											<p>{{ bannerSpot }}</p>
											<i class="fas fa-sort-down"></i>
										</div>
									</a>
								</div>
								<div>
									<a href="#search">
										<div class="tabs-popular tabs-popular2">
											<img class="icon-bus" src="/en/area/cherry-blossom/img/icon-bus-new.png" alt="bus" />
											<p>{{ bannerBus }}</p>
											<i class="fas fa-sort-down"></i>
										</div>
									</a>
								</div>
							</div>
							<div class="intro-cherry">
								<p>{{ bannerTxT }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="location-cherry">
				<div class="cont-location-cherry">
					<div class="container">
						<div class="intro-cherry">
							<h2>Cherry blooming forecast in 2021</h2>
							<div class="tabs-cherry">
								<div id="maplistNavi">
									<ul>
										<li id="tabmap" class="active">Map</li>
										<li id="tablist">List</li>
									</ul> 
								</div> 
								<div id="maplistContents">
									<div id="listPage">
										<table class="sakuraplace-tbl">
											<tr>
												<td class="nodatacell">&nbsp;</td>
												<th class="bg-yellow-bold" colspan="2">2021</th>
												<th class="bg-pink-bold" colspan="2">2020</th>
											</tr>
											<tr class="area-bg">
												<th class="bg-white">Area</th>
												<th class="bg-yellow-semibold">Date of first bloom</th>
												<th class="bg-yellow-semibold">Date of full bloom</th>
												<th class="bg-pink-semibold">Date of first bloom</th>
												<th class="bg-pink-semibold">Date of full bloom</th>
											</tr>
											<tr v-for="item in items" :key="item.id">

												<td class="bg-yellow-normal" align="left">{{ item.firstbloom2021 }}</td>
												<td class="bg-yellow-normal" align="left">{{ item.fullbloom2021 }}</td>
												<td class="bg-pink-normal" align="left">{{ item.firstbloom2020 }}</td>
												<td class="bg-pink-normal" align="left">{{ item.fullbloom2020 }}</td>
											</tr>											
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="popular-cherry" id="popular">
				<div class="bg-inner-popular">
					<div class="bg-cherry-popular">
						<div class="container cont-popular-cherry">
							<div class="bg-opacity-cherry">
								<div class="intro-popular">
									<h2>Popular Cherry Blossom Spots</h2>
									<p>
										Night cherry trees, weeping cherry trees, mountain cherry trees... Introducing well known spots of all sorts of cherry blossoms throughout the country. Listed are the blooming information of the cherry trees and
										how to access these spots.
									</p>
								</div>
								<div id="spotList">
									<ul class="nav nav-tabs">
										<li v-for="(item, index) in items.home" :class="{'active': index === 0}" class="nav-item" :key="item.keyName">
											<a :class="{'active': index === 0}" class="nav-link" data-toggle="tab" :href="'#' + item.keyName">
												<span>{{ item.tabName }}</span> <span><i class="fas fa-angle-down"></i></span>
											</a>
										</li>
									</ul>
									<div class="tab-content">
										<div v-for="(item, index) in items.home" :class="{'active': index === 0}" class="tab-pane list-popular" :id="item.keyName" :key="item.keyName">
											<h3 class="ttl-tab">{{ item.areaName }}</h3>
											<ul>
												<li v-for="miniItem in items.detail[item.keyName]" :key="miniItem.detailId" :id="miniItem.detailId" class="maxheight col-md-4 col-sm-12 col-xs-12">
													<router-link :to="{name: 'detail', params: { productsId: miniItem.detailId },}">
														<div class="details-list">
															<div class="img-thumb">
																{{ miniItem.detailName }}
															<img :src="miniItem.listImage" :alt="miniItem.listAlt" /></div>
															<div class="name-tour">
																<h3>{{ miniItem.detailName }}</h3>
															</div>
														</div>
													</router-link>
												</li>
											</ul>
											<div class="text-center btn-detail">
									
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="search-section" id="search">
				<h2>Search the highway bus</h2>
				<!--/ Searchbox -->
				<div class="searchbox">
					<div class="searchbox__title searchbox__title--mb">
						<h2><i class="fas fa-bus"></i>Highway bus seat availability</h2>
						<span class="searchbox__txt searchbox__txt--pc">Booking up to 20 min prior to departure OK!</span>
					</div>
					<span class="searchbox__txt searchbox__txt--mb">Booking up to 20 min prior to departure OK!</span>
					<div class="searchbox__inner">
						<div class="searchbox__title searchbox__title--pc">
							<h2><i class="fas fa-bus"></i>Highway bus seat availability</h2>
							<span class="searchbox__txt searchbox__txt--pc">Booking up to 20 min prior to departure OK!</span>
						</div>
						<div id="wbs_parts">
							<form id="searchbox-bus01" action="">
								<div id="searchbox-bus01-in">
									<div class="form-group-wrapper">
										<div class="form-group prefecture">
											<label id="fromPrefectureLabel" class="search__label"></label>
											<input id="fromPrefectureText" class="search__input search__input--prefecture" type="text" value="" autocomplete="off" size="10" style="display: block;" placeholder="Prefecture" />
											<input id="fromPrefectureId" type="hidden" value="" />
											<input id="fromPrefectureParam" type="hidden" value="" />
											<div class="box-suggest box-suggest_from" style="display: none;">
												<ul class="box-suggest-list"></ul>
											</div>
										</div>
										<div class="form-group prefecture">
											<label id="toPrefectureLabel" class="search__label"></label>
											<input id="toPrefectureText" class="search__input search__input--prefecture" type="text" value="" autocomplete="off" size="10" style="display: block;" placeholder="Prefecture" />
											<input id="toPrefectureId" type="hidden" value="" />
											<input id="toPrefectureParam" type="hidden" value="" />
											<input id="toAreaParam" type="hidden" value="" />
											<div class="box-suggest box-suggest_to" style="display: none;">
												<ul class="box-suggest-list"></ul>
											</div>
										</div>
										<div id="departure" class="form-group group-departure">
											<div>
												<label class="search__label"></label>
												<input class="search__input search__input--date datepicker" id="departureDate" name="departureDate" maxlength="10" type="text" readonly />
											</div>
										</div>
									</div>
									<div class="form-group-wrapper">
										<div class="search__number">
											<div class="form-group">
												<label for="" class="search__label" id="male"></label>
												<div class="input-group">
													<button class="search__stepper" type="button" id="adultMaleCountMinusBtn" aria-label="Minus"><i class="fa fa-minus" aria-hidden="true"></i></button>
													<label class="search__input" id="adultMaleCountLabel">0</label>
													<button class="search__stepper" type="button" id="adultMaleCountPlusBtn" aria-label="Plus"><i class="fa fa-plus" aria-hidden="true"></i></button>
												</div>
												<input type="hidden" id="adultMaleCount" name="adultMaleCount" value="0" />
											</div>
										</div>
										<div class="search__number">
											<div class="form-group">
												<label for="" class="search__label" id="female"></label>
												<div class="input-group">
													<button class="search__stepper" type="button" id="adultFemaleCountMinusBtn" aria-label="Minus"><i class="fa fa-minus" aria-hidden="true"></i></button>
													<label class="search__input" id="adultFemaleCountLabel">0</label>
													<button class="search__stepper" type="button" id="adultFemaleCountPlusBtn" aria-label="Plus"><i class="fa fa-plus" aria-hidden="true"></i></button>
												</div>
												<input type="hidden" id="adultFemaleCount" name="adultFemaleCount" value="0" />
											</div>
										</div>
										<div class="search__button">
											<div class="search-button">
												<input type="hidden" name="wbs_lang" id="wbs_lang" value="en" />
												<input type="hidden" name="wbs_default_from_pref" id="wbs_default_from_pref" value="" />
												<input type="hidden" name="wbs_default_to_pref" id="wbs_default_to_pref" value="" />
												<input type="hidden" name="skb" id="skb" value="02" />
												<input type="hidden" name="osf" id="osf" value="1" />
												<input type="hidden" name="osfp" id="osfp" value="0" />
												<input type="hidden" name="fp" id="fp" value="0" />
												<!-- 0=normal, 1=buspass only -->
												<input type="hidden" name="aid" id="aid" value="" />
												<input type="hidden" name="mid" id="mid" value="" />
												<input type="hidden" name="fid" id="fid" value="" />
												<input type="hidden" name="agencyCode" id="agencyCode" value="" />
												<!-- settings end -->
												<div class="search__notice show-notice-mb">
													<p id="notice"></p>
												</div>
												<button class="search__btn" type="button" id="btn-search"><i class="fa fa-search" aria-hidden="true"></i></button>
											</div>
										</div>
									</div>
									<div class="search__notice show-notice-pc">
										<p id="notice"></p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<!-- Searchbox /-->
			</div>
		</section>		
	`,
	data() {
		return { 
			bannerImg: "/en/area/cherry-blossom/img/bg-banner.jpg",
			titleH1: "Japan Cherry Blossom spots 2022",
			titleH2: "Cherry Blossom Spots and Forecast",
			bannerSpot: "Popular Cherry Blossom Spots",
			bannerBus: "Search the highway bus",
			bannerTxT: "In Japan, beautiful cherry blossom flowers can be admired in spring. They start to bloom from March in the south to May up north. Since there are various kinds of Sakura such as Yoshino cherry, weeping cherry tree, double cherry blossoms, you will never get bored anywhere in Japan during Sakura season.",
			imgMap: "/en/area/cherry-blossom/img/map.png",
			items: [],
			hasError: false,
			loaded: false
		} 
	},
	mounted: function() {
		axios.get('json/newcommon.json')
		.then(function(response){
			this.items = JSON.parse(response.data)
			console.log(response)
			console.log(111)
			console.log(111, this.items)			
		}.bind(this))
		.catch(function(error){
			this.hasError = true;
		}.bind(this))
		.finally(function(){
			this.loaded = true
		}.bind(this))
		$("a.fadeNext").click(function(){
			$(this).parent().next().fadeSliderToggle();
			// active クラスを加える
			$(this).parent().toggleClass("active");
			return false;
		});

		$("#tabmap").click(function(event){
			$("#maplistContents div[id$=Page]").hide(); $("#mapPage").fadeIn();
			$("#maplistNavi li").removeClass(); $(this).addClass("active"); event.preventDefault();
		});
		$("#tablist").click(function(event){
			$("#maplistContents div[id$=Page]").hide(); $("#listPage").fadeIn();
			$("#maplistNavi li").removeClass(); $(this).addClass("active"); event.preventDefault();
		});
	}
}