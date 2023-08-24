CREATE MIGRATION m1rrdoiwoshczgz3yuj5yc75ptfvn6jekgnmdpadafbpzouvfiu5mq
    ONTO m1fm3ynxfus5gk3i57ysefwxu5ce5bo47szoj7p4lrr3a2qmi2azcq
{
  ALTER TYPE default::Subnode {
      ALTER PROPERTY title {
          CREATE CONSTRAINT std::expression ON ((__subject__ = std::str_lower(__subject__)));
      };
  };
};
