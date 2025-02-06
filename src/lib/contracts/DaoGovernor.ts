import type { Address } from "viem";

export const DaoGovernor_ABI = [
    {
      "inputs": [
        {
          "internalType": "contract IVotes",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "contract TimelockController",
          "name": "_timelock",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_quorumPercentage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_votingPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_votingDelay",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_initialProposalThreshold",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "Empty",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidShortString",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "str",
          "type": "string"
        }
      ],
      "name": "StringTooLong",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "EIP712DomainChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "ProposalCanceled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "string[]",
          "name": "signatures",
          "type": "string[]"
        },
        {
          "indexed": false,
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteStart",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "voteEnd",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "ProposalCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "ProposalExecuted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "eta",
          "type": "uint256"
        }
      ],
      "name": "ProposalQueued",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldProposalThreshold",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newProposalThreshold",
          "type": "uint256"
        }
      ],
      "name": "ProposalThresholdSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldQuorumNumerator",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newQuorumNumerator",
          "type": "uint256"
        }
      ],
      "name": "QuorumNumeratorUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldTimelock",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newTimelock",
          "type": "address"
        }
      ],
      "name": "TimelockChange",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "VoteCast",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        }
      ],
      "name": "VoteCastWithParams",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldVotingDelay",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newVotingDelay",
          "type": "uint256"
        }
      ],
      "name": "VotingDelaySet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldVotingPeriod",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newVotingPeriod",
          "type": "uint256"
        }
      ],
      "name": "VotingPeriodSet",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "BALLOT_TYPEHASH",
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
      "name": "CLOCK_MODE",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "COUNTING_MODE",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "EXTENDED_BALLOT_TYPEHASH",
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
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes32",
          "name": "descriptionHash",
          "type": "bytes32"
        }
      ],
      "name": "cancel",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        }
      ],
      "name": "castVote",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "castVoteBySig",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "castVoteWithReason",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        }
      ],
      "name": "castVoteWithReasonAndParams",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "support",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "castVoteWithReasonAndParamsBySig",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "clock",
      "outputs": [
        {
          "internalType": "uint48",
          "name": "",
          "type": "uint48"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "eip712Domain",
      "outputs": [
        {
          "internalType": "bytes1",
          "name": "fields",
          "type": "bytes1"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "version",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "verifyingContract",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "salt",
          "type": "bytes32"
        },
        {
          "internalType": "uint256[]",
          "name": "extensions",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes32",
          "name": "descriptionHash",
          "type": "bytes32"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timepoint",
          "type": "uint256"
        }
      ],
      "name": "getVotes",
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
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timepoint",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "params",
          "type": "bytes"
        }
      ],
      "name": "getVotesWithParams",
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
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasVoted",
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
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes32",
          "name": "descriptionHash",
          "type": "bytes32"
        }
      ],
      "name": "hashProposal",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "proposalDeadline",
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
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "proposalEta",
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
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "proposalProposer",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "proposalSnapshot",
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
      "inputs": [],
      "name": "proposalThreshold",
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
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "proposalVotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "againstVotes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "forVotes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "abstainVotes",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "propose",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "targets",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes[]",
          "name": "calldatas",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes32",
          "name": "descriptionHash",
          "type": "bytes32"
        }
      ],
      "name": "queue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "timepoint",
          "type": "uint256"
        }
      ],
      "name": "quorum",
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
      "inputs": [],
      "name": "quorumDenominator",
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
          "internalType": "uint256",
          "name": "timepoint",
          "type": "uint256"
        }
      ],
      "name": "quorumNumerator",
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
      "inputs": [],
      "name": "quorumNumerator",
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
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "relay",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newProposalThreshold",
          "type": "uint256"
        }
      ],
      "name": "setProposalThreshold",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newVotingDelay",
          "type": "uint256"
        }
      ],
      "name": "setVotingDelay",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newVotingPeriod",
          "type": "uint256"
        }
      ],
      "name": "setVotingPeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "state",
      "outputs": [
        {
          "internalType": "enum IGovernor.ProposalState",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
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
    },
    {
      "inputs": [],
      "name": "timelock",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract IERC5805",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newQuorumNumerator",
          "type": "uint256"
        }
      ],
      "name": "updateQuorumNumerator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract TimelockController",
          "name": "newTimelock",
          "type": "address"
        }
      ],
      "name": "updateTimelock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingDelay",
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
      "inputs": [],
      "name": "votingPeriod",
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
      "stateMutability": "payable",
      "type": "receive"
    }
  ];

