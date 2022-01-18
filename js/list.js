var List = {
	template: `
		<div>
			<div v-if="items">
				<div class="banner-list-area">
					<img class="banner-area" src="/en/area/cherry-blossom/list-area-img/banner-list-are01.jpg" alt="banner">
					<div class="container cont-banner-area">
						<figure>
							<img :src="items.detailImage" class="banner" />
						</figure>
					</div>            
				</div>   
			</div>
			<div class="list-item-area">
				<div class="bg-item-area bg-item-area-path-top"> 
					<div class="container">
						<ul class="breadcrumbs"> 
							<li><a href="/">Home</a></li>
							<li><router-link to="/">Japan Cherry Blossom spots 2021</router-link></li>
							<li class="name">{{ items ? items.breadName : "No information" }}</li> 
						</ul>
						<div class="list-area details-item-area" v-if="items.detailItem" v-for="item in items.detailItem" :key="item.listId">
							<div class="cont-details-area">
								<h2>{{ item.listName }}</h2>
								<div class="col-sm-6 col-xs-6">
									<div id="slider" v-if="item.role == 'slide'">
									  	<carousel :paginationEnabled="true" easing="ease" speed="300" :autoplay="false" :minSwipeDistance="0" :perPage="1" :loop="true">
											<slide v-for="slide, index in item.slides">
												<img  
													 :src="slide.src"
													 :key="slide.id" 
												/>												
											</slide>
										</carousel>
									</div> 
									<div id="sliderImage" v-else="item.role == 'image'">
									  	<img
											v-for="slide, index in item.slides"
											:src="slide.src"
											:key="slide.id" 
										/>
									</div>
								</div>
								<div class="col-sm-6 col-xs-6">
									<div class="description-item">
										<p>{{ item.desc }}</p>
									</div>
									<div class="date-item">
										<div class="fbloom-group clearfix fbloom-group-detail">
											<div class="firstbloom">
												<div class="blossarea maxheight-cherry">
													<p class="blossareatop">Date of first blossom</p>
													<p class="blossareabot" id="leftbloss" style="height: 44px;">
														<img src="/en/area/cherry-blossom/img/first_blossom.png" alt="first blossom" width="23" height="40" class="fblossomicon absmid" />
														{{ item.firstBloss }}
													</p>
												</div>
											</div>
											<!-- firstbloom END -->

											<div class="fullbloom">
												<div class="blossarea maxheight-cherry">
													<p class="blossareatop">Date of full blossom</p>
													<p class="blossareabot" id="rightbloss" style="height: 44px;">
														<img src="/en/area/cherry-blossom/img/full_blossom.png" alt="full blossom" width="42" height="40" class="fblossomicon absmid" />
														{{ item.fullBloss }}
													</p>
												</div>
											</div>
											<!-- fullbloom END -->
										</div>
									</div>
									<div class="description-item description-item-mb">
										<p>{{ item.desc }}</p>
									</div>
									<span class="spotmenu">
										<div class="mmbus">
											<router-link :to="{name: 'detail', params: { productsId: item.listId },}">
												Reserve a bus for this area
											</router-link>
										</div>
									</span>
									<div class="view-details">
										<router-link :to="{name: 'detail', params: { productsId: item.listId },}">
											View Detail
										</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`, 
	components: {
		'carousel': VueCarousel.Carousel,
		'slide': VueCarousel.Slide
	},
	data() {
		return { 
			items: null,
			router: this.$route.params.areaId,
		}
	},
	mounted: function() { 
		axios.get('json/list/list.json')
		.then(function(response){
			this.items = response.data.find((item) => item.keyName === this.router)					
		}.bind(this)) 
		.catch(function(error){
			this.hasError = true;
		}.bind(this))
		.finally(function(){
			this.loaded = true
		}.bind(this))
		this.show = true
	},	
	updated: function () {
		$(".ajax_link_rewrite").each(function () {
			var target = this;
			var url = $("#url", target).val();
			if (typeof url != "undefined" && url != "") {
				$.when
					.apply($, [
						$.ajax({
							url: url,
							cache: true,
							dataType: "html",
						}),
					])
					.done(function () {
						var html = arguments[0];
						// 出力
						$(".loader,.loading", this).hide();
						$(target).html(html);
					});
			}
		});
	}
}