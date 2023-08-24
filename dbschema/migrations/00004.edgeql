CREATE MIGRATION m1fm3ynxfus5gk3i57ysefwxu5ce5bo47szoj7p4lrr3a2qmi2azcq
    ONTO m1khhqodhrugddxql7lu7jmkqcaa77yub5w5mwchwp3c7nqrj2wdta
{
  ALTER TYPE default::Node {
      DROP PROPERTY title;
  };
  ALTER TYPE default::Subnode {
      DROP CONSTRAINT std::exclusive ON ((.user, .node));
  };
  ALTER TYPE default::Subnode {
      DROP LINK links_to;
  };
  ALTER TYPE default::Subnode {
      DROP LINK node;
  };
  DROP TYPE default::Node;
  ALTER TYPE default::Subnode {
      CREATE REQUIRED PROPERTY title: std::str {
          SET REQUIRED USING (<std::str>'');
      };
  };
  ALTER TYPE default::Subnode {
      CREATE CONSTRAINT std::exclusive ON ((.user, .title));
      CREATE MULTI PROPERTY links_to: std::str;
  };
};
