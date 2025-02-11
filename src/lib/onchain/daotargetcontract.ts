import type { Address } from "viem";

export const DaoTargetContract_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newValue",
                "type": "uint256"
            }
        ],
        "name": "ValueChanged",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "OPERATOR_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

export const DaoTargetContract_BYTECODE: Address = "0x608060405234801561001057600080fd5b5061001c60003361004b565b6100467f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b9293361004b565b6100ea565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166100e6576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556100a53390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b610879806100f96000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80635524107711610066578063552410771461012857806391d148541461013b578063a217fddf1461014e578063d547741f14610156578063f5b541a61461016957600080fd5b806301ffc9a7146100a357806320965255146100cb578063248a9ca3146100dd5780632f2ff15d1461010057806336568abe14610115575b600080fd5b6100b66100b136600461066d565b610190565b60405190151581526020015b60405180910390f35b6001545b6040519081526020016100c2565b6100cf6100eb366004610697565b60009081526020819052604090206001015490565b61011361010e3660046106b0565b6101c7565b005b6101136101233660046106b0565b6101f1565b610113610136366004610697565b610274565b6100b66101493660046106b0565b61031b565b6100cf600081565b6101136101643660046106b0565b610344565b6100cf7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b92981565b60006001600160e01b03198216637965db0b60e01b14806101c157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000828152602081905260409020600101546101e281610369565b6101ec8383610376565b505050565b6001600160a01b03811633146102665760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61027082826103fa565b5050565b7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b92961029e81610369565b600082116102df5760405162461bcd60e51b815260206004820152600e60248201526d4e6f6e2d7a65726f2076616c756560901b604482015260640161025d565b60018290556040518281527f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c599060200160405180910390a15050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008281526020819052604090206001015461035f81610369565b6101ec83836103fa565b610373813361045f565b50565b610380828261031b565b610270576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556103b63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610404828261031b565b15610270576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b610469828261031b565b61027057610476816104b8565b6104818360206104ca565b604051602001610492929190610710565b60408051601f198184030181529082905262461bcd60e51b825261025d91600401610785565b60606101c16001600160a01b03831660145b606060006104d98360026107ce565b6104e49060026107ed565b67ffffffffffffffff8111156104fc576104fc610800565b6040519080825280601f01601f191660200182016040528015610526576020820181803683370190505b509050600360fc1b8160008151811061054157610541610816565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061057057610570610816565b60200101906001600160f81b031916908160001a90535060006105948460026107ce565b61059f9060016107ed565b90505b6001811115610617576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106105d3576105d3610816565b1a60f81b8282815181106105e9576105e9610816565b60200101906001600160f81b031916908160001a90535060049490941c936106108161082c565b90506105a2565b5083156106665760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161025d565b9392505050565b60006020828403121561067f57600080fd5b81356001600160e01b03198116811461066657600080fd5b6000602082840312156106a957600080fd5b5035919050565b600080604083850312156106c357600080fd5b8235915060208301356001600160a01b03811681146106e157600080fd5b809150509250929050565b60005b838110156107075781810151838201526020016106ef565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516107488160178501602088016106ec565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516107798160288401602088016106ec565b01602801949350505050565b60208152600082518060208401526107a48160408501602087016106ec565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156107e8576107e86107b8565b500290565b808201808211156101c1576101c16107b8565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161083b5761083b6107b8565b50600019019056fea26469706673582212202c5a80b2ae8b696fda34eea532cbc68d510bc644f32c25578abe580404afe3f564736f6c63430008100033";