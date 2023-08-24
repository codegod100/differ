module default {
    type Node {
        required title: str {
            constraint exclusive;
        };
    }

    type Subnode {
        required user: str;
        required body: str;
        required node: Node;
        multi links_to: Node;
        constraint exclusive on ((.user, .node));
    }
}
