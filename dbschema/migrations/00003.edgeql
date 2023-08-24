CREATE MIGRATION m1khhqodhrugddxql7lu7jmkqcaa77yub5w5mwchwp3c7nqrj2wdta
    ONTO m16k6nhlgl46e44t456osreolczydrykyzxo2omupohaczs2lxhlzq
{
  ALTER TYPE default::Subnode {
      CREATE CONSTRAINT std::exclusive ON ((.user, .node));
  };
};
