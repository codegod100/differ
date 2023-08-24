CREATE MIGRATION m16k6nhlgl46e44t456osreolczydrykyzxo2omupohaczs2lxhlzq
    ONTO m16uspsyd454fjx7b4b64qdi6qgjuzdwe5l3wspikim742ijs3bjka
{
  ALTER TYPE default::Subnode {
      CREATE REQUIRED PROPERTY user: std::str {
          SET REQUIRED USING (<std::str>'');
      };
  };
};
