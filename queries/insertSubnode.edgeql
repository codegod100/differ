insert Subnode{
    user := <str>$user,
    body := <str>$body,
    title := <str>$title,
    links_to := array_unpack(<array<str>>$links)
}