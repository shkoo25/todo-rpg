var tasks


var dispatcher =_.clone(Backbone.Events)





$(document).on("ready", function(){

	tasks = new taskList()

	tasks.on("add",function(taskModel){

		var view = new rpgView({
			model: taskModel
		})


	}),

	$("#add-task").on("click", function(){
		tasks.create({
			task: $("#newTaskTitle").val(),
			value: parseInt( $("#newValueTitle").val() ),
		}),
		console.log("yes")
	}),


	
		//$("#rpg-list-container").append(view.$el)


	tasks.fetch()

})

