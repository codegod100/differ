with first := (select Subnode filter .title = <str>$title) 
select first {
    *, 
    backlinks := (select Subnode{*} filter first.title in .links_to) 
}