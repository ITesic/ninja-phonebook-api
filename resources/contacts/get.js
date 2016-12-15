if(this.userId !== me.id){
    cancel();
}

if(!internal) {
    dpd.groups.get({id: {$in: this.groups}, bare: true}, function(groups){
        this.groups = groups;
    });
}