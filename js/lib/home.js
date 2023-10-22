mixins.home = {
    mounted() {
        let background = this.$refs.homeBackground;
        let images = background.dataset.images.split(",");
        let id = Math.floor(Math.random() * images.length);
        background.style.backgroundImage = `url('${images[id]}')`;
        this.menuColor = true;
    },
    methods: {
        homeClick() {
            // window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
			var content = document.getElementById('copy');
			content.select();
			content.setSelectionRange(0, 99999);
			copy = true
			document.execCommand('copy');
			copy = false
			setTimeout(function() {
				alert("伺服器連線位置已複製到剪貼簿內\n您現在可以複製進遊戲內進行連線");
				}, 100
			);
        },
    },
};
