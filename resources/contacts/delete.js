cancelIf(!me, "Morate se ulogovati da bi ste obrisali ovaj kontakt", 401);

if(this.userId !== me.id ) {
    cancel("Ne mozete obrisati ovaj kontakt jer ga niste vi kreirali", 403);
}
