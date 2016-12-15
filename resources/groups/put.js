if(!me) {
    cancel("Morate se ulogovati da bi ste izmjenili ovu grupu", 401);
}

if(this.userId !== me.id ) {
    cancel("Ne mozete izmjeniti ovu grupu jer je niste vi kreirali", 403);
}
