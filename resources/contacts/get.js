dpd.groups.get({id: {$in: this.groups}}, function(groups){
    this.groups = groups;
});