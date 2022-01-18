var Detail = {
	template: `
		<div class="detail">
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
		</div>
	`,
	components: {
		'carousel': VueCarousel.Carousel,
		'slide': VueCarousel.Slide
	},
	data() {
		return { 
			items: null,
			router: this.$route.params.productsId,
		}
	},
	mounted: function() { 
		axios.get('json/home.json')
		.then(function(response){
			this.items = response.data.forEach((item) => {
				item.detailItem.find((itemId) => {
					if ( itemId !== undefined ) {
						console.log(itemId)
						return itemId.detailId === this.router
					}
				})
			})				
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