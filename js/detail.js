var Detail = {
	template: `
		<div class="detail">
			<div v-if="items">
				<div class="banner-list-area">
					<img class="banner-area" src="/en/area/cherry-blossom/list-area-img/banner-list-are01.jpg" alt="banner">
					<div class="container cont-banner-area">
						<div v-for="(item, id) in items" :key="id">
							<div v-for="(image, id2) in item.detailItem" :key="id2">								
								<img 
									:src="image.detailImage" class="banner" 
								/>
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
			router: this.$route.params.productsId,
		}
	},
	mounted: function() { 
		axios.get('json/newcommon.json')
			.then((response) => {
			this.items = response.data.detail
			console.log(this.items[this.router - 1])
//			this.items.forEach((item) => {
//				item.detailItem.forEach((itemId) => {
//					console.log(itemId.detailImage)
//					itemId.detailId === this.router
//				})
//			}) 
		})
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