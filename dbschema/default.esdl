module default {
    type Subnode {
        required user: str;
        required body: str;
        required title: str{
            constraint expression on (
                __subject__ = str_lower(__subject__)
            )
        };
        multi links_to: str;
        constraint exclusive on ((.user, .title));
    }

}
