/**
 * @flow
 * @relayHash 692175c64adfd6c62d58d137c5c336a1
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type srcCreatePersonMutationVariables = {|
  firstName: string;
  lastName: string;
|};

export type srcCreatePersonMutationResponse = {|
  +createPerson: ?{|
    +id: string;
    +firstName: ?string;
    +lastName: ?string;
    +avatar: ?string;
  |};
|};
*/


/*
mutation srcCreatePersonMutation(
  $firstName: String!
  $lastName: String!
) {
  createPerson(firstName: $firstName, lastName: $lastName) {
    id
    firstName
    lastName
    avatar
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "firstName",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "lastName",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcCreatePersonMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "firstName",
            "variableName": "firstName",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "lastName",
            "variableName": "lastName",
            "type": "String!"
          }
        ],
        "concreteType": "Person",
        "name": "createPerson",
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
  "name": "srcCreatePersonMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "firstName",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "lastName",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "srcCreatePersonMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "firstName",
            "variableName": "firstName",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "lastName",
            "variableName": "lastName",
            "type": "String!"
          }
        ],
        "concreteType": "Person",
        "name": "createPerson",
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
  "text": "mutation srcCreatePersonMutation(\n  $firstName: String!\n  $lastName: String!\n) {\n  createPerson(firstName: $firstName, lastName: $lastName) {\n    id\n    firstName\n    lastName\n    avatar\n  }\n}\n"
};

module.exports = batch;
