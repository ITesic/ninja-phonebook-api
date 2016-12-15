cancelIf(!me, "Morate se ulogovati da bi ste izmjenili ovaj kontakt", 401);

if(this.userId !== me.id ) {
    cancel("Ne mozete izmjeniti ovaj kontakt jer ga niste vi kreirali", 403);
}
