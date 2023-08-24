CREATE MIGRATION m16uspsyd454fjx7b4b64qdi6qgjuzdwe5l3wspikim742ijs3bjka
    ONTO initial
{
  CREATE TYPE default::Node {
      CREATE REQUIRED PROPERTY title: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::Subnode {
      CREATE MULTI LINK links_to: default::Node;
      CREATE REQUIRED LINK node: default::Node;
      CREATE REQUIRED PROPERTY body: std::str;
  };
};
