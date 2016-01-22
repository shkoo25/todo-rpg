var rpgView = Backbone.View.extend({


	events:{
		
		
		"click .done": "displayComplete",
		"click .notDone": "displayNotComplete",

	},

	className: "tasks",
 
	initialize: function() {
		this.render()
		this.listenTo(this.model, "change", this.render)
		console.log("click")
	}, 
	

	render: function(){
		var attrs = this.model.toJSON()
		var htmlString = this.template(attrs)
		this.$el.html( htmlString )

		console.log(attrs.complete)

		if (attrs.complete) {
			$("#rpg-list-container").append(this.$el)
		}
		else {
			$("#task-list-container").append(this.$el)
		}


	},

	displayComplete:function(){
		
		console.log("hello")
		this.model.set("complete", true)
		this.$el.addClass("open")
		this.$el.removeClass("close")
		this.model.save()


	},

	displayNotComplete:function(){
		
		this.model.set("complete", false)
		this.$el.addClass("close")
		this.$el.removeClass("open")

		this.model.save()

	},

	

	template: Handlebars.compile( $("#rpg-template").html() )
	


})