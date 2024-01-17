# @r2d2bzh/moleculer-test-utils

This repository aims to provide some useful functions for testing moleculer actions.
Here is the list of functions exposed by this library:

* **runMongo**: Connect to mongo server
  * namespace: Namespace in the connection string
  * hostname: Host name of the mongo server
* **runBroker**: Start moleculer broker on a given namespace and wait for moleculer services to start
  * services: list of moleculer services attached to the broker
  * namespace: Namespace of the moleculer broker
