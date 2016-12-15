if(!me) {
    cancel("Morate se ulogovati da bi obrisali ovu grupu", 401);
}

if(this.userId !== me.id ) {
    cancel("Ne mozete obrisati ovu grupu jer je niste vi kreirali", 403);
}
