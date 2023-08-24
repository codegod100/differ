insert Subnode{
    user := <str>$user,
    body := <str>$body,
    node := (select Node filter .title = <str>$title ),
    links_to := (select Node filter .title in array_unpack(<array<str>>$links))
}