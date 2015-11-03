var Reflux=require("reflux");
var actions=require("./actions");
var store=Reflux.createStore({
	listenables:actions
	,data:[]
	,onShowDef:function(termpos) {
		var def=dictdata[termpos].tdefinitions;
		this.trigger(def); 
	}
});

module.exports=store;