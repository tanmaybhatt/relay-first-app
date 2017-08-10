/**
 * @flow
 * @relayHash df4aad58debea1b5f67b34926e35f754
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type srcCreateRandomPersonMutationVariables = {| |};

export type srcCreateRandomPersonMutationResponse = {|
  +createRandomPerson: ?{|
    +id: string;
    +firstName: ?string;
    +lastName: ?string;
    +avatar: ?string;
  |};
|};
*/


/*
mutation srcCreateRandomPersonMutation {
  createRandomPerson {
    id
    firstName
    lastName
    avatar
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcCreateRandomPersonMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "name": "createRandomPerson",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "firstName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lastName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "avatar",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "srcCreateRandomPersonMutation",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "srcCreateRandomPersonMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Person",
        "name": "createRandomPerson",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "firstName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "lastName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "avatar",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation srcCreateRandomPersonMutation {\n  createRandomPerson {\n    id\n    firstName\n    lastName\n    avatar\n  }\n}\n"
};

module.exports = batch;
