update Subnode
filter .user = <str>$user AND .title = <str>$title
set {
    body := <str>$body,
    links_to := array_unpack(<array<str>>$links)
}