export const DaoGovernor_BYTECODE: Address = "0x6101806040523480156200001257600080fd5b50604051620055e1380380620055e18339810160408190526200003591620009cb565b81838287878a6040518060400160405280600b81526020016a2230b7a3b7bb32b93737b960a91b8152508062000070620001a460201b60201c565b6200008b600083620001bf60201b6200184f1790919060201c565b61012052620000a8816001620001bf602090811b6200184f17901c565b61014052815160208084019190912060e052815190820120610100524660a0526200013660e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05260026200014d828262000ad3565b50506001600160a01b03166101605262000167816200020f565b506200017381620003c8565b506200017f8362000431565b6200018a8262000472565b620001958162000515565b50505050505050505062000c60565b6040805180820190915260018152603160f81b602082015290565b6000602083511015620001df57620001d78362000556565b905062000209565b82620001f6836200059960201b620018801760201c565b9062000203908262000ad3565b5060ff90505b92915050565b6064811115620002985760405162461bcd60e51b815260206004820152604360248201527f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60448201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e616064820152623a37b960e91b608482015260a4015b60405180910390fd5b6000620002a46200059c565b90508015801590620002b65750600854155b15620003315760086000016040518060400160405280600063ffffffff168152602001620002ef84620005d660201b620018831760201c565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b620003896200035c6200034362000645565b65ffffffffffff16620006c760201b620018f01760201c565b6200037284620005d660201b620018831760201c565b60086200072e60201b62001955179092919060201c565b505060408051828152602081018490527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a15050565b600954604080516001600160a01b03928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600980546001600160a01b0319166001600160a01b0392909216919091179055565b600b5460408051918252602082018390527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93910160405180910390a1600b55565b60008111620004d45760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f7253657474696e67733a20766f74696e6720706572696f6420604482015266746f6f206c6f7760c81b60648201526084016200028f565b600c5460408051918252602082018390527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828910160405180910390a1600c55565b600d5460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461910160405180910390a1600d55565b600080829050601f8151111562000584578260405163305a27a960e01b81526004016200028f919062000b9f565b8051620005918262000bef565b179392505050565b90565b60085460009015620005cd57620005bf60086200074b60201b620019701760201c565b6001600160e01b0316905090565b6007545b905090565b60006001600160e01b03821115620006415760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016200028f565b5090565b6000610160516001600160a01b03166391ddadf46040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015620006a7575060408051601f3d908101601f19168201909252620006a49181019062000c14565b60015b620006c257620005d1436200079960201b620019ae1760201c565b919050565b600063ffffffff821115620006415760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016200028f565b6000806200073e85858562000802565b915091505b935093915050565b805460009080156200078f5762000777836200076960018462000c3e565b600091825260209091200190565b5464010000000090046001600160e01b031662000792565b60005b9392505050565b600065ffffffffffff821115620006415760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201526538206269747360d01b60648201526084016200028f565b8254600090819080156200095757600062000824876200076960018562000c3e565b60408051808201909152905463ffffffff8082168084526401000000009092046001600160e01b031660208401529192509087161015620008a85760405162461bcd60e51b815260206004820152601b60248201527f436865636b706f696e743a2064656372656173696e67206b657973000000000060448201526064016200028f565b805163ffffffff808816911603620008f65784620008cd886200076960018662000c3e565b80546001600160e01b03929092166401000000000263ffffffff90921691909117905562000946565b6040805180820190915263ffffffff80881682526001600160e01b0380881660208085019182528b54600181018d5560008d81529190912094519151909216640100000000029216919091179101555b602001519250839150620007439050565b50506040805180820190915263ffffffff80851682526001600160e01b0380851660208085019182528854600181018a5560008a81529182209551925190931664010000000002919093161792019190915590508162000743565b6001600160a01b0381168114620009c857600080fd5b50565b60008060008060008060c08789031215620009e557600080fd5b8651620009f281620009b2565b602088015190965062000a0581620009b2565b6040880151606089015160808a015160a0909a0151989b929a5090989097909650945092505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168062000a5957607f821691505b60208210810362000a7a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000ace57600081815260208120601f850160051c8101602086101562000aa95750805b601f850160051c820191505b8181101562000aca5782815560010162000ab5565b5050505b505050565b81516001600160401b0381111562000aef5762000aef62000a2e565b62000b078162000b00845462000a44565b8462000a80565b602080601f83116001811462000b3f576000841562000b265750858301515b600019600386901b1c1916600185901b17855562000aca565b600085815260208120601f198616915b8281101562000b705788860151825594840194600190910190840162000b4f565b508582101562000b8f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208083528351808285015260005b8181101562000bce5785810183015185820160400152820162000bb0565b506000604082860101526040601f19601f8301168501019250505092915050565b8051602080830151919081101562000a7a5760001960209190910360031b1b16919050565b60006020828403121562000c2757600080fd5b815165ffffffffffff811681146200079257600080fd5b818103818111156200020957634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e051610100516101205161014051610160516148ff62000ce2600039600081816109e101528181610fe60152818161133b015281816117c801526126af015260006112e7015260006112bd01526000612bd301526000612bab01526000612b0601526000612b3001526000612b5a01526148ff6000f3fe6080604052600436106102815760003560e01c80637b3c71d31161014f578063c01f9e37116100c1578063ea0217cf1161007a578063ea0217cf14610923578063eb9019d414610943578063ece40cc114610963578063f23a6e6114610983578063f8ce560a146109af578063fc0c546a146109cf57600080fd5b8063c01f9e371461081f578063c28bc2fa14610858578063c59057e41461086b578063d33219b41461088b578063dd4e2ba5146108a9578063deaaa7cc146108ef57600080fd5b80639a802a6d116101135780639a802a6d14610769578063a7713a7014610789578063a890c9101461079e578063ab58fb8e146107be578063b58131b0146107de578063bc197c81146107f357600080fd5b80637b3c71d3146106c15780637d5e81e2146106e157806384b0196e1461070157806391ddadf41461072957806397c3d3341461075557600080fd5b80633932abb1116101f3578063544ffc9c116101ac578063544ffc9c146105c257806354fd4d501461061757806356781388146106415780635f398a141461066157806360c4247f1461068157806370b0f660146106a157600080fd5b80633932abb1146104e15780633bccf4fd146104f65780633e4f49e6146105165780634385963214610543578063452115d61461058d5780634bf5d7e9146105ad57600080fd5b8063143489d011610245578063143489d0146103ab578063150b7a0214610400578063160cbed7146104445780632656227d146104645780632d63f693146104775780632fe3e261146104ad57600080fd5b806301ffc9a7146102f157806302a251a314610326578063034201811461034957806306f3f9e61461036957806306fdde031461038957600080fd5b366102ec573061028f610a03565b6001600160a01b0316146102ea5760405162461bcd60e51b815260206004820152601f60248201527f476f7665726e6f723a206d7573742073656e6420746f206578656375746f720060448201526064015b60405180910390fd5b005b600080fd5b3480156102fd57600080fd5b5061031161030c36600461383b565b610a1c565b60405190151581526020015b60405180910390f35b34801561033257600080fd5b5061033b610a2d565b60405190815260200161031d565b34801561035557600080fd5b5061033b610364366004613989565b610a38565b34801561037557600080fd5b506102ea610384366004613a2f565b610b30565b34801561039557600080fd5b5061039e610bba565b60405161031d9190613a98565b3480156103b757600080fd5b506103e86103c6366004613a2f565b600090815260036020526040902054600160401b90046001600160a01b031690565b6040516001600160a01b03909116815260200161031d565b34801561040c57600080fd5b5061042b61041b366004613ac0565b630a85bd0160e11b949350505050565b6040516001600160e01b0319909116815260200161031d565b34801561045057600080fd5b5061033b61045f366004613c97565b610c4c565b61033b610472366004613c97565b610e4d565b34801561048357600080fd5b5061033b610492366004613a2f565b6000908152600360205260409020546001600160401b031690565b3480156104b957600080fd5b5061033b7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af8881565b3480156104ed57600080fd5b5061033b610f3f565b34801561050257600080fd5b5061033b610511366004613d26565b610f4a565b34801561052257600080fd5b50610536610531366004613a2f565b610fc0565b60405161031d9190613d8a565b34801561054f57600080fd5b5061031161055e366004613db2565b60008281526006602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b34801561059957600080fd5b5061033b6105a8366004613c97565b610fcb565b3480156105b957600080fd5b5061039e610fe2565b3480156105ce57600080fd5b506105fc6105dd366004613a2f565b6000908152600660205260409020805460018201546002909201549092565b6040805193845260208401929092529082015260600161031d565b34801561062357600080fd5b506040805180820190915260018152603160f81b602082015261039e565b34801561064d57600080fd5b5061033b61065c366004613de2565b6110a4565b34801561066d57600080fd5b5061033b61067c366004613e0e565b6110cd565b34801561068d57600080fd5b5061033b61069c366004613a2f565b611117565b3480156106ad57600080fd5b506102ea6106bc366004613a2f565b6111c8565b3480156106cd57600080fd5b5061033b6106dc366004613e91565b61124f565b3480156106ed57600080fd5b5061033b6106fc366004613eea565b6112a1565b34801561070d57600080fd5b506107166112af565b60405161031d9796959493929190613fd9565b34801561073557600080fd5b5061073e611337565b60405165ffffffffffff909116815260200161031d565b34801561076157600080fd5b50606461033b565b34801561077557600080fd5b5061033b61078436600461403b565b6113c0565b34801561079557600080fd5b5061033b6113d7565b3480156107aa57600080fd5b506102ea6107b9366004614093565b611401565b3480156107ca57600080fd5b5061033b6107d9366004613a2f565b611488565b3480156107ea57600080fd5b5061033b611522565b3480156107ff57600080fd5b5061042b61080e3660046140b0565b63bc197c8160e01b95945050505050565b34801561082b57600080fd5b5061033b61083a366004613a2f565b6000908152600360205260409020600101546001600160401b031690565b6102ea610866366004614143565b61152d565b34801561087757600080fd5b5061033b610886366004613c97565b61163c565b34801561089757600080fd5b506009546001600160a01b03166103e8565b3480156108b557600080fd5b506040805180820190915260208082527f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e9082015261039e565b3480156108fb57600080fd5b5061033b7f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b34801561092f57600080fd5b506102ea61093e366004613a2f565b611676565b34801561094f57600080fd5b5061033b61095e366004614186565b6116fd565b34801561096f57600080fd5b506102ea61097e366004613a2f565b61171e565b34801561098f57600080fd5b5061042b61099e3660046141b2565b63f23a6e6160e01b95945050505050565b3480156109bb57600080fd5b5061033b6109ca366004613a2f565b6117a5565b3480156109db57600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b6000610a176009546001600160a01b031690565b905090565b6000610a2782611a15565b92915050565b6000610a17600c5490565b600080610adc610ad47fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af888c8c8c8c604051610a7492919061421a565b60405180910390208b80519060200120604051602001610ab9959493929190948552602085019390935260ff9190911660408401526060830152608082015260a00190565b60405160208183030381529060405280519060200120611a3a565b868686611a67565b9050610b228a828b8b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d9250611a85915050565b9a9950505050505050505050565b610b38610a03565b6001600160a01b0316336001600160a01b031614610b685760405162461bcd60e51b81526004016102e19061422a565b30610b71610a03565b6001600160a01b031614610bae5760008036604051610b9192919061421a565b604051809103902090505b80610ba76004611bda565b03610b9c57505b610bb781611c59565b50565b606060028054610bc990614261565b80601f0160208091040260200160405190810160405280929190818152602001828054610bf590614261565b8015610c425780601f10610c1757610100808354040283529160200191610c42565b820191906000526020600020905b815481529060010190602001808311610c2557829003601f168201915b5050505050905090565b600080610c5b8686868661163c565b90506004610c6882610fc0565b6007811115610c7957610c79613d74565b14610c965760405162461bcd60e51b81526004016102e19061429b565b6009546040805163793d064960e11b815290516000926001600160a01b03169163f27a0c929160048083019260209291908290030181865afa158015610ce0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0491906142dc565b60095460405163b1c5f42760e01b81529192506001600160a01b03169063b1c5f42790610d3e908a908a908a906000908b90600401614383565b602060405180830381865afa158015610d5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7f91906142dc565b6000838152600a60205260408082209290925560095491516308f2a0bb60e41b81526001600160a01b0390921691638f2a0bb091610dca918b918b918b91908b9089906004016143d1565b600060405180830381600087803b158015610de457600080fd5b505af1158015610df8573d6000803e3d6000fd5b505050507f9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892828242610e2a919061443f565b604080519283526020830191909152015b60405180910390a15095945050505050565b600080610e5c8686868661163c565b90506000610e6982610fc0565b90506004816007811115610e7f57610e7f613d74565b1480610e9c57506005816007811115610e9a57610e9a613d74565b145b610eb85760405162461bcd60e51b81526004016102e19061429b565b60008281526003602052604090819020600201805460ff19166001179055517f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f90610f069084815260200190565b60405180910390a1610f1b8288888888611dc7565b610f288288888888611e69565b610f358288888888611e76565b5095945050505050565b6000610a17600b5490565b604080517f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f602082015290810186905260ff851660608201526000908190610f9890610ad490608001610ab9565b9050610fb587828860405180602001604052806000815250611eaf565b979650505050505050565b6000610a2782611ed2565b6000610fd98585858561201c565b95945050505050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634bf5d7e96040518163ffffffff1660e01b8152600401600060405180830381865afa92505050801561106357506040513d6000823e601f3d908101601f191682016040526110609190810190614452565b60015b61109f575060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b919050565b6000803390506110c584828560405180602001604052806000815250611eaf565b949350505050565b600080339050610fb587828888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250611a85915050565b60085460009080820361112e575050600754919050565b6000600861113d6001846144bf565b8154811061114d5761114d6144d2565b60009182526020918290206040805180820190915291015463ffffffff8116808352600160201b9091046001600160e01b031692820192909252915084106111a357602001516001600160e01b03169392505050565b6111b76111af856118f0565b600890612123565b6001600160e01b0316949350505050565b6111d0610a03565b6001600160a01b0316336001600160a01b0316146112005760405162461bcd60e51b81526004016102e19061422a565b30611209610a03565b6001600160a01b031614611246576000803660405161122992919061421a565b604051809103902090505b8061123f6004611bda565b0361123457505b610bb7816121c8565b60008033905061129786828787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611eaf92505050565b9695505050505050565b6000610fd985858585612209565b6000606080828080836112e27f0000000000000000000000000000000000000000000000000000000000000000836125e2565b61130d7f000000000000000000000000000000000000000000000000000000000000000060016125e2565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166391ddadf46040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156113b3575060408051601f3d908101601f191682019092526113b0918101906144e8565b60015b61109f57610a17436119ae565b60006113cd848484612686565b90505b9392505050565b600854600090156113fa576113ec6008611970565b6001600160e01b0316905090565b5060075490565b611409610a03565b6001600160a01b0316336001600160a01b0316146114395760405162461bcd60e51b81526004016102e19061422a565b30611442610a03565b6001600160a01b03161461147f576000803660405161146292919061421a565b604051809103902090505b806114786004611bda565b0361146d57505b610bb78161271c565b6009546000828152600a602052604080822054905163d45c443560e01b81526004810191909152909182916001600160a01b039091169063d45c443590602401602060405180830381865afa1580156114e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150991906142dc565b90508060011461151957806113d0565b60009392505050565b6000610a17600d5490565b611535610a03565b6001600160a01b0316336001600160a01b0316146115655760405162461bcd60e51b81526004016102e19061422a565b3061156e610a03565b6001600160a01b0316146115ab576000803660405161158e92919061421a565b604051809103902090505b806115a46004611bda565b0361159957505b600080856001600160a01b03168585856040516115c992919061421a565b60006040518083038185875af1925050503d8060008114611606576040519150601f19603f3d011682016040523d82523d6000602084013e61160b565b606091505b509150915061163382826040518060600160405280602881526020016148a260289139612785565b50505050505050565b6000848484846040516020016116559493929190614510565b60408051601f19818403018152919052805160209091012095945050505050565b61167e610a03565b6001600160a01b0316336001600160a01b0316146116ae5760405162461bcd60e51b81526004016102e19061422a565b306116b7610a03565b6001600160a01b0316146116f457600080366040516116d792919061421a565b604051809103902090505b806116ed6004611bda565b036116e257505b610bb78161279e565b60006113d0838361171960408051602081019091526000815290565b612686565b611726610a03565b6001600160a01b0316336001600160a01b0316146117565760405162461bcd60e51b81526004016102e19061422a565b3061175f610a03565b6001600160a01b03161461179c576000803660405161177f92919061421a565b604051809103902090505b806117956004611bda565b0361178a57505b610bb78161283f565b600060646117b283611117565b604051632394e7a360e21b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638e539e8c90602401602060405180830381865afa158015611817573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183b91906142dc565b611845919061455b565b610a279190614590565b600060208351101561186b5761186483612880565b9050610a27565b8161187684826145fd565b5060ff9050610a27565b90565b60006001600160e01b038211156118ec5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016102e1565b5090565b600063ffffffff8211156118ec5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016102e1565b6000806119638585856128be565b915091505b935093915050565b80546000908015611519576119988361198a6001846144bf565b600091825260209091200190565b54600160201b90046001600160e01b03166113d0565b600065ffffffffffff8211156118ec5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201526538206269747360d01b60648201526084016102e1565b60006001600160e01b03198216636e665ced60e01b1480610a275750610a2782612a5d565b6000610a27611a47612af9565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000611a7887878787612c24565b91509150610f3581612ce8565b60008581526003602052604081206001611a9e88610fc0565b6007811115611aaf57611aaf613d74565b14611b085760405162461bcd60e51b815260206004820152602360248201527f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460448201526269766560e81b60648201526084016102e1565b8054600090611b229088906001600160401b031686612686565b9050611b318888888488612e32565b8351600003611b8657866001600160a01b03167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda489888489604051611b7994939291906146bc565b60405180910390a2610fb5565b866001600160a01b03167fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb87128988848989604051611bc79594939291906146e4565b60405180910390a2979650505050505050565b6000611bf58254600f81810b600160801b909204900b131590565b15611c1357604051631ed9509560e11b815260040160405180910390fd5b508054600f0b6000818152600180840160205260408220805492905583546fffffffffffffffffffffffffffffffff191692016001600160801b03169190911790915590565b6064811115611cdc5760405162461bcd60e51b815260206004820152604360248201527f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60448201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e616064820152623a37b960e91b608482015260a4016102e1565b6000611ce66113d7565b90508015801590611cf75750600854155b15611d5b57604080518082019091526000815260089060208101611d1a84611883565b6001600160e01b039081169091528254600181018455600093845260209384902083519490930151909116600160201b0263ffffffff909316929092179101555b611d88611d76611d69611337565b65ffffffffffff166118f0565b611d7f84611883565b60089190611955565b505060408051828152602081018490527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a15050565b30611dd0610a03565b6001600160a01b031614611e625760005b8451811015611e6057306001600160a01b0316858281518110611e0657611e066144d2565b60200260200101516001600160a01b031603611e5057611e50838281518110611e3157611e316144d2565b6020026020010151805190602001206004612fac90919063ffffffff16565b611e598161472a565b9050611de1565b505b5050505050565b611e628585858585612fe8565b30611e7f610a03565b6001600160a01b031614611e6257600454600f81810b600160801b909204900b1315611e62576000600455611e62565b6000610fd985858585611ecd60408051602081019091526000815290565b611a85565b600080611ede8361305c565b90506004816007811115611ef457611ef4613d74565b14611eff5792915050565b6000838152600a602052604090205480611f1a575092915050565b600954604051632ab0f52960e01b8152600481018390526001600160a01b0390911690632ab0f52990602401602060405180830381865afa158015611f63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f879190614743565b15611f96575060079392505050565b600954604051632c258a9f60e11b8152600481018390526001600160a01b039091169063584b153e90602401602060405180830381865afa158015611fdf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120039190614743565b15612012575060059392505050565b5060029392505050565b60008061202b8686868661163c565b9050600061203882610fc0565b600781111561204957612049613d74565b146120965760405162461bcd60e51b815260206004820152601c60248201527f476f7665726e6f723a20746f6f206c61746520746f2063616e63656c0000000060448201526064016102e1565b600081815260036020526040902054600160401b90046001600160a01b0316336001600160a01b0316146121175760405162461bcd60e51b815260206004820152602260248201527f476f7665726e6f723a206f6e6c792070726f706f7365722063616e2063616e63604482015261195b60f21b60648201526084016102e1565b6112978686868661319c565b81546000908181600581111561218057600061213e846131aa565b61214890856144bf565b60008881526020902090915081015463ffffffff90811690871610156121705780915061217e565b61217b81600161443f565b92505b505b600061218e87878585613292565b905080156121bb576121a58761198a6001846144bf565b54600160201b90046001600160e01b0316610fb5565b6000979650505050505050565b600b5460408051918252602082018390527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93910160405180910390a1600b55565b60003361221681846132f0565b6122625760405162461bcd60e51b815260206004820152601d60248201527f476f7665726e6f723a2070726f706f736572207265737472696374656400000060448201526064016102e1565b600061226c611337565b65ffffffffffff16905061227e611522565b61228d8361095e6001856144bf565b10156122f55760405162461bcd60e51b815260206004820152603160248201527f476f7665726e6f723a2070726f706f73657220766f7465732062656c6f7720706044820152701c9bdc1bdcd85b081d1a1c995cda1bdb19607a1b60648201526084016102e1565b600061230a888888888051906020012061163c565b9050865188511461232d5760405162461bcd60e51b81526004016102e190614765565b855188511461234e5760405162461bcd60e51b81526004016102e190614765565b600088511161239f5760405162461bcd60e51b815260206004820152601860248201527f476f7665726e6f723a20656d7074792070726f706f73616c000000000000000060448201526064016102e1565b6000818152600360205260409020546001600160401b03161561240e5760405162461bcd60e51b815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c20616c72656164792065786973746044820152607360f81b60648201526084016102e1565b6000612418610f3f565b612422908461443f565b9050600061242e610a2d565b612438908361443f565b90506040518060e0016040528061244e846133e1565b6001600160401b031681526001600160a01b03871660208201526000604082015260600161247b836133e1565b6001600160401b039081168252600060208084018290526040808501839052606094850183905288835260038252918290208551815492870151878501519186166001600160e01b031990941693909317600160401b6001600160a01b039094168402176001600160e01b0316600160e01b60e09290921c91909102178155938501516080860151908416921c0217600183015560a08301516002909201805460c09094015161ffff1990941692151561ff00191692909217610100931515939093029290921790558a517f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e091859188918e918e9181111561257f5761257f6138be565b6040519080825280602002602001820160405280156125b257816020015b606081526020019060019003908161259d5790505b508d88888f6040516125cc999897969594939291906147a6565b60405180910390a1509098975050505050505050565b606060ff83146125f55761186483613449565b81805461260190614261565b80601f016020809104026020016040519081016040528092919081815260200182805461262d90614261565b801561267a5780601f1061264f5761010080835404028352916020019161267a565b820191906000526020600020905b81548152906001019060200180831161265d57829003601f168201915b50505050509050610a27565b604051630748d63560e31b81526001600160a01b038481166004830152602482018490526000917f000000000000000000000000000000000000000000000000000000000000000090911690633a46b1a890604401602060405180830381865afa1580156126f8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cd91906142dc565b600954604080516001600160a01b03928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600980546001600160a01b0319166001600160a01b0392909216919091179055565b606083156127945750816113d0565b6113d08383613488565b600081116127fe5760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f7253657474696e67733a20766f74696e6720706572696f6420604482015266746f6f206c6f7760c81b60648201526084016102e1565b600c5460408051918252602082018390527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828910160405180910390a1600c55565b600d5460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461910160405180910390a1600d55565b600080829050601f815111156128ab578260405163305a27a960e01b81526004016102e19190613a98565b80516128b68261487d565b179392505050565b825460009081908015612a045760006128dc8761198a6001856144bf565b60408051808201909152905463ffffffff808216808452600160201b9092046001600160e01b03166020840152919250908716101561295d5760405162461bcd60e51b815260206004820152601b60248201527f436865636b706f696e743a2064656372656173696e67206b657973000000000060448201526064016102e1565b805163ffffffff8088169116036129a5578461297e8861198a6001866144bf565b80546001600160e01b0392909216600160201b0263ffffffff9092169190911790556129f4565b6040805180820190915263ffffffff80881682526001600160e01b0380881660208085019182528b54600181018d5560008d81529190912094519151909216600160201b029216919091179101555b6020015192508391506119689050565b50506040805180820190915263ffffffff80851682526001600160e01b0380851660208085019182528854600181018a5560008a815291822095519251909316600160201b029190931617920191909155905081611968565b600063288ace0360e11b6318df743f60e31b63bf26d89760e01b6379dd796f60e01b6001600160e01b03198616821480612aa357506001600160e01b0319868116908216145b80612aba57506001600160e01b0319868116908516145b80612ad557506001600160e01b03198616630271189760e51b145b8061129757506301ffc9a760e01b6001600160e01b03198716149695505050505050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015612b5257507f000000000000000000000000000000000000000000000000000000000000000046145b15612b7c57507f000000000000000000000000000000000000000000000000000000000000000090565b610a17604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612c5b5750600090506003612cdf565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612caf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116612cd857600060019250925050612cdf565b9150600090505b94509492505050565b6000816004811115612cfc57612cfc613d74565b03612d045750565b6001816004811115612d1857612d18613d74565b03612d655760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016102e1565b6002816004811115612d7957612d79613d74565b03612dc65760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016102e1565b6003816004811115612dda57612dda613d74565b03610bb75760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016102e1565b60008581526006602090815260408083206001600160a01b0388168452600381019092529091205460ff1615612eba5760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f72566f74696e6753696d706c653a20766f746520616c726561604482015266191e4818d85cdd60ca1b60648201526084016102e1565b6001600160a01b03851660009081526003820160205260409020805460ff1916600117905560ff8416612f065782816000016000828254612efb919061443f565b90915550611e609050565b60001960ff851601612f265782816001016000828254612efb919061443f565b60011960ff851601612f465782816002016000828254612efb919061443f565b60405162461bcd60e51b815260206004820152603560248201527f476f7665726e6f72566f74696e6753696d706c653a20696e76616c69642076616044820152746c756520666f7220656e756d20566f74655479706560581b60648201526084016102e1565b8154600160801b90819004600f0b6000818152600180860160205260409091209390935583546001600160801b03908116939091011602179055565b60095460405163e38335e560e01b81526001600160a01b039091169063e38335e5903490613023908890889088906000908990600401614383565b6000604051808303818588803b15801561303c57600080fd5b505af1158015613050573d6000803e3d6000fd5b50505050505050505050565b6000818152600360205260408120600281015460ff16156130805750600792915050565b6002810154610100900460ff161561309b5750600292915050565b6000838152600360205260408120546001600160401b0316908190036131035760405162461bcd60e51b815260206004820152601d60248201527f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c20696400000060448201526064016102e1565b600061310d611337565b65ffffffffffff16905080821061312957506000949350505050565b6000858152600360205260409020600101546001600160401b03168181106131575750600195945050505050565b613160866134b2565b801561317f575060008681526006602052604090208054600190910154115b156131905750600495945050505050565b50600395945050505050565b6000610fd9858585856134fe565b6000816000036131bc57506000919050565b600060016131c9846135b0565b901c6001901b905060018184816131e2576131e261457a565b048201901c905060018184816131fa576131fa61457a565b048201901c905060018184816132125761321261457a565b048201901c9050600181848161322a5761322a61457a565b048201901c905060018184816132425761324261457a565b048201901c9050600181848161325a5761325a61457a565b048201901c905060018184816132725761327261457a565b048201901c90506113d08182858161328c5761328c61457a565b04613644565b60005b818310156132e85760006132a9848461365a565b60008781526020902090915063ffffffff86169082015463ffffffff1611156132d4578092506132e2565b6132df81600161443f565b93505b50613295565b509392505050565b80516000906034811015613308576001915050610a27565b82810160131901516001600160a01b031981166b046e0e4dee0dee6cae47a60f60a31b1461333b57600192505050610a27565b6000806133496028856144bf565b90505b838110156133c05760008061338088848151811061336c5761336c6144d2565b01602001516001600160f81b031916613675565b91509150816133985760019650505050505050610a27565b8060ff166004856001600160a01b0316901b1793505050806133b99061472a565b905061334c565b50856001600160a01b0316816001600160a01b031614935050505092915050565b60006001600160401b038211156118ec5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b60648201526084016102e1565b6060600061345683613707565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b8151156134985781518083602001fd5b8060405162461bcd60e51b81526004016102e19190613a98565b6000818152600660205260408120600281015460018201546134d4919061443f565b6000848152600360205260409020546134f5906001600160401b03166117a5565b11159392505050565b60008061350d8686868661372f565b6000818152600a602052604090205490915015610fd9576009546000828152600a60205260409081902054905163c4d252f560e01b81526001600160a01b039092169163c4d252f5916135669160040190815260200190565b600060405180830381600087803b15801561358057600080fd5b505af1158015613594573d6000803e3d6000fd5b5050506000828152600a60205260408120555095945050505050565b600080608083901c156135c557608092831c92015b604083901c156135d757604092831c92015b602083901c156135e957602092831c92015b601083901c156135fb57601092831c92015b600883901c1561360d57600892831c92015b600483901c1561361f57600492831c92015b600283901c1561363157600292831c92015b600183901c15610a275760010192915050565b600081831061365357816113d0565b5090919050565b60006136696002848418614590565b6113d09084841661443f565b60008060f883901c602f811180156136905750603a8160ff16105b156136a557600194602f199091019350915050565b8060ff1660401080156136bb575060478160ff16105b156136d0576001946036199091019350915050565b8060ff1660601080156136e6575060678160ff16105b156136fb576001946056199091019350915050565b50600093849350915050565b600060ff8216601f811115610a2757604051632cd44ac360e21b815260040160405180910390fd5b60008061373e8686868661163c565b9050600061374b82610fc0565b9050600281600781111561376157613761613d74565b141580156137815750600681600781111561377e5761377e613d74565b14155b801561379f5750600781600781111561379c5761379c613d74565b14155b6137eb5760405162461bcd60e51b815260206004820152601d60248201527f476f7665726e6f723a2070726f706f73616c206e6f742061637469766500000060448201526064016102e1565b60008281526003602052604090819020600201805461ff001916610100179055517f789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c90610e3b9084815260200190565b60006020828403121561384d57600080fd5b81356001600160e01b0319811681146113d057600080fd5b803560ff8116811461109f57600080fd5b60008083601f84011261388857600080fd5b5081356001600160401b0381111561389f57600080fd5b6020830191508360208285010111156138b757600080fd5b9250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156138fc576138fc6138be565b604052919050565b60006001600160401b0382111561391d5761391d6138be565b50601f01601f191660200190565b600061393e61393984613904565b6138d4565b905082815283838301111561395257600080fd5b828260208301376000602084830101529392505050565b600082601f83011261397a57600080fd5b6113d08383356020850161392b565b60008060008060008060008060e0898b0312156139a557600080fd5b883597506139b560208a01613865565b965060408901356001600160401b03808211156139d157600080fd5b6139dd8c838d01613876565b909850965060608b01359150808211156139f657600080fd5b50613a038b828c01613969565b945050613a1260808a01613865565b925060a0890135915060c089013590509295985092959890939650565b600060208284031215613a4157600080fd5b5035919050565b60005b83811015613a63578181015183820152602001613a4b565b50506000910152565b60008151808452613a84816020860160208601613a48565b601f01601f19169290920160200192915050565b6020815260006113d06020830184613a6c565b6001600160a01b0381168114610bb757600080fd5b60008060008060808587031215613ad657600080fd5b8435613ae181613aab565b93506020850135613af181613aab565b92506040850135915060608501356001600160401b03811115613b1357600080fd5b613b1f87828801613969565b91505092959194509250565b60006001600160401b03821115613b4457613b446138be565b5060051b60200190565b600082601f830112613b5f57600080fd5b81356020613b6f61393983613b2b565b82815260059290921b84018101918181019086841115613b8e57600080fd5b8286015b84811015613bb2578035613ba581613aab565b8352918301918301613b92565b509695505050505050565b600082601f830112613bce57600080fd5b81356020613bde61393983613b2b565b82815260059290921b84018101918181019086841115613bfd57600080fd5b8286015b84811015613bb25780358352918301918301613c01565b600082601f830112613c2957600080fd5b81356020613c3961393983613b2b565b82815260059290921b84018101918181019086841115613c5857600080fd5b8286015b84811015613bb25780356001600160401b03811115613c7b5760008081fd5b613c898986838b0101613969565b845250918301918301613c5c565b60008060008060808587031215613cad57600080fd5b84356001600160401b0380821115613cc457600080fd5b613cd088838901613b4e565b95506020870135915080821115613ce657600080fd5b613cf288838901613bbd565b94506040870135915080821115613d0857600080fd5b50613d1587828801613c18565b949793965093946060013593505050565b600080600080600060a08688031215613d3e57600080fd5b85359450613d4e60208701613865565b9350613d5c60408701613865565b94979396509394606081013594506080013592915050565b634e487b7160e01b600052602160045260246000fd5b6020810160088310613dac57634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215613dc557600080fd5b823591506020830135613dd781613aab565b809150509250929050565b60008060408385031215613df557600080fd5b82359150613e0560208401613865565b90509250929050565b600080600080600060808688031215613e2657600080fd5b85359450613e3660208701613865565b935060408601356001600160401b0380821115613e5257600080fd5b613e5e89838a01613876565b90955093506060880135915080821115613e7757600080fd5b50613e8488828901613969565b9150509295509295909350565b60008060008060608587031215613ea757600080fd5b84359350613eb760208601613865565b925060408501356001600160401b03811115613ed257600080fd5b613ede87828801613876565b95989497509550505050565b60008060008060808587031215613f0057600080fd5b84356001600160401b0380821115613f1757600080fd5b613f2388838901613b4e565b95506020870135915080821115613f3957600080fd5b613f4588838901613bbd565b94506040870135915080821115613f5b57600080fd5b613f6788838901613c18565b93506060870135915080821115613f7d57600080fd5b508501601f81018713613f8f57600080fd5b613b1f8782356020840161392b565b600081518084526020808501945080840160005b83811015613fce57815187529582019590820190600101613fb2565b509495945050505050565b60ff60f81b8816815260e060208201526000613ff860e0830189613a6c565b828103604084015261400a8189613a6c565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501529050610b228185613f9e565b60008060006060848603121561405057600080fd5b833561405b81613aab565b92506020840135915060408401356001600160401b0381111561407d57600080fd5b61408986828701613969565b9150509250925092565b6000602082840312156140a557600080fd5b81356113d081613aab565b600080600080600060a086880312156140c857600080fd5b85356140d381613aab565b945060208601356140e381613aab565b935060408601356001600160401b03808211156140ff57600080fd5b61410b89838a01613bbd565b9450606088013591508082111561412157600080fd5b61412d89838a01613bbd565b93506080880135915080821115613e7757600080fd5b6000806000806060858703121561415957600080fd5b843561416481613aab565b93506020850135925060408501356001600160401b03811115613ed257600080fd5b6000806040838503121561419957600080fd5b82356141a481613aab565b946020939093013593505050565b600080600080600060a086880312156141ca57600080fd5b85356141d581613aab565b945060208601356141e581613aab565b9350604086013592506060860135915060808601356001600160401b0381111561420e57600080fd5b613e8488828901613969565b8183823760009101908152919050565b60208082526018908201527f476f7665726e6f723a206f6e6c79476f7665726e616e63650000000000000000604082015260600190565b600181811c9082168061427557607f821691505b60208210810361429557634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526021908201527f476f7665726e6f723a2070726f706f73616c206e6f74207375636365737366756040820152601b60fa1b606082015260800190565b6000602082840312156142ee57600080fd5b5051919050565b600081518084526020808501945080840160005b83811015613fce5781516001600160a01b031687529582019590820190600101614309565b600081518084526020808501808196508360051b8101915082860160005b85811015614376578284038952614364848351613a6c565b9885019893509084019060010161434c565b5091979650505050505050565b60a08152600061439660a08301886142f5565b82810360208401526143a88188613f9e565b905082810360408401526143bc818761432e565b60608401959095525050608001529392505050565b60c0815260006143e460c08301896142f5565b82810360208401526143f68189613f9e565b9050828103604084015261440a818861432e565b60608401969096525050608081019290925260a0909101529392505050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610a2757610a27614429565b60006020828403121561446457600080fd5b81516001600160401b0381111561447a57600080fd5b8201601f8101841361448b57600080fd5b805161449961393982613904565b8181528560208385010111156144ae57600080fd5b610fd9826020830160208601613a48565b81810381811115610a2757610a27614429565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156144fa57600080fd5b815165ffffffffffff811681146113d057600080fd5b60808152600061452360808301876142f5565b82810360208401526145358187613f9e565b90508281036040840152614549818661432e565b91505082606083015295945050505050565b600081600019048311821515161561457557614575614429565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826145ad57634e487b7160e01b600052601260045260246000fd5b500490565b601f8211156145f857600081815260208120601f850160051c810160208610156145d95750805b601f850160051c820191505b81811015611e60578281556001016145e5565b505050565b81516001600160401b03811115614616576146166138be565b61462a816146248454614261565b846145b2565b602080601f83116001811461465f57600084156146475750858301515b600019600386901b1c1916600185901b178555611e60565b600085815260208120601f198616915b8281101561468e5788860151825594840194600190910190840161466f565b50858210156146ac5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b84815260ff841660208201528260408201526080606082015260006112976080830184613a6c565b85815260ff8516602082015283604082015260a06060820152600061470c60a0830185613a6c565b828103608084015261471e8185613a6c565b98975050505050505050565b60006001820161473c5761473c614429565b5060010190565b60006020828403121561475557600080fd5b815180151581146113d057600080fd5b60208082526021908201527f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e67746040820152600d60fb1b606082015260800190565b60006101208b8352602060018060a01b038c16818501528160408501526147cf8285018c6142f5565b915083820360608501526147e3828b613f9e565b915083820360808501528189518084528284019150828160051b850101838c0160005b8381101561483457601f19878403018552614822838351613a6c565b94860194925090850190600101614806565b505086810360a0880152614848818c61432e565b9450505050508560c08401528460e084015282810361010084015261486d8185613a6c565b9c9b505050505050505050505050565b805160208083015191908110156142955760001960209190910360031b1b1691905056fe476f7665726e6f723a2072656c617920726576657274656420776974686f7574206d657373616765a2646970667358221220bbc3f83b0ee7ef20bd0ecff8ca3a75ed88af16954afc71b15f1ca85c0fcf413164736f6c63430008100033";