if(this.userId !== me.id){
    cancel();
}

if(!internal) {
    dpd.contacts.get({bare: true}, function(contacts){
        this.contacts = filterContactsByGroup(contacts, this.id);
    });
}

function filterContactsByGroup(contacts, groupId) {
    var i, j;
    var contactsInGroup = [];

    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].groups && contacts[i].groups.length) {
            for (j = 0; j < contacts[i].groups.length; j++) {
                if (contacts[i].groups[j] == groupId) {
                    contactsInGroup.push(contacts[i]);
                }
            }
        }
    }

    return contactsInGroup; 
}