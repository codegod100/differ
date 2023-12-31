// GENERATED by @edgedb/generate v0.3.3

import * as $ from "../reflection.mjs";
import * as _ from "../imports.mjs";
const AllowBareDDL = $.makeType(_.spec, "73406bc8-27fe-11ee-b9f7-dbdfa28b5dde", _.syntax.literal);

const ConnectionTransport = $.makeType(_.spec, "73410f68-27fe-11ee-ab42-651b7e8ca038", _.syntax.literal);

const memory = $.makeType(_.spec, "00000000-0000-0000-0000-000000000130", _.syntax.literal);

const $ConfigObject = $.makeType(_.spec, "7341c39a-27fe-11ee-8aef-3ddbd6be8ba5", _.syntax.literal);

const ConfigObject= _.syntax.$PathNode($.$toSet($ConfigObject, $.Cardinality.Many), null);

const $AbstractConfig = $.makeType(_.spec, "7380a48e-27fe-11ee-9873-f1b96a241b3c", _.syntax.literal);

const AbstractConfig= _.syntax.$PathNode($.$toSet($AbstractConfig, $.Cardinality.Many), null);

const $Auth = $.makeType(_.spec, "736d889e-27fe-11ee-9a5e-a91036f569b4", _.syntax.literal);

const Auth= _.syntax.$PathNode($.$toSet($Auth, $.Cardinality.Many), null);

const $AuthMethod = $.makeType(_.spec, "7349a49c-27fe-11ee-a66a-b9e59d8438e6", _.syntax.literal);

const AuthMethod= _.syntax.$PathNode($.$toSet($AuthMethod, $.Cardinality.Many), null);

const $Config = $.makeType(_.spec, "73bc86cc-27fe-11ee-954e-9303317d1556", _.syntax.literal);

const Config= _.syntax.$PathNode($.$toSet($Config, $.Cardinality.Many), null);

const $DatabaseConfig = $.makeType(_.spec, "742355a6-27fe-11ee-99e4-59933fb7e753", _.syntax.literal);

const DatabaseConfig= _.syntax.$PathNode($.$toSet($DatabaseConfig, $.Cardinality.Many), null);

const $InstanceConfig = $.makeType(_.spec, "73efd80c-27fe-11ee-b70e-93dbba2a6769", _.syntax.literal);

const InstanceConfig= _.syntax.$PathNode($.$toSet($InstanceConfig, $.Cardinality.Many), null);

const $JWT = $.makeType(_.spec, "73638f7c-27fe-11ee-aea5-a1581b94c59d", _.syntax.literal);

const JWT= _.syntax.$PathNode($.$toSet($JWT, $.Cardinality.Many), null);

const $SCRAM = $.makeType(_.spec, "735a360e-27fe-11ee-8442-77148cc28ed3", _.syntax.literal);

const SCRAM= _.syntax.$PathNode($.$toSet($SCRAM, $.Cardinality.Many), null);

const $Trust = $.makeType(_.spec, "7351e84b-27fe-11ee-a197-473ff7bad74b", _.syntax.literal);

const Trust= _.syntax.$PathNode($.$toSet($Trust, $.Cardinality.Many), null);

function get_config_json(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('cfg::get_config_json', args, _.spec, [
    {args: [], namedArgs: {"sources": {typeId: "68e5571f-27fe-11ee-856f-f7e3b5161bb0", optional: true, setoftype: false, variadic: false}, "max_source": {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-00000000010f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "cfg::get_config_json",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};



export { AllowBareDDL, ConnectionTransport, memory, $ConfigObject, ConfigObject, $AbstractConfig, AbstractConfig, $Auth, Auth, $AuthMethod, AuthMethod, $Config, Config, $DatabaseConfig, DatabaseConfig, $InstanceConfig, InstanceConfig, $JWT, JWT, $SCRAM, SCRAM, $Trust, Trust };

const __defaultExports = {
  "AllowBareDDL": AllowBareDDL,
  "ConnectionTransport": ConnectionTransport,
  "memory": memory,
  "ConfigObject": ConfigObject,
  "AbstractConfig": AbstractConfig,
  "Auth": Auth,
  "AuthMethod": AuthMethod,
  "Config": Config,
  "DatabaseConfig": DatabaseConfig,
  "InstanceConfig": InstanceConfig,
  "JWT": JWT,
  "SCRAM": SCRAM,
  "Trust": Trust,
  "get_config_json": get_config_json
};
export default __defaultExports;
