module default {
    type Subnode {
        required user: str;
        required body: str;
        required title: str;
        multi links_to: str;
        constraint exclusive on ((.user, .title));
    }
}
